import Home from "@/app/components/Home";
import CardSection from "@/app/components/CardSection";
import ButtonBanner from "@/app/components/ButtonBanner";
import BgBanner from "@/app/components/BgBanner";
import DestinationSection from "@/app/components/DestinationSection";
import CarouselFeed from "@/app/components/Carousel";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import VideoBanner from "@/app/components/VideoBanner";
import Clients from "@/app/components/Clients";

export default function page() {
  return (
    <>
      <Navbar />
      <Home />
      <VideoBanner />
      <CardSection />
      <ButtonBanner />
      <Clients />
      <BgBanner />
      <DestinationSection />
      <CarouselFeed />
      <Footer />
    </>
  );
}
