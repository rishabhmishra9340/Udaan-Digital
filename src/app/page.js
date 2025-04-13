import Home from "@/app/components/Home";
import CardSection from "@/app/components/CardSection";
import BgBanner from "@/app/components/BgBanner";
import CarouselFeed from "@/app/components/Carousel";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import VideoBanner from "@/app/components/VideoBanner";

export default function page() {
  return (
    <>
      <Navbar />
      <Home />
      <VideoBanner />
      <CardSection />
      <BgBanner />
      <CarouselFeed />
      <Footer />
    </>
  );
}
