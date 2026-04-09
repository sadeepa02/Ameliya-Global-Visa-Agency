import Footer from "@/components/client/Footer";
import Navbar from "@/components/client/Navbar";

export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}
