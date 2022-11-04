import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Home from './home.jsx';
import MVP from './mvp.jsx';
import SDC from './sdc.jsx';
import BlueOcean from './blueOcean.jsx';
import Photography from './photography.jsx';

export default function Root() {
  const[isEntered, setEntry] = useState(false);
  const[isOpen, setOpen] = useState(false);

  function openAndCloseNav() {
    if (isOpen === false) {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      setOpen(true);
    } else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      setOpen(false);
    }
  }

  return (
    <div>
      <div id="container">
        <div id="mySidebar" className="sidebar">
          <h1 id="sidebarNameHeader">Adam</h1>
          <div id="sidebarListHeader">
            My Work
          </div>
          <nav>
            <ul id="navbarList">
              <li>
                <Link to={'/home'}>Home</Link>
              </li>
              <li>
                <Link to={`/mvp`}>Music By Country Application</Link>
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
          <button className="openbtn" onClick={openAndCloseNav}>&#9776; Menu</button>
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}