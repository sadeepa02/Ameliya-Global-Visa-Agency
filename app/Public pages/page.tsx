import AboutUs from "@/components/client/Aboutus";
import Hero from "@/components/client/Hero";


export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <AboutUs />
      <div className="max-w-7xl mx-auto">
          
      </div>
    </main>
  );
}
