import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Zap, Activity, PackageSearch } from "lucide-react";

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

  const layoutAnchor = "55vw";

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pt-22 px-2 md:px-2 pb-12">
        <header className="relative min-h-[550px] md:h-[70vh] w-full flex items-center overflow-hidden rounded-2xl shadow-2xl bg-[#44444E]">
          
          {/* GRID & GHOST ICON */}
          <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#BF092F] to-transparent animate-pulse opacity-20" />
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-700 opacity-10" />
            <div className="absolute -top-20 -left-20 opacity-[0.03]">
               <PackageSearch size={600} className="text-white" />
            </div>
          </div>

          {/* VIDEO BACKGROUND - INCREASED SLANT (from 15% to 25%) */}
          <div 
            className="absolute inset-0 right-0 z-0 overflow-hidden"
            style={{ 
              left: layoutAnchor, 
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" 
            }}
          >
            <iframe
              className="absolute top-1/2 left-1/2 w-[500%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110"
              src="https://www.youtube.com/embed/TOJQkhzpLyQ?autoplay=1&mute=1&loop=1&playlist=TOJQkhzpLyQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
              allow="autoplay; encrypted-media"
              title="Hero Video"
            />
            <div className="absolute inset-0 bg-[#44444E]/40" />
          </div>

         

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-[#44444E]/40 to-transparent z-10 pointer-events-none" />

          {/* CONTENT SECTION */}
          <div className="container mx-auto px-6 md:px-12 relative z-30">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg flex items-center gap-2">
                <Activity size={14} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">System_Live</span>
              </div>
            </div>

            <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[260px] flex items-center mb-6">
              {heroSentences.map((text, index) => (
                <h1 key={index} className={`absolute left-0 w-full transition-all duration-1000 ease-in-out font-semibold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight max-w-4xl ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  {text.split(" ").map((word, i) => (
                    <span key={i} className={word.toLowerCase().includes("container") || word.toLowerCase().includes("global") ? "text-[#BF092F]" : ""}>{word} </span>
                  ))}
                </h1>
              ))}
            </div>

            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed max-w-2xl mb-12 border-l-2 border-[#BF092F] pl-6 italic">
              Accessing the unified registry for <span className="text-white font-bold not-italic">high-performance power systems</span> and precision-engineered container solutions.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link to="/products" className="rounded-2xl group relative flex items-center gap-8 px-10 py-5 bg-[#BF092F] text-white transition-all hover:scale-105 shadow-xl shadow-[#BF092F]/20">
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Registry Access</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </Link>
              <Link to="/about" className="rounded-2xl group flex items-center gap-8 px-10 py-5 border border-white/20 text-white transition-all hover:bg-white/10">
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Our Facility</span>
                <Zap size={16} className="text-[#BF092F]" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default HomePageSection1;