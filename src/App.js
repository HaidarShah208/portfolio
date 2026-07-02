import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./compenents/header/Header";
import Home from './pages/home/Home'
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Services from "./pages/services/Services";
import Qualification from "./pages/qualification/Qualification";
import Contect from "./pages/contect/Contect";
import Footer from "./compenents/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Project from "./pages/projects/Project";
import CustomCursor from "./components/custom-cursor";
import { LenisProvider } from "./components/smooth-scroll";
import { ProjectScrollProvider } from "./pages/projects/context/ProjectScrollContext";

function App() {
  return (
    <LenisProvider>
    <ProjectScrollProvider>
    <BrowserRouter>
      <>
        <CustomCursor />
        <Header />
        <Routes>
          <Route path="/" element={
          <main className="main"> 
          <Home/>
          <About/>
          <Skills/>
          <Services/>
          <Qualification/>
          <Project/>
          <Contect/>
          <Footer/>
           </main>
          }/>
        </Routes>
      </>
      <ToastContainer/>
    </BrowserRouter>
    </ProjectScrollProvider>
    </LenisProvider>
  );
}

export default App;

// i use boxicons ,, unicons ,,
