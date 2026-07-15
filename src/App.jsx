import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Resume from "./pages/Resume";
import ProjectsPage from "./pages/ProjectsPage";

const Home = () => (
  <>
    <Navbar />
    <Header />
    <Portfolio />
    <Skills />
    <Experience />
    <Testimonials />
    <Education />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
