import Navbar from "@/components/client/Navbar";
import Hero from "@/components/client/Hero";
import AboutUs from "@/components/client/Aboutus";
import Services from "@/components/client/Services";
import HowItWorks from "@/components/client/Howitworks";
import BookingForm from "@/components/client/ConsultationBooking";
import UniversitiesSection from "@/components/client/UniversitiesSection";
import Footer from "@/components/client/Footer";
import Testimonials from "@/components/client/testimonials";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "#080f1e" }}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <HowItWorks />
      <UniversitiesSection />
      <BookingForm />
      <Testimonials />
      
      
    </main>
    
  );
}