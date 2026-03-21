import React from "react";
import { Link, useRouteError } from "react-router";
import { Activity, Home, ArrowLeft, ShieldAlert } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const error = useRouteError();

  // SEO: Structured Data to maintain site hierarchy even on 404
  const errorSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arcengltd.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Error 404"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-6 font-sans select-none overflow-hidden">
      <Helmet>
        {/* SEO: Critical for 404 pages to prevent indexing of broken URLs */}
        <title>404 Page Not Found | Arc Engineering Solutions Ltd</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="The page you are looking for does not exist within the Arc Engineering infrastructure. Return home for industrial power solutions." />
        <script type="application/ld+json">{JSON.stringify(errorSchema)}</script>
      </Helmet>
      
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
        <h1 className="text-[20rem] md:text-[35rem] font-black text-[#44444E] absolute -bottom-20 -left-20 md:-bottom-48 md:-left-32 leading-none tracking-tighter">
          404
        </h1>
      </div>

      <div className="relative z-10 max-w-xl w-full">
        
        {/* --- MAIN CARD --- */}
        <div className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.06)] text-center">
          
          {/* --- INDUSTRIAL ICON ASSEMBLY --- */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#BF092F]/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              
              <div className="relative h-24 w-24 rounded-2xl border border-gray-100 flex items-center justify-center bg-white shadow-sm transition-all duration-500 group-hover:-rotate-2">
                <Activity size={48} className="text-[#BF092F] animate-pulse" aria-hidden="true" />
              </div>
              
              <div className="absolute -top-3 -right-3 h-10 w-10 rounded-xl bg-[#44444E] flex items-center justify-center text-white shadow-lg border-2 border-white">
                <ShieldAlert size={18} className="text-[#BF092F]" />
              </div>
            </div>
          </div>

          {/* --- TEXT HEADER --- */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-[#BF092F]/40" />
            <span className="text-[#44444E]/60 uppercase tracking-[0.4em] text-[9px] font-black">
              Registry Link Failure
            </span>
            <div className="h-[1px] w-6 bg-[#BF092F]/40" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#44444E] uppercase tracking-tighter mb-4 leading-none">
            404 <span className="text-[#BF092F]">Invalid Path</span>
          </h2>

          <div className="flex justify-center mb-10">
             <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold leading-relaxed max-w-xs border-l-2 border-[#BF092F] pl-4 text-left">
              The requested directory entry does not exist or has been moved within the Arc Engineering infrastructure.
            </p>
          </div>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#44444E] text-white px-8 py-4 rounded-xl uppercase text-[10px] font-black tracking-[0.2em] transition-all hover:bg-[#BF092F] shadow-xl active:scale-95"
              aria-label="Return to homepage"
            >
              <Home size={16} />
              Return to Terminal
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer group w-full sm:w-auto flex items-center justify-center gap-3 text-[#44444E] px-8 py-4 rounded-xl uppercase text-[10px] font-black tracking-[0.2em] border border-gray-200 hover:border-[#44444E] bg-white transition-all active:scale-95"
              aria-label="Go back to previous page"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Previous State
            </button>
          </div>
        </div>

        {/* --- TECHNICAL FOOTER --- */}
        <div className="mt-8 flex flex-col items-center gap-3 opacity-30">
           <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#BF092F]" />
              <div className="h-[1px] w-24 bg-gray-400" />
              <div className="h-1 w-1 rounded-full bg-[#44444E]" />
           </div>
           <span className="text-[8px] uppercase tracking-[0.4em] font-black text-gray-600">
             Arc Engineering Solutions Ltd
           </span>
        </div>
      </div>

      <div className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
};

export default ErrorPage;