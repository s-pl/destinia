import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import MapDisplay from "../../components/MapDisplay/MapDisplay";
import "leaflet/dist/leaflet.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MapDisplay />
    </>
  );
};

export default Home;