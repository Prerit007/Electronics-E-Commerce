import React from "react";
import { HeroBanner, Footer } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of Many Products</p>
      </div>
      <div>
        {["Product1", "Product2", "Product3"].map((product) => product)}
      </div>
      <Footer />
    </>
  );
};

export default Home;
