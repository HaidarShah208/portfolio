import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";


const Header = () => {

// header shadow
useEffect(() => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  return () => {
    window.removeEventListener("scroll", () => {});
  };
}, []);



//header in medium screen
  const [Toggle,showMenu]=useState(false)

  //active nav in header
  const [activeNav,setActiveNav]=useState('#home')
  const handleLinkClick = (id) => {
    setActiveNav(id);
    showMenu(false); // Hide the menu when a link is clicked
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to={'/'} className="nav_logo">
          Ali Haidar
        </Link>
        <div className={Toggle?"nav_menu show_menu ":"nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item ">
              <a href="#home" onClick={()=>handleLinkClick('#home')}  className={activeNav ==='#home' ?"nav_link active-link":"nav_link"}>
                <i className="uil uil-estate nav_i nav_icon"></i>Home 
              </a>
            </li>
            <li className="nav_item ">
              <a href="#about" onClick={()=>handleLinkClick('#about')} className={activeNav ==='#about' ?"nav_link active-link":"nav_link"}>
                <i className="uil uil-user nav_i nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item ">
            <a
                href="#skills"
                onClick={() => handleLinkClick("#skills")}
                className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-file-alt nav_i nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item ">
            <a
                href="#services"
                onClick={() => handleLinkClick("#services")}
                className={activeNav === "#services" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-briefcase nav_i nav_icon"></i>Services
              </a>
            </li>
            <li className="nav_item ">
            <a
                href="#projects"
                onClick={() => handleLinkClick("#projects")}
                className={activeNav === "#projects" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-scenery nav_i nav_icon"></i>Projects
              </a>
            </li>
            <li className="nav_item  ">
            <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-message nav_i nav_icon"></i>Contact 
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav-close" onClick={()=>showMenu(!Toggle)}></i>
        </div>
        <div className="nav-toggle" onClick={()=>showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header
