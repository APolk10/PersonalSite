import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Home from './home.jsx';
import MVP from './mvp.jsx';
import SDC from './sdc.jsx';
import BlueOcean from './blueOcean.jsx';
import Photography from './photography.jsx';
import Footer from '../components/footer.jsx';

export default function Root() {
  const[isOpen, setOpen] = useState(false);

  function openAndCloseNav() {
    if (isOpen === false) {
      document.getElementById("mySidebar").style.width = "15vw";
      document.getElementById("main").style.marginLeft = "10vw";
      document.getElementById("menubtn").style.marginLeft = "7vw";
      document.getElementById("menubtn").style.width = "8vw";
      document.getElementById("menubtn").style.height = "6vh";
      document.getElementById("menubtn").style.fontSize = "1.2vw";
      document.getElementById("navbarList").style.opacity = "1";
      setOpen(true);
    } else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("menubtn").style.marginLeft = "2vw";
      document.getElementById("menubtn").style.width = "15vw";
      document.getElementById("menubtn").style.height = "8vh";
      document.getElementById("menubtn").style.fontSize = "1.6vw";
      document.getElementById("navbarList").style.opacity = "0";
      setOpen(false);
    }
  }

  return (
    <div>
      <div id="container">
        <div id="mySidebar" className="sidebar">
          <h1 id="sidebarNameHeader">Adam's</h1>
          <div id="sidebarListHeader">
            Portfolio
          </div>
          <nav>
            <ul id="navbarList">
              <li>
                <Link to={'/home'}>About Me</Link>
              </li>
              <li>
                <Link to={`/mvp`}>
                  <p>Music By</p>
                  <p>Country Application</p>
                </Link>
              </li>
              <li>
                <Link to={`sdc`}>Server and Database Overhaul</Link>
              </li>
              <li>
                <Link to={`blueOcean`}>Contruction Website</Link>
              </li>
              <li>
                <Link to={`photography`}>Client's Photography Website</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="main">
          <button id="menubtn" className="openbtn" onClick={openAndCloseNav}>&#9776; Menu</button>
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}