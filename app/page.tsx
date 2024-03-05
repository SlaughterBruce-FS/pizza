import About from "@/components/About";
import Blog from "@/components/Blog";
import Choose from "@/components/Choose";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pizzas from "@/components/Pizzas";
import Reservation from "@/components/Reservation";
import Specials from "@/components/Specials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Choose />
      <About />
      <Pizzas />
      <Specials />
      <Reservation />
      <Blog />
    </div>
  );
}
