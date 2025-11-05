"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Partership from "@/components/partership";
import Services from "@/components/services";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <div className="w-full h-28"></div>
      <About />
      <Partership />
      <Gallery />
      <Contact />
    </div>
  );
};

export default HomePage;
