import React, { useEffect, useRef, useState } from "react";

const CompanyVideoSection = ({
  videoSrc = "https://www.youtube.com/watch?v=3V-tIsMuCK4",
  title = "Discover Our Excellence",
  tagline = "Delivering top-notch generator solutions worldwide.",
}) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube Video ID
  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com.*(?:\/|v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoSrc);

  useEffect(() => {
    if (!videoId) return;

    // YouTube Iframe API Loader (prevent double load)
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    const onYouTubeReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId,
        events: {
          onStateChange: (event) => {
            setIsPlaying(event.data === 1);
          },
        },
        playerVars: {
          controls: 0,
          rel: 0,
          modestbranding: 1,
        },
      });
    };

    // If API already loaded
    if (window.YT && window.YT.Player) {
      onYouTubeReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeReady;
    }
  }, [videoId]);

  const togglePlayPause = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div
        className="
          relative overflow-hidden rounded-4xl shadow-2xl group 
          h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] 
          transition-transform duration-500 hover:scale-[1.015]
        "
      >
        {/* YouTube Player */}
        <div className="w-full h-full rounded-4xl">
          <div id="yt-player" className="w-full h-full rounded-4xl" />
        </div>

        {/* Dark Gradient Overlay */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-t 
            from-black/70 via-black/40 to-transparent 
            rounded-4xl pointer-events-none
          "
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 pointer-events-none">
          <h2
            className="
              text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 
              drop-shadow-lg animate-fadeInUp opacity-0 group-hover:opacity-100
            "
          >
            {title}
          </h2>
          <p
            className="
              text-lg sm:text-xl md:text-2xl text-white/80 mb-6 
              drop-shadow-md animate-fadeInUp animation-delay-200 opacity-0 group-hover:opacity-100
            "
          >
            {tagline}
          </p>
        </div>

        {/* Play/Pause Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Button only visible:
              - Before play
              - OR visible on hover while paused
          */}
          <button
            onClick={togglePlayPause}
            className={`
              text-white text-3xl shadow-lg rounded-full 
              backdrop-blur-xl p-6 transition-all duration-300
              bg-white/15 hover:bg-white/35 
              opacity-0 
              ${!isPlaying ? "opacity-100" : "group-hover:opacity-100"}
            `}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default CompanyVideoSection;
