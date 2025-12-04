import { useEffect, useState } from "react";
import { Link } from "react-router";

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
    <div className="mx-auto px-1 sm:px-2 md:px-3 lg:px-4 py-4 sm:py-6 max-sm:px-3">
      <section className="relative rounded-4xl sm:rounded-4xl isolate overflow-hidden 
        py-24 sm:py-32 max-sm:py-20 
        bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] 
        sm:bg-linear-145 shadow-xl"
      >
        <div className="max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8 
          pt-16 sm:pt-20 md:pt-18 max-sm:pt-14 pb-8 sm:pb-12"
        >

          {/* HERO HEADING */}
          <h1
            className="
              relative 
              min-h-[120px] sm:min-h-[160px] md:min-h-[150px] lg:min-h-[200px] 
              max-sm:min-h-[100px]
              py-2 font-display 
              text-6xl/[0.9] sm:text-8xl/[0.8] md:text-7xl/[0.85] lg:text-9xl/[0.8]
              max-sm:text-4xl max-sm:leading-[1.1]
              font-medium tracking-tight text-balance text-gray-950
            "
          >
            {heroSentences.map((text, index) => (
              <span
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                  ${index === currentIndex ? "opacity-100" : "opacity-0"}
                `}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {text}
              </span>
            ))}
          </h1>

          {/* SUB-PARAGRAPH */}
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 
            sm:text-2xl/8 md:text-xl/7 max-sm:text-lg"
          >
            Supplying high-performance generator parts, accessories, and
            complete containerized solutions—delivered with speed, precision,
            and global reach.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row justify-start gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] 
                rounded-full border border-transparent bg-gray-950 shadow-md 
                text-base font-medium whitespace-nowrap text-white 
                data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
            >
              Get a Quote
            </Link>

            <Link
              to="/about"
              className="relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] 
                rounded-full border border-transparent bg-white/15 shadow-md 
                ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full 
                after:shadow-[inset_0_0_2px_1px_#ffffff4d] 
                text-base font-medium whitespace-nowrap text-gray-950 
                data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Soft radial glow */}
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] bg-white opacity-40 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default HomePageSection1;
