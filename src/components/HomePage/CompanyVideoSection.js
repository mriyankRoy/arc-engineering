import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Activity, Maximize2, Volume2, VolumeX } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CompanyVideoSection = ({
  videoSrc = "https://media.arcengltd.com/arc-profile/arc-company-video.mp4",
  posterSrc = "https://media.arcengltd.com/arc-profile/arc-hero-video-poster.webp",
  title = "Infrastructure Scale",
  tagline = "A visual overview of our 41,000 SQM manufacturing capacity and UK-led engineering protocols.",
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // SEO: Comprehensive Schema.org for Video Search Discovery
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `Arc Engineering Solutions Ltd | ${title} Facility Insight`,
    "description": tagline,
    "thumbnailUrl": [posterSrc],
    "uploadDate": "2026-03-24T18:00:00+00:00",
    "contentUrl": videoSrc,
    "embedUrl": "https://arcengltd.com",
    "duration": "PT0M45S", // Estimated; update with exact duration if known
    "publisher": {
      "@type": "Organization",
      "name": "Arc Engineering Solutions Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arcengltd.com/logo.png"
      }
    },
    "regionsAllowed": ["GB", "IE", "DE", "FR", "US"]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlayPause = () => {
    if (!videoStarted) setVideoStarted(true);

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = (e) => {
    e.stopPropagation();
    const elem = containerRef.current;
    if (elem?.requestFullscreen) elem.requestFullscreen();
    else if (elem?.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-20 md:py-32 overflow-hidden" aria-labelledby="facility-video-title">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
        <meta property="og:video" content={videoSrc} />
        <meta property="og:video:type" content="video/mp4" />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content={`Arc Engineering Facility | ${title}`} />
      </Helmet>

      <div className="container mx-auto px-4 md:px-8">
        <header className={`mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-[#BF092F]" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#44444E]/60">Facility Insight</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 id="facility-video-title" className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#44444E] leading-[0.85]">
              Manufacturing <span className="text-[#BF092F] block md:inline">{title}</span>
            </h2>
            <p className="max-w-xs text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 border-l-2 border-gray-100 pl-6 leading-relaxed">
              {tagline}
            </p>
          </div>
        </header>

        <div 
          ref={containerRef}
          className={`relative w-full aspect-[3/4] md:aspect-video bg-[#44444E] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            playsInline
            onClick={togglePlayPause}
            preload="metadata"
            title={`Arc Engineering Solutions Ltd - ${title} Facility Overview`}
          >
            {videoStarted && <source src={videoSrc} type="video/mp4" />}
          </video>

          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ backgroundImage: `url(${posterSrc})` }}
            role="img"
            aria-label="Video placeholder showing manufacturing facility"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] md:w-auto min-w-[300px] md:min-w-[400px] z-20">
            <div className={`backdrop-blur-2xl bg-black/30 border border-white/10 rounded-2xl p-3 md:p-4 flex items-center justify-between gap-6 shadow-2xl transition-all duration-500 
              ${videoStarted && (isPlaying ? 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0' : 'opacity-100 translate-y-0')}`}
            >
              <button 
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="w-12 h-12 rounded-xl bg-[#BF092F] flex items-center justify-center text-white hover:bg-[#d1082d] transition-colors"
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="translate-x-0.5" />}
              </button>

              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Arc Engineering</span>
                <span className="text-[8px] text-white/40 uppercase tracking-[0.2em] mt-1">UAE Production Facility</span>
              </div>

              <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"} className="text-white/60 hover:text-white transition-colors">
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button onClick={handleFullScreen} aria-label="Fullscreen" className="text-white/60 hover:text-white transition-colors">
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-10" aria-hidden="true">
            <div 
              className="h-full bg-[#BF092F] transition-all duration-100 shadow-[0_0_10px_#BF092F]" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <footer className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#44444E]/30 italic text-center md:text-left">
             UK Engineering Governance & Inspection Standards
           </p>
           <div className="hidden md:flex items-center gap-4">
             <div className="w-12 h-[1px] bg-gray-100" />
             <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">
               Factory Acceptance Testing Protocols
             </p>
           </div>
        </footer>
      </div>
    </section>
  );
};

export default CompanyVideoSection;