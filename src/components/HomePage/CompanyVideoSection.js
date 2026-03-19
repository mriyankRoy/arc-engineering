import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Activity, Maximize2, X } from "lucide-react";
import { Helmet } from "react-helmet-async"; // SEO: Added Helmet

const CompanyVideoSection = ({
  videoSrc = "https://res.cloudinary.com/dc912sjxj/video/upload/v1771941200/Art_Genpower_Solutions_Ltd_Video_q9curf.mp4",
  title = "Operational Excellence",
  tagline = "Visualizing the future of power infrastructure and strategic assembly.",
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hover, setHover] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // SEO: Structured Data for Google Video Search
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Arc Engineering Operational Excellence",
    "description": tagline,
    "thumbnailUrl": [
      "https://arcengltd.com/video-thumbnail.jpg" // Replace with a real static image URL
    ],
    "uploadDate": "2024-01-01T08:00:00+08:00",
    "contentUrl": videoSrc,
    "embedUrl": "https://arcengltd.com",
    "potentialAction": {
      "@type": "SeekToAction",
      "target": "https://arcengltd.com?t={seek_to_second_number}",
      "startOffset-input": "required name=seek_to_second_number"
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = (visible, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  const handleMouseMove = () => {
    setShowControls(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isPlaying) {
      timerRef.current = setTimeout(() => setShowControls(false), 2500);
    }
  };

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setShowControls(true);
  };

  const handleFullScreen = () => {
    const elem = containerRef.current;
    if (elem?.requestFullscreen) elem.requestFullscreen();
    else if (elem?.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  };

  const exitFullScreen = (e) => {
    e.stopPropagation();
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 overflow-hidden"
      aria-labelledby="video-section-title"
    >
      {/* SEO: Injecting Video Schema and Meta Tags */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
        <meta property="og:video" content={videoSrc} />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* --- 🏗️ INDUSTRIAL HEADER --- */}
        <header className={`mb-16 ${revealClass(isVisible)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" aria-hidden="true" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" aria-hidden="true" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              System Stream
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 id="video-section-title" className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              Operational <br />
              <span className="text-[#BF092F]">{title}</span>
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              {tagline}
            </p>
          </div>
        </header>

        {/* --- VIDEO PLAYER CHASSIS --- */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`group relative w-full bg-black transition-all duration-500 overflow-hidden 
            ${revealClass(isVisible, "duration-[1200ms] delay-300")}
            ${isFullscreen ? "rounded-0" : "rounded-2xl shadow-xl border border-gray-100"}
            ${!showControls && isPlaying ? "cursor-none" : "cursor-default"}`}
        >
          {isFullscreen && (
            <button
              onClick={exitFullScreen}
              aria-label="Exit Fullscreen"
              className={`absolute top-10 right-10 text-white/50 hover:text-[#BF092F] transition-all z-[110] 
                ${showControls || !isPlaying ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
              <X size={40} className="hover:rotate-90 transition-transform" />
            </button>
          )}

          <div className={`relative bg-gray-900 overflow-hidden ${isFullscreen ? "h-screen w-screen" : "aspect-video"}`}>
            {/* Native Video Engine - Added Title and SEO attributes */}
            <video
              ref={videoRef}
              src={videoSrc}
              title={`${title} - Arc Engineering Infrastructure`}
              className="w-full h-full object-cover"
              playsInline
              onClick={togglePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* --- OVERLAY INTERFACE --- */}
            <div
              className={`absolute inset-0 bg-black/30 transition-opacity duration-700 flex items-center justify-center
              ${showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <button
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="cursor-pointer w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 border-2 bg-[#BF092F] border-[#BF092F] shadow-[0_10px_30px_rgba(191,9,47,0.4)] hover:scale-110 active:scale-95"
              >
                {isPlaying ? (
                  <Pause size={32} className="text-white fill-white" />
                ) : (
                  <Play size={32} className="text-white fill-white translate-x-1" />
                )}
              </button>
            </div>
          </div>

          {/* --- BOTTOM INFORMATION BAR (Desktop Mode) --- */}
          {!isFullscreen && (
            <footer className="p-8 bg-white border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-1 h-10 bg-[#BF092F]" aria-hidden="true" />
                <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed max-w-xl uppercase font-medium">
                  <strong>Service Overview:</strong> {tagline}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-8 w-px bg-gray-100" aria-hidden="true" />
                <button
                  onClick={handleFullScreen}
                  aria-label="View video in fullscreen"
                  className="cursor-pointer flex items-center gap-2 text-[#BF092F] font-bold text-[11px] uppercase tracking-[0.2em] hover:scale-105 transition-transform"
                >
                  Full Screen <Maximize2 size={16} aria-hidden="true" />
                </button>
              </div>
            </footer>
          )}

          {!isFullscreen && (
            <div
              className={`absolute bottom-0 left-0 h-1 bg-[#BF092F] transition-all duration-700 ${hover ? "w-full" : "w-0"}`}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyVideoSection;