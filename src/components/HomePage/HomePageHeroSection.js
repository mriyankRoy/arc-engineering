import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const heroSentences = [
  "Advanced Power & Global Infrastructure.",
  "Precision Engineering for Critical Sites.",
  "High-Performance UK Power Solutions.",
];

const HomePageSection1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false); // State for instant feel

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSentences.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const slantDegree = "110deg";
  const firstGreyEnd = "60vw";
  const redStripeEnd = "62.9vw";
  const secondGreyEnd = "65.9vw";

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Helmet>
        <title>
          Arc Engineering Solutions Ltd | UK-Led Power & Infrastructure
          Solutions
        </title>
        <meta
          name="description"
          content="Arc Engineering Solutions Ltd delivers mission-critical power systems and UK-governed engineering solutions for global infrastructure."
        />
        <link rel="canonical" href="https://arcengltd.com/" />
        {/* Preload the 2MB video for global speed */}
        <link
          rel="preload"
          href="https://media.arcengltd.com/arc-profile/arc-company-video.mp4"
          as="video"
          type="video/mp4"
        />
      </Helmet>

      <h1 className="sr-only">
        Arc Engineering Solutions Ltd: Global Leaders in Power Systems
      </h1>

      <div className="pt-22 px-2 pb-12">
        <div className="relative min-h-[600px] md:h-[75vh] w-full flex items-center overflow-hidden rounded-2xl shadow-2xl bg-[#44444E]">
          {/* VIDEO LAYER - Modern Fade-in & Poster Fade-out Logic */}
          <div className="absolute inset-0 z-0">
            {/* The actual video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              // We keep the poster attribute here as a native fallback,
              // but our manual div below handles the elegant transition.
              poster="https://media.arcengltd.com/arc-profile/arc-hero-video-poster.webp"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-10 ${
                videoLoaded ? "opacity-50" : "opacity-0"
              }`}
            >
              <source
                src="https://media.arcengltd.com/arc-profile/arc-company-video.mp4"
                type="video/mp4"
              />
            </video>

            {/* Static Background: Now fades out to 0% as soon as video is ready */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out z-0 ${
                videoLoaded ? "opacity-0" : "opacity-50"
              }`}
              style={{
                backgroundImage:
                  "url('https://media.arcengltd.com/arc-profile/arc-hero-video-poster.webp')",
                backgroundColor: "#44444E", // Matches your brand grey
              }}
            />
          </div>

          {/* Design Strips - Your original layout kept intact */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10" />
          <div
            className="hidden md:block absolute inset-0 z-10"
            style={{
              background: `linear-gradient(${slantDegree}, #44444E ${firstGreyEnd}, transparent ${firstGreyEnd}, transparent ${redStripeEnd}, #44444E ${redStripeEnd}, #44444E ${secondGreyEnd}, transparent ${secondGreyEnd})`,
            }}
          />
          <div
            className="hidden md:block absolute inset-0 z-20"
            style={{
              background: `linear-gradient(${slantDegree}, transparent ${firstGreyEnd}, #BF092F ${firstGreyEnd}, #BF092F ${redStripeEnd}, transparent ${redStripeEnd})`,
            }}
          />

          <div className="container mx-auto px-6 md:px-12 relative z-30">
            <div className="w-full md:max-w-[48%] lg:max-w-[45%] xl:max-w-[55%] py-12 md:py-16">
              {/* Headline Container */}
              <div className="relative h-[200px] md:h-[300px] lg:h-[380px] flex items-center">
                {heroSentences.map((text, index) => (
                  <h2
                    key={index}
                    className={`absolute left-0 transition-all duration-1000 ease-in-out font-semibold
                    text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                    text-white leading-[1.05] tracking-tighter ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                  >
                    {text.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={
                          word
                            .toLowerCase()
                            .match(/power|engineering|solutions/)
                            ? "text-[#BF092F]"
                            : ""
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h2>
                ))}
              </div>

              {/* Subheadline */}
              <p className="text-white/80 text-base md:text-xl lg:text-2xl tracking-tight leading-relaxed mb-12 border-l-4 border-[#BF092F] pl-10 max-w-[95%]">
                Expertly engineered systems designed in the UK to power critical
                infrastructure across Europe and the globe.
              </p>

              {/* Button Group */}
              <div className="flex flex-wrap gap-6 pb-20">
                <Link
                  to="/products"
                  className="rounded-2xl group relative flex items-center gap-8 px-10 py-5 bg-[#BF092F] text-white transition-all hover:scale-105 shadow-xl shadow-[#BF092F]/20"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                    View Products
                  </span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
                <Link
                  to="/about"
                  className="rounded-2xl group flex items-center gap-8 px-10 py-5 border border-white/20 text-white transition-all hover:bg-white/10"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                    Our Expertise
                  </span>
                  <Zap size={18} className="text-[#BF092F]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection1;
