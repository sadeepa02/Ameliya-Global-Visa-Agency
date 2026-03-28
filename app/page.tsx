import Hero from "@/components/client/Hero";
import Footer from "@/components/client/Footer";  
import Navbar from "@/components/client/Navbar";
import AboutUs from "@/components/client/Aboutus";
import Services from "@/components/client/Services";  
import HowItWorks from "@/components/client/Howitworks";


export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <Hero />
      <AboutUs />
      <Services />

      <HowItWorks />
      <div className="max-w-7xl mx-auto">
          
      </div>
      
    </main>
  );
}
