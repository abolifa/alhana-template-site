"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Partership from "@/components/partership";
import Services from "@/components/services";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Partership />
      <Contact />
    </div>
  );
};

export default HomePage;
