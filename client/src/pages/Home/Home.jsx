import Hero from "../../components/sections/Hero";
import TrustedCompanies from "../../components/sections/TrustedCompanies";
import AboutPreview from "../../components/sections/AboutPreview";
import ServicesPreview from "../../components/sections/ServicesPreview";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Statistics from "../../components/sections/Statistics";
import WorkingProcess from "../../components/sections/WorkingProcess";
import FeaturedProjects from "../../components/sections/FeaturedProjects";
import Testimonials from "../../components/sections/Testimonials";
import FAQPreview from "../../components/sections/FAQPreview";
import LatestBlogs from "../../components/sections/LatestBlogs";
import ContactCTA from "../../components/sections/ContactCTA";
import Newsletter from "../../components/sections/Newsletter";
import SEO from "../../seo/SEO";

export default function Home() {
  return (
    <>
      <SEO description="AI-powered digital solutions for ambitious businesses." path="/" />
      <Hero />
      <TrustedCompanies />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Statistics />
      <WorkingProcess />
      <FeaturedProjects />
      <Testimonials />
      <FAQPreview />
      <LatestBlogs />
      <ContactCTA />
      <Newsletter />
    </>
  );
}
