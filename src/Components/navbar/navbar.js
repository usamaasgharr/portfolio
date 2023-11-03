import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {IoMdPaper} from 'react-icons/io'
import {MdOutlineScreenshotMonitor} from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={ scrolled ? "navbar navbar-expand-lg navbar-dark navbar-blur" : "navbar navbar-expand-lg navbar-dark "}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><b>Port<span className='primary'>folio</span></b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-item-margin">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/"> <AiOutlineHome /> Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><BsFillPersonFill /> About</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/projects"><MdOutlineScreenshotMonitor /> Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume"><IoMdPaper /> Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


