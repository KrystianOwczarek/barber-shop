import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Prices from "../components/Prices";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-full w-full">
        <Services />
        <Prices />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}