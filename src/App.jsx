import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import TickerBar from "./components/tickerbar/TickerBar";
import Resume from "./pages/Resume";

const Home = () => (
  <>
    <Header />
    <TickerBar />
    <Topbar />
    <Portfolio />
    <Skills />
    <Experience />
    <Testimonials />
    <Education />
    <Contact />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
