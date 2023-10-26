import React from "react";
import './App.css';
import NavBar from "./components/header/NavBar";
import Hero from "./components/hero/Hero";
// import AmazingArtWork from "./components/amazingArtWork/AmazingArtWork";


const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <AmazingArtWork /> */}
    </div>
  );
}

export default App;