import { useEffect, useState } from "react";

const heroSentences = [
  "Powering Progress with Precision Engineering.",
  "Your Global Partner in Generator Solutions.",
  "Engineering Reliability. Delivering Global Power.",
];

const HomePageSection1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSentences.length);
    }, 4000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative m-2 rounded-4xl isolate overflow-hidden bg-gradient-to-br from-[#FFF3CD] via-[#FFCCCC] to-[#F28EEB] py-32 sm:py-40">
        <div className="mx-auto max-w-[960px] px-4 text-left pt-27">
          <h1 className="h-[100px] sm:h-[140px] relative text-[48px] sm:text-[72px] leading-[1.1] font-extrabold text-gray-900">
            {heroSentences.map((text, index) => (
              <span
                key={index}
                className={`absolute left-0 right-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {text}
              </span>
            ))}
          </h1>

          <p className="mt-10 text-[18px] text-gray-600 sm:text-[20px] sm:max-w-[720px]">
            Supplying high-performance generator parts, accessories, and
            complete containerized solutions—delivered with speed, precision,
            and global reach.
          </p>

          <div className="mt-10 flex flex-wrap justify-start gap-4">
            <a
              href="#"
              className="inline-block rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-gray-700 transition"
            >
              Get a Quote
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Soft radial white glow overlay */}
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] bg-white opacity-40 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default HomePageSection1;
