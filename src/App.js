import React from "react";
import './App.css';
import NavBar from "./components/header/NavBar";
import Hero from "./components/hero/Hero";
import AmazingArtWork from "./components/amazingArtWork/AmazingArtWork";
import CreateAndSell from "./components/createAndSell/CreateAndSell";
import Subscribe from "./components/subscribe/Subscribe"
import Footer from "./components/footer/Footer";
import Popular from "./components/popular/Popular";


const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AmazingArtWork />
      <CreateAndSell />
      <Popular />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;