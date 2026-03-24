import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Activity, Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = window.document;
      const isCurrentlyFull = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
      setIsFullscreen(!!isCurrentlyFull);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
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

  const handleFullScreen = (e) => {
    e.stopPropagation();
    const doc = window.document;
    const elem = containerRef.current;
    if (!isFullscreen) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    } else {
      if (doc.exitFullscreen) doc.exitFullscreen();
      else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
    }
  };

  // Matching reveal logic from TrustedPartners
  const revealClass = (visible, delay = "duration-1000") => 
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 bg-white overflow-hidden"
      aria-labelledby="facility-video-title"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": `Arc Engineering Solutions Ltd | ${title} Facility Insight`,
          "description": tagline,
          "thumbnailUrl": [posterSrc],
          "uploadDate": "2026-03-24T18:00:00+00:00",
          "contentUrl": videoSrc,
          "publisher": { "@type": "Organization", "name": "Arc Engineering Solutions Ltd" }
        })}</script>
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 🏗️ MATCHED INDUSTRIAL HEADER */}
        <header className={`mb-16 ${revealClass(isVisible)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" aria-hidden="true" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" aria-hidden="true" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              Facility Insight
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 id="facility-video-title" className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              Manufacturing <br />
              <span className="text-[#BF092F]">{title}</span>
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              {tagline}
            </p>
          </div>
        </header>

        {/* VIDEO CHASSIS - Matched shadow and border radius logic */}
        <div 
          ref={containerRef}
          className={`relative w-full aspect-[4/5] sm:aspect-video lg:max-h-[60vh] bg-[#44444E] rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${revealClass(isVisible, "duration-[1200ms] delay-300")}`}
        >
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            playsInline
            onClick={togglePlayPause}
            preload="metadata"
          >
            {videoStarted && <source src={videoSrc} type="video/mp4" />}
          </video>

          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ backgroundImage: `url(${posterSrc})` }}
          />

          {/* Floating Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-auto min-w-[280px] md:min-w-[400px] z-20">
            <div className={`backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-3 md:p-4 flex items-center justify-between gap-6 shadow-2xl transition-all duration-500 
              ${videoStarted && isPlaying ? 'opacity-0 translate-y-4 hover:opacity-100 hover:translate-y-0' : 'opacity-100 translate-y-0'}`}>
              
              <button onClick={togglePlayPause} className="w-12 h-12 rounded-xl bg-[#BF092F] flex items-center justify-center text-white hover:bg-[#d1082d] transition-colors shrink-0">
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="translate-x-0.5" />}
              </button>

              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] font-black text-white uppercase tracking-widest truncate">Arc Engineering</span>
                <span className="text-[8px] text-white/40 uppercase tracking-[0.2em] mt-1 truncate">UAE Production Facility</span>
              </div>

              <div className="flex items-center gap-4 border-l border-white/10 pl-6 shrink-0">
                <button onClick={(e) => { e.stopPropagation(); videoRef.current.muted = !isMuted; setIsMuted(!isMuted); }} className="text-white/60 hover:text-white transition-colors">
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button onClick={handleFullScreen} className="text-white/60 hover:text-white transition-colors">
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-10">
            <div className="h-full bg-[#BF092F] transition-all duration-150 shadow-[0_0_10px_#BF092F]" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* MATCHED FOOTER */}
        <footer className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 opacity-50">
           <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#44444E] italic">
             UK Engineering Governance & Inspection Standards
           </p>
           <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
             Direct FAT Protocols Available
           </p>
        </footer>
      </div>
    </section>
  );
};

export default CompanyVideoSection;