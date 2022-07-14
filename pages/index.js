import React from "react";
import { client } from "../lib/client";
import { HeroBanner, FooterBanner, Product, Footer } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of Many Products</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <Footer />
      {/*<FooterBanner />*/}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type =="product"]';
  const products = await client.fetch(query);

  const bannerQ = '*[_type =="banner"]';
  const bannerData = await client.fetch(bannerQ);

  return {
    props: { products, bannerData },
  };
};

export default Home;
