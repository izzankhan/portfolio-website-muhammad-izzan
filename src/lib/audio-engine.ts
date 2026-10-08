/* ------------------------------------------------------------------ */
/* Audio engine for the cinematic demo players.                        */
/* Generates ambient background music, soft transition sound effects   */
/* and voice-over narration entirely in the browser — no audio files.  */
/*  - Background music: Web Audio API ambient pad (detuned oscillators  */
/*    + slow filter/LFO sweeps).                                       */
/*  - SFX: short synthesized blips, whooshes and notifications.        */
/*  - Narration: SpeechSynthesis API with a calm male English voice.    */
/* ------------------------------------------------------------------ */

type SfxType = "click" | "notify" | "whoosh" | "stage" | "lead";

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private bgFilter: BiquadFilterNode | null = null;
  private bgOscillators: OscillatorNode[] = [];
  private bgLfos: OscillatorNode[] = [];
  private musicOn = false;
  private muted = false;
  private preferredVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.loadVoices();
      try {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      } catch {
        /* ignore */
      }
    }
  }

  private loadVoices() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
    const maleNames = [
      "Google UK English Male",
      "Microsoft George",
      "Microsoft Ryan",
      "Microsoft Guy",
      "Microsoft Ravi",
      "Daniel",
      "Arthur",
      "Oliver",
      "Rishi",
      "Google US English",
    ];
    this.preferredVoice =
      en.find((v) => maleNames.some((n) => v.name.includes(n))) ??
      en.find((v) => /male|guy|george|daniel|arthur|oliver/i.test(v.name)) ??
      en[0] ??
      null;
  }

  private ensureCtx(): AudioContext | null {
    if (this.ctx) return this.ctx;
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    this.ctx = new AC();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.muted ? 0 : 1;
    this.masterGain.connect(this.ctx.destination);
    return this.ctx;
  }

  async resume() {
    const ctx = this.ensureCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      try {
        await ctx.resume();
      } catch {
        /* ignore */
      }
    }
  }

  setMuted(m: boolean) {
    this.muted = m;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setTargetAtTime(m ? 0 : 1, now, 0.05);
    }
    if (m) this.stopSpeak();
  }

  isMuted() {
    return this.muted;
  }

  /* ---------------- Background ambient music ---------------- */
  startMusic() {
    const ctx = this.ensureCtx();
    if (!ctx || !this.masterGain || this.musicOn) return;
    this.musicOn = true;
    const now = ctx.currentTime;

    this.musicGain = ctx.createGain();
    this.musicGain.gain.value = 0;
    this.musicGain.gain.setTargetAtTime(0.05, now, 1.5);
    this.musicGain.connect(this.masterGain);

    this.bgFilter = ctx.createBiquadFilter();
    this.bgFilter.type = "lowpass";
    this.bgFilter.frequency.value = 700;
    this.bgFilter.Q.value = 0.7;
    this.bgFilter.connect(this.musicGain);

    // Soft A-minor pad: A2, E3, A3, C4, E4
    const freqs = [110, 164.81, 220, 261.63, 329.63];
    freqs.forEach((f, idx) => {
      [0, 1].forEach((d) => {
        const osc = ctx.createOscillator();
        osc.type = idx < 2 ? "sine" : "triangle";
        osc.frequency.value = f;
        osc.detune.value = d === 0 ? -5 : 6;
        const g = ctx.createGain();
        g.gain.value = 0.5 / freqs.length;
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.03 + idx * 0.012;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.22;
        lfo.connect(lfoGain);
        lfoGain.connect(g.gain);
        osc.connect(g);
        g.connect(this.bgFilter!);
        osc.start(now);
        lfo.start(now);
        this.bgOscillators.push(osc);
        this.bgLfos.push(lfo);
      });
    });

    // slow filter sweep for movement
    const filterLfo = ctx.createOscillator();
    filterLfo.frequency.value = 0.04;
    const filterLfoGain = ctx.createGain();
    filterLfoGain.gain.value = 240;
    filterLfo.connect(filterLfoGain);
    filterLfoGain.connect(this.bgFilter.frequency);
    filterLfo.start(now);
    this.bgLfos.push(filterLfo);
  }

  stopMusic() {
    if (!this.ctx || !this.musicOn) return;
    this.musicOn = false;
    const now = this.ctx.currentTime;
    if (this.musicGain) {
      this.musicGain.gain.cancelScheduledValues(now);
      this.musicGain.gain.setTargetAtTime(0, now, 0.4);
    }
    const oscs = this.bgOscillators;
    const lfos = this.bgLfos;
    this.bgOscillators = [];
    this.bgLfos = [];
    setTimeout(() => {
      oscs.forEach((o) => {
        try {
          o.stop();
        } catch {
          /* ignore */
        }
      });
      lfos.forEach((o) => {
        try {
          o.stop();
        } catch {
          /* ignore */
        }
      });
    }, 1300);
  }

  /* ---------------- Sound effects ---------------- */
  private blip(freq: number, dur: number, type: OscillatorType = "sine", vol = 0.12, when = 0) {
    const ctx = this.ensureCtx();
    if (!ctx || !this.masterGain || this.muted) return;
    const now = ctx.currentTime + when;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(vol, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + dur + 0.05);
  }

  playSfx(type: SfxType) {
    switch (type) {
      case "click":
        this.blip(880, 0.08, "triangle", 0.07);
        this.blip(1320, 0.06, "sine", 0.04, 0.02);
        break;
      case "notify":
        this.blip(660, 0.12, "sine", 0.09);
        this.blip(990, 0.16, "sine", 0.08, 0.1);
        break;
      case "stage":
        this.blip(523.25, 0.18, "sine", 0.08);
        this.blip(784, 0.22, "sine", 0.06, 0.06);
        break;
      case "lead":
        this.blip(740, 0.1, "sine", 0.08);
        this.blip(1108, 0.18, "sine", 0.07, 0.08);
        break;
      case "whoosh":
        this.playWhoosh();
        break;
    }
  }

  private playWhoosh() {
    const ctx = this.ensureCtx();
    if (!ctx || !this.masterGain || this.muted) return;
    const now = ctx.currentTime;
    const bufferSize = Math.floor(ctx.sampleRate * 0.5);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(2400, now + 0.4);
    filter.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.linearRampToValueAtTime(0.06, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    src.connect(filter);
    filter.connect(g);
    g.connect(this.masterGain);
    src.start(now);
    src.stop(now + 0.5);
  }

  /* ---------------- Narration ---------------- */
  speak(text: string) {
    if (this.muted) return;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      if (this.preferredVoice) u.voice = this.preferredVoice;
      u.rate = 0.96;
      u.pitch = 0.92;
      u.volume = 1;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  }

  stopSpeak() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        /* ignore */
      }
    }
  }

  dispose() {
    this.stopMusic();
    this.stopSpeak();
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch {
        /* ignore */
      }
      this.ctx = null;
    }
  }
}

let engine: AudioEngine | null = null;

export function getAudioEngine(): AudioEngine | null {
  if (typeof window === "undefined") return null;
  if (!engine) engine = new AudioEngine();
  return engine;
}
