import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeProducts from "../Layout/HomeProducts";

const Home = () => {
  return (
    <Layout>
      <HomeBanner/>
      <HomeProducts/>
    </Layout>
  );
};

export default Home;
