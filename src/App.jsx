import { useState } from "react";
import "./App.css";

import About from "./components/About";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <div className="gradient-white gradient-navy-dark">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Services />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
