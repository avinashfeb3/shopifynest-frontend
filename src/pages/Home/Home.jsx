import React from "react";
import Layout from "../../components/layouts/layout";
import Hero from "../../components/layouts/Hero/Hero";
import FeaturedProducts from "../../components/layouts/FeaturedProducts/FeaturedProducts";
import LatestProducts from "../../components/layouts/FeaturedProducts/LatestProducts";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}

      {/* Featured Products Section Start */}
      <FeaturedProducts />
      {/* Featured Products Section End */}

      {/* Latest Products Section Start */}
      <LatestProducts/>
      {/* Latest Products Section End */}
    </Layout>
  );
};

export default Home;
