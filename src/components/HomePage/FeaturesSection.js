import React, { useRef, useEffect, useState } from "react";
import {
  Settings,
  ArrowRight,
  Layers,
  ShieldCheck,
  Activity
} from "lucide-react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { products } from "../../utils/products"; 
import ProductCategoryCard from "../Products/ProductCategoryCard";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // SEO: Schema.org ItemList for industrial product categories
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Arc Engineering Solutions Ltd Product Range",
    "description": "UK-engineered generator enclosures, E-Houses, and power infrastructure.",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": product.title || product.name,
      "url": `https://arcengltd.com/products?category=${product.slug}`
    }))
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = (visible, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="features-heading"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productListSchema)}
        </script>
      </Helmet>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        
        {/* INDUSTRIAL HEADER */}
        <header className={`mb-16 ${revealClass(isVisible)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" aria-hidden="true" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" aria-hidden="true" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              Technical Capability
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 id="features-heading" className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              UK <span className="text-[#BF092F]">Precision</span> <br className="hidden md:block"/> Global <span className="text-gray-300">Scale.</span>
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Delivering high-performance <strong>power modules</strong> and bespoke <strong>BS EN compliant enclosures</strong> through UK-governed technical protocols.
            </p>
          </div>
        </header>

        {/* TECHNICAL METRICS STRIP */}
        <aside 
          className={`grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white ${revealClass(isVisible, "duration-[1200ms] delay-200")}`}
          aria-label="Operational Statistics"
        >
          {[
            { value: "41k", label: "SQM Facilities" },
            { value: "UKCA", label: "Compliance" },
            { value: "100%", label: "FAT Certified" },
            { value: "ISO", label: "Quality Hub" },
          ].map((stat, i) => (
            <div key={i} className="p-8 border-r last:border-r-0 border-gray-100 flex flex-col items-center md:items-start group hover:bg-[#44444E] transition-all duration-500">
               <span className="text-3xl font-bold text-[#44444E] group-hover:text-white transition-colors tracking-tighter">{stat.value}</span>
               <span className="text-[9px] font-black text-[#BF092F] uppercase tracking-[0.3em] mt-2">{stat.label}</span>
            </div>
          ))}
        </aside>

        {/* 🛠️ CATEGORIES GRID */}
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-20" aria-label="Product Categories">
          {products.map((category, index) => (
            <article 
              key={index}
              className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCategoryCard 
                category={category} 
                onClick={() => navigate(`/products?category=${category.slug}`)} 
              />
            </article>
          ))}
        </nav>

        {/* INDUSTRIAL CTA CHASSIS */}
        <footer className={`relative group overflow-hidden rounded-2xl bg-[#44444E] p-10 md:p-14 shadow-2xl ${revealClass(isVisible, "duration-[1200ms] delay-500")}`}>
          <ShieldCheck size={200} className="absolute -right-10 -bottom-10 text-white/5 rotate-12 transition-transform group-hover:rotate-0 duration-1000" aria-hidden="true" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-black uppercase italic text-[#BF092F] mb-4">
                Technical Consultancy
              </h4>
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose max-w-xl">
                Engage with our <strong>Leicester-based engineering team</strong> for bespoke system architecture and worldwide infrastructure deployment.
              </p>
            </div>
            <button 
              onClick={() => navigate("/contact")} 
              aria-label="Contact Arc Engineering for Technical Consultancy"
              className="px-10 py-4 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white/10 transition-all duration-500 hover:cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}