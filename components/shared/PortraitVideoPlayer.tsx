"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { VideoConfig } from "@/data/videos";

interface PortraitVideoPlayerProps {
  video: VideoConfig;
  className?: string;
}

export const PortraitVideoPlayer: React.FC<PortraitVideoPlayerProps> = ({
  video,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.error("Playback failed:", e));
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className={`relative mx-auto w-full max-w-[280px] sm:max-w-[300px] ${className}`}>
      {/* Outer frame with brand accent */}
      <div className="relative rounded-[2rem] p-2.5 bg-gradient-to-b from-brand-gold/40 via-brand-cerulean/20 to-brand-marine/50 shadow-xl">
        {/* Inner video container — portrait 9:16 */}
        <div className="relative rounded-[1.5rem] overflow-hidden bg-slate-950 border border-white/10 aspect-[9/16]">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            playsInline
            muted={isMuted}
            preload="none"
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            title={video.title}
          >
            {/* Caption integration point — captions pending */}
            <track kind="captions" srcLang="en" label="English" src="" default={false} />
            Your browser does not support HTML5 video playback.
          </video>

          {/* Poster overlay when not playing */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-between p-4 cursor-pointer"
              onClick={handlePlayToggle}
              role="button"
              tabIndex={0}
              aria-label={`Play ${video.title} (${video.durationFormatted})`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePlayToggle();
                }
              }}
            >
              {/* Top badges */}
              <div className="flex items-center justify-between pt-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-marine/80 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                  {video.badge}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/60 text-white border border-white/20">
                  {video.durationFormatted}
                </span>
              </div>

              {/* Center play button */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-brand-cerulean/90 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-brand-gold">
                  <Play className="w-6 h-6 ml-0.5 fill-white" />
                </div>
              </div>

              {/* Bottom info */}
              <div className="space-y-0.5 text-left">
                <h4 className="text-sm font-bold text-white line-clamp-2">{video.title}</h4>
                <p className="text-[11px] text-slate-300">
                  Tap to watch ({video.durationFormatted})
                </p>
              </div>
            </div>
          )}

          {/* Playback controls */}
          {isPlaying && (
            <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between bg-black/70 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10 text-white text-xs">
              <button
                onClick={handlePlayToggle}
                className="p-1 rounded hover:bg-white/20 transition-colors"
                aria-label="Pause video"
              >
                <Pause className="w-4 h-4 fill-white" />
              </button>

              <button
                onClick={handleMuteToggle}
                className="p-1 rounded hover:bg-white/20 transition-colors flex items-center gap-1 text-[11px]"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-amber-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                )}
                <span>{isMuted ? "Unmute" : "Sound On"}</span>
              </button>

              <button
                onClick={handleFullscreen}
                className="p-1 rounded hover:bg-white/20 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Caption status */}
      <div className="mt-2 text-center">
        <span className="text-[10px] text-slate-500 font-medium">
          {video.aspectRatio} Portrait · {video.captionStatus}
        </span>
      </div>
    </div>
  );
};
