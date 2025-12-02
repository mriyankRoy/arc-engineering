import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Globe,
  Shield,
  Zap,
  Award,
  Users,
  TrendingUp,
  Package,
  Sparkles,
  Factory,
  Truck,
} from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="about" className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8">
      <section className="relative rounded-4xl px=10 bg-linear-115 from-[black] via-[#ee87cb] via-70% to-[#2f2d31] overflow-hidden py-32 px-40 sm:px-6 lg:px-8 ">
        {/* Grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
        {/* Ultra Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-slate-950 to-cyan-950/20"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 0, 0.15), transparent 40%)`,
            }}
          ></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[128px] animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Spectacular Header */}
          <div
            className={`text-center mb-24 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 border border-orange-500/20 rounded-full backdrop-blur-xl shadow-2xl shadow-orange-500/20">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-orange-400 text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Who We Are
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Powering the Future
              </span>
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                One Container at a Time
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Where{" "}
              <span className="text-orange-400 font-semibold">
                global manufacturing excellence
              </span>{" "}
              meets
              <span className="text-cyan-400 font-semibold">
                {" "}
                unparalleled local service
              </span>
            </p>
          </div>

          {/* Hero Content Card */}
          <div
            className={`mb-24 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-pink-600 to-cyan-600 rounded-3xl blur-2xl opacity-5 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative backdrop-blur-3xl rounded-4xl p-8 sm:p-12 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full border border-orange-500/30 mb-4">
                      <span className="text-sm font-bold text-orange-400">
                        🌍 UK-Based • Globally Connected
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                      Your Strategic Partner in{" "}
                      <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        Containerized Power
                      </span>
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      <span className="text-white font-bold">
                        Art GenPower Solutions Limited
                      </span>{" "}
                      bridges continents to deliver exceptional containerized
                      power solutions. Through our strategic partnerships with{" "}
                      <span className="text-orange-400 font-semibold">
                        Ace Crane and Engineering
                      </span>{" "}
                      and{" "}
                      <span className="text-orange-400 font-semibold">
                        ESI Engineering
                      </span>
                      , we harness world-class manufacturing capabilities from
                      the UAE and India, delivering them with precision to the
                      UK and Europe.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          ISO Certified
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          Premium Components
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">
                          24/7 Support
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: Factory,
                        label: "Manufacturing Partners",
                        value: "2+",
                        color: "from-orange-500 to-red-500",
                      },
                      {
                        icon: Globe,
                        label: "Global Locations",
                        value: "5+",
                        color: "from-cyan-500 to-blue-500",
                      },
                      {
                        icon: Truck,
                        label: "On-Time Delivery",
                        value: "99%",
                        color: "from-purple-500 to-pink-500",
                      },
                      {
                        icon: Shield,
                        label: "Quality Assured",
                        value: "100%",
                        color: "from-green-500 to-emerald-500",
                      },
                    ].map((stat, idx) => (
                      <div key={idx} className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                          >
                            <stat.icon className="w-6 h-6 text-white" />
                          </div>
                          <div
                            className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Feature Cards */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: Zap,
                title: "World-Class Components",
                description:
                  "Powered by industry leaders: Cummins, Perkins, Volvo Penta engines paired with Stamford and Leroy Somer alternators",
                gradient: "from-orange-500 to-red-600",
                glow: "shadow-orange-500/50",
              },
              {
                icon: Award,
                title: "Bespoke Engineering",
                description:
                  "Fully customizable solutions tailored to your exact specifications—from acoustic treatment to remote monitoring",
                gradient: "from-purple-500 to-pink-600",
                glow: "shadow-purple-500/50",
              },
              {
                icon: Package,
                title: "Seamless Delivery",
                description:
                  "Complete end-to-end service: consultation, manufacturing oversight, logistics, customs, and lifetime support",
                gradient: "from-cyan-500 to-blue-600",
                glow: "shadow-cyan-500/50",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}
                ></div>
                <div className="relative h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl ${feature.glow}`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed text-base">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Applications Marquee */}
          <div
            className={`mb-20 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                Trusted Across Industries
              </h3>
            </div>
            <div className="relative overflow-hidden py-6 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl">
              <div className="flex animate-scroll whitespace-nowrap">
                {[
                  "Construction",
                  "Data Centers",
                  "Healthcare",
                  "Mining",
                  "Utilities",
                  "Events",
                  "Telecom",
                  "Emergency Services",
                  "Manufacturing",
                  "Construction",
                  "Data Centers",
                  "Healthcare",
                ].map((industry, idx) => (
                  <span
                    key={idx}
                    className="inline-block mx-8 text-gray-500 font-semibold text-lg hover:text-orange-400 transition-colors duration-300"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Epic CTA */}
          <div
            className={`text-center transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 via-pink-600 to-cyan-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <a
                href="/about"
                className="relative group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white font-black text-xl rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative flex items-center gap-4">
                  Discover Our Story
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                </span>
              </a>
            </div>

            <p className="mt-8 text-gray-500 text-sm">
              Join industry leaders who trust Art GenPower Solutions
            </p>
          </div>
        </div>

        <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      </section>
    </div>
  );
}
