"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        audio.volume = 0.3;
        await audio.play();
      } catch (err) {
        console.log("Audio autoplay blocked by browser");
      }
    };

    playAudio();
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/audio.mp3" type="audio/mpeg" />
    </audio>
  );
}
