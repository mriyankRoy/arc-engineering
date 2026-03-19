import React from "react";
import { Helmet } from "react-helmet-async"; 
import HomePageSection1 from "./HomePageHeroSection";
import CompanyVideoSection from "./CompanyVideoSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import TrustedPartners from "./TrustedPartners";
import FacilitiesPage from "./FacilitiesPage";

const HomePage = () => {
  // SEO: Breadcrumb Schema using your specific domain
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arcengltd.com/"
      }
    ]
  };

  return (
    <main>
      <Helmet>
        <title>Arc Engineering | Precision Power & Generator Container Solutions</title>
        <meta name="description" content="Arc Engineering: Global leaders in Generator Containers and E-House manufacturing. High-performance power systems engineered to UK standards." />
        
        {/* SEO: Updated with your domain */}
        <link rel="canonical" href="https://arcengltd.com/" />
        
        <meta property="og:title" content="Arc Engineering | Power & Container Solutions" />
        <meta property="og:description" content="Bespoke engineering solutions for global power infrastructure." />
        <meta property="og:url" content="https://arcengltd.com/" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <HomePageSection1 />
      <AboutSection />
      <TrustedPartners />
      <CompanyVideoSection />
      <FacilitiesPage />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;