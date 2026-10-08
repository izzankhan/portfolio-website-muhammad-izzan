import { useEffect, useRef } from "react";
import { getAudioEngine } from "./audio-engine";

/* ------------------------------------------------------------------ */
/* Hook used by the cinematic demo players to drive audio:            */
/*  - starts/stops ambient background music with playback              */
/*  - speaks the current scene's narration (voice-over)               */
/*  - plays a soft transition sound when a new scene begins           */
/*  - respects the player's mute toggle                                */
/* ------------------------------------------------------------------ */

export function useDemoAudio(opts: {
  playing: boolean;
  muted: boolean;
  narration: string;
  sceneId: number;
}) {
  const { playing, muted, narration, sceneId } = opts;
  const lastScene = useRef<number>(-1);
  const prevPlaying = useRef<boolean>(false);

  // Manage music + mute state with playback.
  useEffect(() => {
    const eng = getAudioEngine();
    if (!eng) return;
    if (playing) {
      eng.resume();
      if (muted) {
        eng.setMuted(true);
        eng.stopMusic();
        eng.stopSpeak();
      } else {
        eng.setMuted(false);
        eng.startMusic();
      }
      if (!prevPlaying.current) lastScene.current = -1; // re-speak on fresh play
    } else {
      eng.stopMusic();
      eng.stopSpeak();
    }
    prevPlaying.current = playing;
  }, [playing, muted]);

  // Speak narration + transition sound when the scene changes.
  useEffect(() => {
    const eng = getAudioEngine();
    if (!eng) return;
    if (!playing || muted) return;
    if (sceneId === lastScene.current) return;
    lastScene.current = sceneId;
    eng.playSfx("whoosh");
    const id = window.setTimeout(() => eng.speak(narration), 380);
    return () => window.clearTimeout(id);
  }, [sceneId, playing, muted, narration]);

  // Cleanup on unmount.
  useEffect(() => {
    return () => {
      const eng = getAudioEngine();
      if (!eng) return;
      eng.stopMusic();
      eng.stopSpeak();
    };
  }, []);
}
