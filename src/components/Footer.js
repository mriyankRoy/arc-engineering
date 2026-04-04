import {
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Link, useLocation } from "react-router";
// Import your products data
import { products } from "../utils/products";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // SEO: Structured Data (JSON-LD) for Arc Engineering Solutions Ltd
  const footerSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arc Engineering Solutions Ltd",
    url: "https://arcengltd.com",
    logo: "https://res.cloudinary.com/dc912sjxj/image/upload/v1772287992/Gemini_Generated_Image_tler0wtler0wtler-removebg-preview_zhmv2k.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-7492-949230",
      contactType: "customer service",
      email: "info@arcengltd.com",
      areaServed: ["GB", "Europe", "Worldwide"],
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "W3 Winchester Avenue, Blaby",
      addressLocality: "Leicester",
      postalCode: "LE8 4GZ",
      addressCountry: "GB",
    },
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Facilities", path: "/facilities" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer
      className="relative w-full px-2 pb-2 mt-12 overflow-hidden"
      role="contentinfo"
    >
      <script type="application/ld+json">{JSON.stringify(footerSchema)}</script>

      <div className="relative w-full mx-auto rounded-2xl shadow-2xl overflow-hidden bg-[#44444E]">
        {/* Responsive Background Layer */}
        <div
          className="absolute inset-0 -z-10 hidden md:block"
          style={{
            background: "linear-gradient(110deg, #44444E 36vw, #BF092F 36vw)",
          }}
        />
        <div className="absolute inset-0 -z-10 md:hidden bg-[#44444E]" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="container mx-auto px-6 md:px-10 lg:px-12 py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 items-start">
            {/* BRAND SECTION */}
            <div className="lg:col-span-4 flex flex-col items-start space-y-6 md:space-y-8">
              <Link
                to="/"
                aria-label="Arc Engineering Solutions Home"
                className="group relative"
              >
                {/* High-Contrast Glow: Creates a soft 'pod' for the logo to sit on */}
                <div
                  className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <img
                  src="https://media.arcengltd.com/arc-profile/arc-logo-remove_bg.webp"
                  alt="Arc Engineering Solutions Ltd"
                  /* Drop shadow filter adds a crisp edge to the logo elements */
                  className="h-14 md:h-20 w-auto transition-transform duration-500 group-hover:scale-105 relative z-10 drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)]"
                  loading="lazy"
                />
              </Link>

              <p className="text-white/70 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] leading-loose max-w-sm border-l-2 border-[#BF092F] pl-5 italic relative z-10">
                Engineering excellence in power solutions. Supporting UK,
                Europe, and Worldwide markets with bespoke industrial
                reliability.
              </p>

              <nav
                className="flex gap-3 relative z-10"
                aria-label="Social Media"
              >
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#BF092F] transition-all rounded-xl"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </nav>
            </div>

            {/* DIRECTORY SECTION */}
            <nav className="lg:col-span-2">
              <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-8 lg:mb-10">
                Directory
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group transition-all ${
                        location.pathname === link.path
                          ? "text-[#BF092F]"
                          : "text-white hover:text-white/60"
                      }`}
                    >
                      <ArrowRight
                        size={12}
                        className={`transition-all ${location.pathname === link.path ? "opacity-100 ml-0" : "opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0"} text-[#BF092F]`}
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* PRODUCT SCOPE SECTION */}
            <nav className="lg:col-span-3">
              <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-8 lg:mb-10">
                Product_Scope
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {products.map((category) => (
                  <li key={category.slug}>
                    <Link
                      to={`/products?category=${category.slug}`}
                      className="text-[11px] font-bold text-white uppercase tracking-[0.2em] opacity-90 hover:opacity-100 transition-all flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-[#BF092F] group-hover:w-3 transition-all duration-300" />
                      {category.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CONTACT SECTION */}
            <div className="lg:col-span-3">
              <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-8 lg:mb-10">
                Contact_Terminal
              </h3>
              <div className="space-y-6 md:space-y-7">
                <address className="not-italic flex items-start gap-4 group">
                  <MapPin
                    className="text-white/40 group-hover:text-white transition-colors shrink-0"
                    size={16}
                  />
                  <p className="text-[11px] font-bold text-white uppercase tracking-widest leading-relaxed">
                    W3 Winchester Avenue, Blaby, <br /> Leicester, LE8 4GZ, UK
                  </p>
                </address>
                <div className="flex items-center gap-4 group">
                  <Mail
                    className="text-white/40 group-hover:text-white transition-colors shrink-0"
                    size={16}
                  />
                  <a
                    href="mailto:info@arcengltd.com"
                    className="text-[11px] font-bold text-white uppercase tracking-widest transition-colors group-hover:text-white break-all"
                  >
                    info@arcengltd.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Phone
                    className="text-white/40 group-hover:text-white transition-colors shrink-0"
                    size={16}
                  />
                  <a
                    href="tel:+447492949230"
                    className="text-[11px] font-bold text-white uppercase tracking-widest transition-colors group-hover:text-white"
                  >
                    +44 7492 949230
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT BAR */}
          <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] text-center md:text-left">
              &copy; {currentYear} ARC ENGINEERING SOLUTIONS LTD{" "}
              <span className="mx-2 text-[#BF092F]">/</span> ALL_RIGHTS_RESERVED
            </p>
            <nav className="flex gap-6 md:gap-10">
              {["Privacy", "Terms", "Support"].map((legal) => (
                <a
                  key={legal}
                  href="#"
                  className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] hover:text-white transition-colors"
                >
                  {legal}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Visual Watermark */}
        <span
          className="absolute bottom-[-10px] md:bottom-[-15px] right-[-10px] text-[80px] md:text-[180px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none"
          aria-hidden="true"
        >
          ARC
        </span>
      </div>
    </footer>
  );
};

export default Footer;
