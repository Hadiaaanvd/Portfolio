import React from "react";
import Intro from "./components/intro/Intro";
import Header from "./components/header/Header";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio"; 
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
