import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Reviews from "./components/Reviews.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
