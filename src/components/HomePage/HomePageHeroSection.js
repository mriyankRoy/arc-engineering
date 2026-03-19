import React, { useEffect, useState } from "react";
import { Link } from "react-router"; 
import { ArrowRight, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async"; // SEO: Added Helmet

const heroSentences = [
  "Your Global Partner for Generator Needs.",
  "Delivering Top Container Solutions.",
];

const HomePageSection1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slantDegree = "110deg";
  const firstGreyEnd = "60vw";
  const redStripeEnd = "62.9vw";
  const secondGreyEnd = "65.9vw";

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* SEO: Page-level metadata for the Home Page */}
      <Helmet>
        <title>Arc Engineering | Global Generator & Container Solutions</title>
        <meta name="description" content="Arc Engineering: Your global partner for high-performance generator needs and precision-engineered container solutions. UK quality assured." />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      {/* SEO: Hidden H1 for Search Engine indexing (Strictly 1 H1 per page) */}
      <h1 className="sr-only">
        Arc Engineering - Global Partner for Generator Needs and Container Solutions
      </h1>

      <div className="pt-22 px-2 pb-12">
        <div className="relative min-h-[550px] md:h-[70vh] w-full flex items-center overflow-hidden rounded-2xl shadow-2xl bg-[#44444E]">
          
          {/* LAYER 1: BACKGROUND VIDEO - Added title for crawlers */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              title="Arc Engineering Industrial Fabrication Video"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dc912sjxj/video/upload/v1771941200/Art_Genpower_Solutions_Ltd_Video_q9curf.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* LAYER 2 & 3: OVERLAYS & SLANTS (Design preserved exactly) */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div
            className="hidden md:block absolute inset-0 z-10 pointer-events-none"
            aria-hidden="true"
            style={{
              background: `linear-gradient(${slantDegree}, 
                #44444E ${firstGreyEnd}, 
                transparent ${firstGreyEnd}, 
                transparent ${redStripeEnd}, 
                #44444E ${redStripeEnd},
                #44444E ${secondGreyEnd},
                transparent ${secondGreyEnd}
              )`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-15 pointer-events-none" aria-hidden="true" />
          <div
            className="hidden md:block absolute inset-0 z-20 pointer-events-none"
            aria-hidden="true"
            style={{
              background: `linear-gradient(${slantDegree}, 
                transparent ${firstGreyEnd}, 
                #BF092F ${firstGreyEnd}, 
                #BF092F ${redStripeEnd}, 
                transparent ${redStripeEnd}
              )`,
            }}
          />

          {/* LAYER 6: MAIN CONTENT */}
          <div className="container mx-auto px-6 md:px-12 relative z-30">            

            {/* Headline Section - Changed mapping to h2 to avoid multiple H1s */}
            <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[260px] flex items-center mb-6">
              {heroSentences.map((text, index) => (
                <h2
                  key={index}
                  className={`absolute left-0 w-full transition-all duration-1000 ease-in-out font-semibold text-5xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight max-w-4xl ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {text.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={
                        word.toLowerCase().includes("container") ||
                        word.toLowerCase().includes("global")
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

            {/* Hero Subtext */}
            <p className="text-white/60 text-sm md:text-xl tracking-wide leading-relaxed max-w-2xl mb-12 border-l-2 border-[#BF092F] pl-6 italic">
              Accessing the unified registry for{" "}
              <strong className="text-white font-bold not-italic">
                high-performance power systems
              </strong>{" "}
              and precision-engineered container solutions.
            </p>

            {/* Navigation Actions */}
            <div className="flex flex-wrap gap-6">
              <Link
                to="/products"
                title="Browse our power system products"
                className="rounded-2xl group relative flex items-center gap-8 px-10 py-5 bg-[#BF092F] text-white transition-all hover:scale-105 shadow-xl shadow-[#BF092F]/20"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">
                  Products
                </span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                title="Learn more about Arc Engineering"
                className="rounded-2xl group flex items-center gap-8 px-10 py-5 border border-white/20 text-white transition-all hover:bg-white/10"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">
                  Our Company
                </span>
                <Zap size={16} className="text-[#BF092F]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection1;