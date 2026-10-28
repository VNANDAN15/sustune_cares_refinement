"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2, Shield } from "lucide-react";
import { VideoConfig } from "@/data/videos";

interface VideoDeviceCardProps {
  video: VideoConfig;
  onOpenModal?: (video: VideoConfig) => void;
  priority?: boolean;
}

export const VideoDeviceCard: React.FC<VideoDeviceCardProps> = ({ video, onOpenModal, priority = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.error("Playback failed:", e);
      });
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px] group">
      {/* Outer Luxury Phone Frame / Heraldic Border Glow */}
      <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-brand-gold/60 via-brand-cerulean/30 to-brand-marine/70 shadow-2xl transition-all duration-300 group-hover:shadow-subtle-gold">
        
        {/* Inner Phone Chassis */}
        <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 border border-white/20 aspect-[9/16] flex flex-col justify-between">
          
          {/* Top Notch Speaker / Indicator */}
          <div className="absolute top-2 inset-x-0 z-30 flex justify-center pointer-events-none">
            <div className="w-20 h-4 bg-slate-900/90 rounded-full border border-white/10 flex items-center justify-center gap-1.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              <span className="w-8 h-1 rounded-full bg-slate-800"></span>
            </div>
          </div>

          {/* HTML5 Video Element */}
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
          >
            <track kind="captions" srcLang="en" label="English" src="" default={false} />
            Your browser does not support HTML5 video playback.
          </video>

          {/* Video Poster Facade Overlay (Visible when not playing) */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-between p-5 z-20 cursor-pointer"
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
              {/* Top Badge */}
              <div className="pt-5 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-marine/80 text-brand-gold border border-brand-gold/40 backdrop-blur-sm">
                  {video.badge}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/60 text-white border border-white/20">
                  {video.durationFormatted}
                </span>
              </div>

              {/* Center Play Button Icon with Pulsing Effect */}
              <div className="my-auto mx-auto flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-cerulean/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 border-2 border-brand-gold">
                  <Play className="w-7 h-7 ml-1 fill-white" />
                </div>
              </div>

              {/* Bottom Card Title Info */}
              <div className="space-y-1 text-left">
                <span className="text-[10px] font-semibold text-brand-gold uppercase tracking-wider">
                  Verified Video Presentation
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1">
                  Tap to watch on-demand ({video.durationFormatted})
                </p>
              </div>
            </div>
          )}

          {/* Interactive Floating Quick Controls during playback */}
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
                {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                <span>{isMuted ? "Unmute" : "Sound On"}</span>
              </button>

              {onOpenModal && (
                <button
                  onClick={() => onOpenModal(video)}
                  className="p-1 rounded hover:bg-white/20 transition-colors"
                  aria-label="Expand video modal"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

        </div>

      </div>

      {/* External Subtitle / Caption Status Disclaimer */}
      <div className="mt-2 text-center">
        <span className="text-[10px] text-slate-500 font-medium">
          Official Media · {video.aspectRatio} Portrait Frame · {video.captionStatus}
        </span>
      </div>

    </div>
  );
};
