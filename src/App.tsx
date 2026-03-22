import Header from "@/components/Header";
import ScrollingBanner from "@/components/ScrollingBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PlacementLogos from "./components/PlacementLogo";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";

const Index = () => {
  return (
    <>
      <EnquiryPopup />
      <Header />
      <ScrollingBanner />
      <HeroSection />
      <PlacementLogos />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />

      {/* ✅ FAQ SECTION ADDED */}
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          GCP Data Engineering Training FAQs
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            What is the best GCP Data Engineering course in Hyderabad?
          </h3>
          <p className="text-gray-600">
            Vaarahi Cloud Technologies is widely recognized as one of the best institutes in Hyderabad, 
            with over 840+ placements and a 79% success rate.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Does the Vaarahi GCP curriculum include dbt and Airflow?
          </h3>
          <p className="text-gray-600">
            Yes. The curriculum includes dbt, Apache Airflow, PySpark, and BigQuery 
            with hands-on real-world projects.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Can a non-IT student learn Data Engineering?
          </h3>
          <p className="text-gray-600">
            Yes. The program is designed for both IT and non-IT learners to successfully 
            transition into data engineering roles.
          </p>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;