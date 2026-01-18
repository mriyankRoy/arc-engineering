import HomePageSection1 from "./HomePageHeroSection";
import CompanyVideoSection from "./CompanyVideoSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import TrustedPartners from "./TrustedPartners";
import FacilitiesPage from "./FacilitiesPage";

const HomePage = () => {
  
  return (
    <div>
      <HomePageSection1 />
      <AboutSection />
      <TrustedPartners />
      <CompanyVideoSection />
      <FacilitiesPage />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
