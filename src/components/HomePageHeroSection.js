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

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pt-22 px-2 md:px-2 pb-12">
        <header 
          className="relative min-h-[550px] md:h-[70vh] w-full flex items-center overflow-hidden rounded-2xl shadow-2xl"
          style={{
            /* MATCHES HEADER: Gray on left, White on right, split exactly at 80.05% */
            background: "linear-gradient(110deg, #44444E 80.05%, #FFFFFF 80.05%)"
          }}
        >
          {/* Overlay for depth on the left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

          {/* TWO DIVS: Anchored to 80.05% with margin adjustment for perfect center alignment */}
          {/* Gray Bar: Sits on the split line */}
          <div
            className="absolute bg-[#44444E] z-20"
            style={{
              top: "-30%",
              left: "80.05%", 
              width: "45px",
              height: "160%",
              transform: "rotate(20deg)",
              marginLeft: "-22.5px" // Offset half of its 45px width
            }}
          />
          {/* Red Bar: Sits exactly left of the gray bar */}
          <div
            className="absolute bg-[#BF092F] z-20"
            style={{
              top: "-30%",
              left: "80.05%", 
              width: "45px",
              height: "160%",
              transform: "rotate(20deg)",
              marginLeft: "-67.5px" // Positions it immediately next to the gray bar
            }}
          />

          <div className="absolute top-10 right-10 opacity-10 z-10">
            <PackageSearch size={350} className="text-[#44444E] -rotate-12" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-30">
            
            <div className="flex items-center gap-3 mb-8">
               <div className="bg-[#BF092F] text-white px-4 py-1.5 rounded-2xl shadow-lg flex items-center gap-2">
                  <Activity size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">System_Live</span>
               </div>
               <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold hidden sm:block">
                 Heavy Engineering Interface
               </span>
            </div>

            <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[260px] flex items-center mb-6">
              {heroSentences.map((text, index) => (
                <h1
                  key={index}
                  className={`absolute left-0 w-full transition-all duration-1000 ease-in-out font-semibold
                    text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight max-w-4xl
                    ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
                >
                  {text.split(' ').map((word, i) => (
                    <span key={i} className={word.toLowerCase().includes('container') || word.toLowerCase().includes('global') ? "text-[#BF092F]" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>
              ))}
            </div>

            <p className="text-white/60 text-lg md:text-xl tracking-wide leading-relaxed max-w-2xl mb-12 border-l-2 border-[#BF092F] pl-6">
              Accessing the unified database for <span className="text-white font-bold">high-performance systems</span> and bespoke power solutions globally.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link to="/projects" className="rounded-2xl group relative flex items-center gap-8 px-10 py-5 bg-[#BF092F] text-white transition-all hover:scale-105 shadow-xl shadow-[#BF092F]/20">
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">View Projects</span>
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