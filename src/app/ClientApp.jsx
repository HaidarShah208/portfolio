"use client";

import Header from "../compenents/header/Header";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Skills from "../sections/skills/Skills";
import Services from "../sections/services/Services";
import Journey from "../sections/journey";
import Contect from "../sections/contect/Contect";
import Footer from "../compenents/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Project from "../sections/projects/Project";
import CustomCursor from "../components/custom-cursor";
import { LenisProvider } from "../components/smooth-scroll";
import AIChat from "../components/AIChat";

function ClientApp() {
  return (
    <LenisProvider>
      <>
        <CustomCursor />
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Journey />
          <Project />
          <Contect />
          <Footer />
        </main>
        <AIChat />
      </>
      <ToastContainer />
    </LenisProvider>
  );
}

export default ClientApp;
