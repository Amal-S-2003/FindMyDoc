import React from "react";
import HomeBanner from "../components/HomeBanner";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import TopBlogs from "../components/TopBlogs";

function Home() {
  return (
    <>
      <HomeBanner />
      <ServicesSection />
      <TopBlogs />
      <Footer />
    </>
  );
}

export default Home;
