import React from "react";
import Intro from "./components/intro/Intro";
import Header from "./components/header/Header";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import TickerBar from "./components/tickerbar/TickerBar";

const App = () => {
  return (
    <>
      <Header />
      <TickerBar />
      <Topbar />
      <Intro />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default App;
