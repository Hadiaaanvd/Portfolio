import React from "react";
import Header from "./components/header/Header";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Education from "./components/education/Education";
import TickerBar from "./components/tickerbar/TickerBar";

const App = () => {
  return (
    <>
      <Header />
      <TickerBar />
      <Topbar />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Education />
      <Contact />
    </>
  );
};

export default App;
