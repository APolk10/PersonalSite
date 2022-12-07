import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Home from './home.jsx';
import Entry from './entry.jsx';
import MVP from './mvp.jsx';
import SDC from './sdc.jsx';
import BlueOcean from './blueOcean.jsx';
import Photography from './photography.jsx';
import LinkedListGame from './linkedListGame.jsx';
import Footer from '../components/footer.jsx';

export default function Root() {
  const[isOpen, setOpen] = useState(false);
  const[hasEntered, setEntered] = useState(false)

  function openAndCloseNav() {
    // allows initial render to have fade in but no other lifecycle changes
    document.getElementById("detail").style.animation = "none";

    if (isOpen === false) {
      document.getElementById("mySidebar").style.width = "15vw";
      document.getElementById("menubtn").style.marginLeft = "1vw";
      document.getElementById("menubtn").style.width = "8vw";
      document.getElementById("menubtn").style.fontSize = "1.2vw";
      document.getElementById("navbarList").style.opacity = "1";
      setOpen(true);
    } else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("menubtn").style.marginLeft = "-16vw";
      document.getElementById("menubtn").style.width = "15vw";
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
                    <Link to={'/home'} onClick={openAndCloseNav}>About Me</Link>
                  </li>
                  <li>
                    <Link to={`/mvp`} onClick={openAndCloseNav}>
                      <p>Music By</p>
                      <p>Country</p>
                      <p>Application</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={`sdc`} onClick={openAndCloseNav}>
                      <p>Server and</p>
                      <p>Database</p>
                      <p>Overhaul</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={`blueOcean`} onClick={openAndCloseNav}>
                      <p>Construction</p>
                      <p>Job Portal</p>
                      <p>Website</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={`photography`} onClick={openAndCloseNav}>
                      <p>McMillan</p>
                      <p>Photography</p>
                      </Link>
                  </li>
                  <li>
                    <Link to={`linkedListGame`} onClick={openAndCloseNav}>
                      <p>Linked List</p>
                      <p>Game</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="main">
              <button id="menubtn" className="openbtn" onClick={openAndCloseNav}>&#9776; Menu</button>
              <div id="detail">
                <Outlet />
                <Footer />
              </div>
            </div>
          </div>
        </div>
  );
}