import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Customers from "@/components/sections/Customers";
import Purpose from "@/components/sections/Purpose";
import OurWork from "@/components/sections/OurWork";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Customers />
      <Purpose />
      <OurWork />
      <Reviews />
      <Footer />
    </main>
  );
}
