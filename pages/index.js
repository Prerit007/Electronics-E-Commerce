import React from "react";
import { HeroBanner, Footer } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of Many Products</p>
      </div>
      <div className="products-container">
        {["Product1", "Product2", "Product3"].map((product) => product)}
      </div>
      <Footer />
    </>
  );
};

export default Home;
