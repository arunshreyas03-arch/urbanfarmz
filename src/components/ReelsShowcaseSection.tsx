import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flame 
} from 'lucide-react';

// =========================================================================
// 🎬 REELS & SHORTS CONFIGURATION
// Add, replace, or reorder your video links below anytime!
// Supports:
// 1. YouTube Shorts (e.g. "https://www.youtube.com/shorts/ID")
// 2. Instagram Reels (e.g. "https://www.instagram.com/reel/ID/")
// 3. Standard YouTube (e.g. "https://www.youtube.com/watch?v=ID")
// 4. Direct MP4 video files (e.g. "/assets/my-video.mp4")
// =========================================================================
export interface ReelItem {
  id: string;
  title: string;
  videoUrl: string; // Paste your YouTube Shorts, Instagram Reel, or MP4 video link here!
  posterImage?: string; // Optional: auto-generated for YouTube Shorts & saved reels
}

const initialReelsData: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Greatest Girl(?) Dad Ever 👀',
    videoUrl: 'https://www.youtube.com/shorts/FNFecjU3sy0',
  },
  {
    id: 'reel-2',
    title: 'Real Work Behind The Harvest - Farm Stories',
    videoUrl: 'https://www.instagram.com/reel/DeJiI8_MJG4/',
    posterImage: '/assets/ig-reel-DeJiI8_MJG4.jpg',
  },
  {
    id: 'reel-3',
    title: 'Punjabi Stereotypes are TRUE!',
    videoUrl: 'https://www.youtube.com/shorts/JkaO3_aP430',
  },
  {
    id: 'reel-4',
    title: 'so easy bro #prank #motivation',
    videoUrl: 'https://www.youtube.com/shorts/Ed0Tt2gF-zI',
  },
  {
    id: 'reel-5',
    title: 'Live TV Tech Fails with LINUS TECH TIPS 😂💻',
    videoUrl: 'https://www.youtube.com/shorts/wmHDjqwuzi4',
  },
  {
    id: 'reel-6',
    title: 'Urbanfarmz Moments & Studio Fun',
    videoUrl: 'https://www.youtube.com/shorts/wmHDjqwuzi4',
  },
];

// Helper to extract video metadata, thumbnail, and clean embed source
const parseVideoMedia = (url: string, customPoster?: string) => {
  if (!url) return { type: 'unknown', src: '', poster: '' };

  // Instagram Reel
  const igMatch = url.match(/(?:instagram\.com\/(?:reel|p)\/)([a-zA-Z0-9_-]+)/);
  if (igMatch && igMatch[1]) {
    const reelId = igMatch[1];
    return {
      type: 'instagram',
      videoId: reelId,
      src: `https://www.instagram.com/reel/${reelId}/embed/`,
      poster: customPoster || '/assets/ig-reel-DeJiI8_MJG4.jpg',
    };
  }

  // YouTube Shorts / Watch
  const ytMatch = url.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return {
      type: 'youtube',
      videoId,
      // Minimal embed without player controls or annotations for a pure video look
      src: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`,
      poster: customPoster || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  }

  return {
    type: 'mp4',
    videoId: '',
    src: url,
    poster: customPoster || '',
  };
};

export const ReelsShowcaseSection: React.FC = () => {
  const [reels] = useState<ReelItem[]>(initialReelsData);
  const [activeIndex, setActiveIndex] = useState(0);

  // Swipe and Drag gesture tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isMouseDown = useRef(false);
  const mouseStartX = useRef<number | null>(null);
  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return;
    const distance = mouseStartX.current - e.clientX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    isMouseDown.current = false;
    mouseStartX.current = null;
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reels.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reels.length]);

  return (
    <section 
      id="reels" 
      className="relative py-16 sm:py-24 bg-[#030905] text-white overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Background ambient lighting - futuristic dark organic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[480px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle floor grid texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(0, 255, 136, 0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-farm-bright text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-3 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-farm-bright fill-farm-bright animate-pulse" />
            <span>FARM REELS & SHORTS</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug uppercase">
            GLIMPSES FROM{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              URBANFARMZ
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 font-normal">
            Swipe left or right to explore real farm moments, growing updates, and harvest celebrations.
          </p>
        </div>

        {/* 3D Motion-Graphic Phone Coverflow Showcase */}
        <div 
          className="relative w-full h-[470px] sm:h-[540px] md:h-[590px] flex items-center justify-center overflow-visible"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: '1100px' }}
        >
          {reels.map((reel, index) => {
            const total = reels.length;
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isActive = diff === 0;
            const isVisible = Math.abs(diff) <= 2;
            if (!isVisible) return null;

            // 3D coverflow transforms matching reference screenshot
            // Center is large and facing front; side cards turn inwards and step backwards into 3D depth
            let translateX = diff * 74; // % horizontal shift
            let translateZ = isActive ? 0 : -Math.abs(diff) * 110; // depth
            let rotateY = diff * -25; // 3D concave tilt towards center
            let scale = isActive ? 1.05 : 1 - Math.abs(diff) * 0.15;
            let opacity = isActive ? 1 : Math.max(0.4, 1 - Math.abs(diff) * 0.35);
            let zIndex = 50 - Math.abs(diff) * 12;

            const media = parseVideoMedia(reel.videoUrl, reel.posterImage);

            return (
              <div
                key={reel.id}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                  }
                }}
                className="absolute cursor-pointer transition-all duration-500 ease-out will-change-transform flex flex-col items-center pointer-events-auto"
                style={{
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                {/* Smartphone Mockup Body */}
                <div 
                  className={`w-[220px] h-[410px] sm:w-[260px] sm:h-[480px] md:w-[285px] md:h-[530px] rounded-[2.3rem] sm:rounded-[2.7rem] p-2 sm:p-2.5 bg-gradient-to-b from-[#1c261f] via-[#0d1610] to-[#070d09] transition-all duration-300 relative ${
                    isActive
                      ? 'border-2 border-farm-bright/80 shadow-[0_0_45px_rgba(0,255,136,0.35)] ring-1 ring-emerald-400/30'
                      : 'border border-white/15 shadow-2xl hover:border-white/30'
                  }`}
                >
                  {/* Smartphone Top Speaker / Dynamic Island */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black/95 rounded-full z-30 flex items-center justify-center gap-1.5 border border-white/10 shadow-inner pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="w-6 h-1 rounded-full bg-white/25" />
                  </div>

                  {/* Clean Smartphone Screen Container */}
                  <div className="relative w-full h-full rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden bg-black flex items-center justify-center">
                    {isActive ? (
                      media.type === 'youtube' ? (
                        <iframe
                          src={media.src}
                          title={reel.title}
                          className="w-full h-full border-0 pointer-events-auto bg-black"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : media.type === 'instagram' ? (
                        // Smart zoom-and-crop framing for Instagram to remove the header ("View profile") and footer ("likes/comments")
                        <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                          <iframe
                            src={media.src}
                            title={reel.title}
                            className="absolute w-[124%] h-[152%] -top-[15%] -left-[12%] border-0 pointer-events-auto bg-black"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            scrolling="no"
                          />
                        </div>
                      ) : (
                        <video
                          src={media.src}
                          poster={media.poster}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )
                    ) : (
                      <img
                        src={media.poster}
                        alt={reel.title}
                        className="w-full h-full object-cover filter brightness-85 transition-all"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>

                {/* 3D Realistic Floor Shadow (matches coverflow perspective) */}
                <div 
                  className={`h-4 rounded-full blur-md transition-all duration-500 mt-3 ${
                    isActive 
                      ? 'w-[78%] bg-emerald-500/25 shadow-[0_0_25px_rgba(0,255,136,0.3)]' 
                      : 'w-[68%] bg-black/80'
                  }`} 
                />
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons & Pagination Indicator */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-farm-bright hover:text-black border border-white/15 text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group"
              aria-label="Previous Reel"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Pagination Dots with Active Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
              {reels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'w-6 bg-gradient-to-r from-farm-bright to-emerald-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to reel ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-farm-bright hover:text-black border border-white/15 text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group"
              aria-label="Next Reel"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="text-[11px] sm:text-xs text-gray-400 font-mono flex items-center gap-2">
            <span>Swipe or click arrows to browse</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">{activeIndex + 1} of {reels.length}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
