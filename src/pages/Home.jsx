import React from "react";
import LatestProducts from "../components/LatestProduct/LatestProducts";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  );
}
