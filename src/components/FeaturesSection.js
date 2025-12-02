"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Zap,
  Shield,
  Settings,
  Factory,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router";
import { features } from "../utils/features";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#64748b_1px,transparent_1px),linear-gradient(-45deg,#64748b_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Subtle animated orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/[0.03] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/[0.03] rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

        {/* Animated progress line */}
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 z-50 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Professional Animated Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 mb-8 transform transition-all duration-700"
            style={{
              transform: `translateY(${Math.max(
                0,
                50 - scrollProgress * 100
              )}px)`,
              opacity: Math.min(1, scrollProgress * 2),
            }}
          >
            <Award className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              INDUSTRY LEADING SOLUTIONS
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full animate-pulse"></div>
          </div>

          <h1
            className="text-5xl md:text-7xl font-black mb-8 leading-tight transition-all duration-1000"
            style={{
              transform: `translateY(${Math.max(
                0,
                30 - scrollProgress * 60
              )}px)`,
              opacity: Math.min(1, scrollProgress * 1.5),
            }}
          >
            <span className="block text-slate-900 mb-2">
              Industrial Equipment &
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-slate-700 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
              Engineering Excellence
            </span>
          </h1>

          <p
            className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200"
            style={{
              transform: `translateY(${Math.max(
                0,
                20 - scrollProgress * 40
              )}px)`,
              opacity: Math.min(1, scrollProgress * 1.2),
            }}
          >
            Delivering mission-critical industrial solutions with proven
            reliability, comprehensive support, and industry-leading performance
            standards backed by
            <span className="font-bold text-slate-800">
              {" "}
              20+ years of engineering expertise
            </span>
            .
          </p>

          {/* Animated Trust Indicators */}
          <div
            className="flex flex-wrap justify-center items-center gap-8 mb-16 transition-all duration-1000 delay-300"
            style={{
              transform: `translateY(${Math.max(
                0,
                15 - scrollProgress * 30
              )}px)`,
              opacity: Math.min(1, scrollProgress * 1.1),
            }}
          >
            {/* <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <div className="flex text-yellow-500">
                {[1,2,3,4,5].map(i => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current transform transition-transform duration-200"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <span className="text-slate-600 font-semibold">4.9/5 Client Rating</span>
            </div> */}
            {/* <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <CheckCircle className="w-5 h-5 text-green-600 animate-pulse" />
              <span className="text-slate-600 font-semibold">ISO 9001:2015 Certified</span>
            </div> */}
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5 h-5 text-blue-600 animate-bounce" />
              <span className="text-slate-600 font-semibold">
                20+ Years Experience
              </span>
            </div>
          </div>

          {/* Animated Statistics */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8 transition-all duration-1000 delay-500"
            style={{
              transform: `translateY(${Math.max(
                0,
                10 - scrollProgress * 20
              )}px)`,
              opacity: Math.min(1, scrollProgress),
            }}
          >
            {[
              { value: "850+", label: "Projects Completed", icon: "📈" },
              { value: "200+", label: "Enterprise Clients", icon: "🏢" },
              { value: "35+", label: "Countries Served", icon: "🌍" },
              { value: "99.8%", label: "System Reliability", icon: "⚡" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-lg group"
                style={{
                  animationDelay: `${i * 150}ms`,
                  transform: `translateY(${Math.max(
                    0,
                    20 - scrollProgress * 40
                  )}px)`,
                }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Animated Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isVisible={visibleCards.includes(index)}
            />
          ))}
        </div>

        {/* Professional Animated CTA */}
        <div className="relative">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-emerald-400"></div>

            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Ready to Enhance Your Operations?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Connect with our engineering experts to discuss your specific
                requirements and explore our comprehensive industrial solutions
                tailored to your industry needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                  <span>Request Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                </button>

                <button className="group border-2 border-white/20 hover:border-white/40 hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold transition-all duration-500 transform hover:scale-105">
                  <span className="group-hover:text-blue-200 transition-colors duration-300">
                    Download Catalog
                  </span>
                </button>
              </div>

              <div className="mt-8 flex justify-center items-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free Consultation
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Custom Solutions
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ feature, index, isVisible }) {
  let navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    navigate(feature.link);
  };

  return (
    <div
      data-index={index}
      className={`group relative bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-700 cursor-pointer overflow-hidden transform-gpu ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      } ${feature.shadowColor} ${
        feature.hoverShadow
      } hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
      ></div>
      <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

      {/* Professional Image Section */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl z-10">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Professional overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}
        ></div>

        {/* Animated reliability badge */}
        {/* <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-white/20">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {feature.reliability} Uptime
            </span>
          </div>
        </div> */}

        {/* Projects count badge */}
        <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
          <div className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-xs font-bold text-white">
              {feature.projects} Projects
            </span>
          </div>
        </div>

        {/* Animated professional icon */}
        <div
          className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-xl transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-500`}
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 -z-10`}
          ></div>
        </div>

        {/* Hover reveal effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Professional Content with animations */}
      <div className="relative p-6 z-10">
        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-all duration-300 leading-tight">
          {feature.title}
        </h3>

        <p className="text-slate-600 text-sm mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {feature.description}
        </p>

        {/* Animated certifications */}
        <div className="flex flex-wrap gap-2 mb-6">
          {feature.certifications.map((cert, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-700 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {cert}
            </span>
          ))}
        </div>

        {/* Professional CTA with animation */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 group-hover:border-blue-100 transition-colors duration-300">
          <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600 transition-all duration-300">
            Explore Solutions
          </span>
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 transform scale-75 group-hover:scale-100`}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"></div>
    </div>
  );
}
