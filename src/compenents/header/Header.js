import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useScrollSpy from "../../hooks/useScrollSpy";
import { useLenis } from "../../components/smooth-scroll";
import HeaderScrollProgress from "./HeaderScrollProgress";
import "./header.css";

const NAV_ITEMS = [
  { id: "#home", label: "Home", icon: "uil-estate" },
  { id: "#about", label: "About", icon: "uil-user" },
  { id: "#skills", label: "Skills", icon: "uil-file-alt" },
  { id: "#services", label: "Services", icon: "uil-briefcase" },
  { id: "#journey", label: "Journey", icon: "uil-chart-line" },
  { id: "#projects", label: "Projects", icon: "uil-scenery" },
  { id: "#contact", label: "Contact", icon: "uil-message" },
];

function Header() {
  const lenis = useLenis();
  const { activeNav, setActiveNav, pageProgress } = useScrollSpy();
  const [toggle, showMenu] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header");
    if (!header) return undefined;

    const onScroll = () => {
      const scrollY = lenis?.scroll ?? window.scrollY;
      if (scrollY > 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    onScroll();
    if (lenis) lenis.on("scroll", onScroll);
    else window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (lenis) lenis.off("scroll", onScroll);
      else window.removeEventListener("scroll", onScroll);
    };
  }, [lenis]);

  const handleLinkClick = (id) => {
    setActiveNav(id);
    showMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav_logo">
          Ali Haidar
        </Link>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="nav_item">
                <a
                  href={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={
                    activeNav === item.id ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className={`uil ${item.icon} nav_i nav_icon`}></i>
                  {item.label}
                  {activeNav === item.id && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="nav_active_indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>

      <HeaderScrollProgress progress={pageProgress} />
    </header>
  );
}

export default Header;
