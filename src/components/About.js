import { useRef, useState, useEffect } from "react";
import ReviewerFeatures from "./ReviewerFeatures";

const About = () => {
  const images = [
    "https://radiant.tailwindui.com/company/1.jpg",
    "https://radiant.tailwindui.com/company/2.jpg",
    "https://radiant.tailwindui.com/company/3.jpg",
    "https://radiant.tailwindui.com/company/4.jpg",
  ];

    const steps = [
    {
      title: "Ask, update, commit. All in one place.",
      description:
        "Now you can chat with Graphite to get context on code changes, fix issues, resolve CI failures, and update your PRs, right in your review flow.",
      link: "https://diamond.graphite.dev",
    },
    {
      title: "Save hours on every pull request",
      description:
        "Get immediate, actionable feedback on every pull request with Graphite’s codebase-aware AI.",
      link: "https://diamond.graphite.dev",
    },
    {
      title: "Turn comments into suggested changes",
      description:
        "Graphite generates suggested code changes for comments, helping you to resolve threads faster.",
      link: "https://diamond.graphite.dev",
    },
    {
      title: "Detailed PR descriptions in seconds",
      description: "Explain every change to your reviewers with one click.",
      link: "https://diamond.graphite.dev",
    },
    {
      title: "From failures to fixes",
      description:
        "Graphite summarizes and generates fixes for your failing CI.",
      link: "https://diamond.graphite.dev",
    },
  ];



  const scrollRef = useRef(null);
  const rightColRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [rightColHeight, setRightColHeight] = useState(0);

  useEffect(() => {
    if (rightColRef.current) {
      setRightColHeight(rightColRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      setIsScrollable(el.scrollHeight > el.clientHeight);
    }
  }, [rightColHeight]);

  return (
    <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8">
      <section className="relative rounded-3xl sm:rounded-4xl isolate overflow-hidden py-24 sm:py-32 bg-white shadow-xl">
        {/* Background gradients */}
        <div className="absolute -top-40 -right-60 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-200 via-pink-300 to-purple-400 rounded-full blur-3xl rotate-[-15deg]"></div>
        <div className="absolute -bottom-32 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 via-green-300 to-teal-400 rounded-full blur-3xl rotate-[25deg]"></div>

        <div className="max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
          {/* Title + Intro */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Energy Solutions, Engineered for You.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Your Partner for Containerized Power Solutions in the UK & Europe —
            "Bringing Global Manufacturing Excellence to Your Local Power
            Needs".
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Scrollable Mission Text */}
            <div className="relative">
              <h2 className="text-2xl font-semibold text-gray-900 py-4">
                Our Mission
              </h2>
              <div
                ref={scrollRef}
                className="h-full overflow-y-auto pr-2"
                style={{ height: rightColHeight - 60 }}
              >
                <p className="text-gray-600 text-base leading-relaxed py-4">
                  Art GenPower Solutions Limited is a dynamic UK-based
                  specialist in the supply and distribution of customized
                  containers for generators, E-houses, and E-Pods across the
                  United Kingdom and Europe. We combine global manufacturing
                  excellence with local expertise to deliver containerized power
                  solutions that are reliable, high-performance, and rapidly
                  deployable.
                </p>
                <p className="text-gray-600 text-base leading-relaxed py-4">
                  Through our strategic partnerships with world-class
                  manufacturers, Ace Crane and Engineering and ESI Engineering,
                  whose facilities are located in the UAE, India, and other
                  international hubs, we bring cutting-edge engineering, robust
                  design, and advanced manufacturing capabilities directly to
                  our clients. By leveraging these partnerships, we can offer
                  solutions that are not only technologically superior but also
                  cost-effective and scalable to meet the most demanding
                  industrial, commercial, and critical infrastructure needs.
                </p>
                <p className="text-gray-600 text-base leading-relaxed py-4">
                  Our services cover the entire lifecycle of your power
                  solution: from consultation and specification, product
                  sourcing, and procurement, to logistics, quality assurance,
                  delivery, and after-sales technical support. Each unit we
                  supply is carefully designed and rigorously tested to ensure
                  compliance with international standards, superior durability,
                  and optimal performance in a variety of environments.
                </p>
                <p className="text-gray-600 text-base leading-relaxed py-4">
                  At Art GenPower Solutions Limited, we serve a wide range of
                  industries, including construction, mining, data centers,
                  telecommunications, healthcare, utilities, events, and
                  disaster relief operations. Our containerized power solutions
                  are engineered to meet the challenges of each sector,
                  providing uninterrupted energy wherever it is needed.
                </p>
                <p className="text-gray-600 text-base leading-relaxed py-4">
                  We are committed to bridging the gap between global
                  manufacturing and local service excellence. Our team, based in
                  the UK, ensures seamless delivery, competitive pricing, and
                  responsive technical support, giving our clients complete
                  confidence in their power infrastructure.
                </p>
                <p className="text-gray-600 text-base leading-relaxed py-4">
                  Art GenPower Solutions Limited isn’t just about providing
                  power—we’re about empowering businesses and industries across
                  the UK and Europe with dependable, tailored, and innovative
                  energy solutions that keep operations running smoothly and
                  efficiently.
                </p>
              </div>

              {/* Fade-out with dots when scrollable */}
              {isScrollable && (
                <div className="absolute bottom-0 left-0 right-0 h-full flex justify-center items-end pb-1 pointer-events-none"></div>
              )}
            </div>

            {/* Right Column - Image Grid */}
            <div ref={rightColRef} className="grid grid-cols-2 gap-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105 ${
                    index % 2 === 1 ? "mt-12 sm:mt-16" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`Team ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <ReviewerFeatures />
      </section>
    </div>
  );
};

export default About;
