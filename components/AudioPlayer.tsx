"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.loop = true;
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
        setShowPrompt(false);
      }
    } catch (err) {
      console.log("Audio playback blocked");
    }
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>
      
      {showPrompt && (
        <button
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-md text-white font-medium rounded-full shadow-lg border border-white/30 hover:bg-white/30 transition-all duration-300 animate-pulse"
        >
          <Music className="w-5 h-5" />
          <span className="text-sm">Bật nhạc</span>
        </button>
      )}

      {!showPrompt && isPlaying && (
        <button
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-white/15 backdrop-blur-md text-white font-medium rounded-full shadow-lg border border-white/20 hover:bg-white/25 transition-all duration-300"
          title="Tắt nhạc"
        >
          <Music2 className="w-5 h-5 animate-pulse" />
        </button>
      )}
    </>
  );
}
