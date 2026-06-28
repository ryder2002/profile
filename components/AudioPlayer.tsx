"use client";

import { useEffect, useRef } from "react";
import { Music2 } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;
    audio.loop = true;

    const playOnInteraction = () => {
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
      document.removeEventListener("click", playOnInteraction);
      document.removeEventListener("touchstart", playOnInteraction);
      document.removeEventListener("scroll", playOnInteraction);
    };

    document.addEventListener("click", playOnInteraction);
    document.addEventListener("touchstart", playOnInteraction);
    document.addEventListener("scroll", playOnInteraction);

    setTimeout(() => {
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
    }, 500);

    return () => {
      document.removeEventListener("click", playOnInteraction);
      document.removeEventListener("touchstart", playOnInteraction);
      document.removeEventListener("scroll", playOnInteraction);
    };
  }, []);

  return (
    <audio ref={audioRef}>
      <source src="/audio.mp3" type="audio/mpeg" />
    </audio>
  );
}
