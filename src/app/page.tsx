import Benefits from "@/components/benefits";
import Brand from "@/components/brand";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import NewCeramics from "@/components/newCeramics";
import PopularProduct from "@/components/pouplarProduct";
import Touch from "@/components/touch";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Brand />
      <NewCeramics />
      <PopularProduct />
      <Benefits />
      <Touch />
    </div>
  );
}
