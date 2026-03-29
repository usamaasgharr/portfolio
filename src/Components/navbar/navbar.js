import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import "./navbar.css";

const LG_BREAKPOINT = 992;

const navLinkClass = ({ isActive }) =>
  `nav-link portfolio-nav-link${isActive ? " portfolio-nav-link--active" : ""}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  const closeMobileMenu = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth >= LG_BREAKPOINT) return;

    const el = collapseRef.current;
    const toggler = togglerRef.current;
    const Collapse = window.bootstrap?.Collapse;
    if (!el) return;

    if (Collapse) {
      const inst = Collapse.getInstance(el);
      if (inst) {
        inst.hide();
      } else if (el.classList.contains("show")) {
        el.classList.remove("show");
        if (toggler) {
          toggler.classList.add("collapsed");
          toggler.setAttribute("aria-expanded", "false");
        }
      }
    } else {
      el.classList.remove("show");
      if (toggler) {
        toggler.classList.add("collapsed");
        toggler.setAttribute("aria-expanded", "false");
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark portfolio-navbar${
        scrolled ? " portfolio-navbar--scrolled" : ""
      }`}
    >
      <div className="container-fluid portfolio-navbar-inner">
        <Link
          className="navbar-brand portfolio-navbar-brand"
          to="/"
          onClick={closeMobileMenu}
        >
          <span className="portfolio-brand-mark" aria-hidden />
          <span className="portfolio-brand-text">
            <span className="portfolio-brand-light overflow-hidden">Port</span>
            <span className="portfolio-brand-primary overflow-hidden">folio</span>
          </span>
        </Link>
        <button
          ref={togglerRef}
          className="navbar-toggler portfolio-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon portfolio-toggler-icon" />
        </button>
        <div
          ref={collapseRef}
          className="collapse navbar-collapse portfolio-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav portfolio-nav-list ms-lg-auto">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/" end onClick={closeMobileMenu}>
                <span className="portfolio-nav-icon" aria-hidden>
                  <AiOutlineHome />
                </span>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/about" onClick={closeMobileMenu}>
                <span className="portfolio-nav-icon" aria-hidden>
                  <BsFillPersonFill />
                </span>
                <span>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/projects" onClick={closeMobileMenu}>
                <span className="portfolio-nav-icon" aria-hidden>
                  <MdOutlineScreenshotMonitor />
                </span>
                <span>Projects</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/resume" onClick={closeMobileMenu}>
                <span className="portfolio-nav-icon" aria-hidden>
                  <IoMdPaper />
                </span>
                <span>Resume</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
