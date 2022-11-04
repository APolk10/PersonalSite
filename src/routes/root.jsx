import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import MVP from './mvp.jsx';
import SDC from './sdc.jsx';
import BlueOcean from './blueOcean.jsx';
import Photography from './photography.jsx';

export default function Root() {
  const[isEntered, setEntry] = useState(false);

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  return (
    <div>
    {isEntered ?
      <div id="container">
        <div id="mySidebar" className="sidebar">
          <a className="closebtn" onClick={closeNav}>&times;</a>
          <h1 id="sidebarNameHeader">Adam</h1>
          <div id="sidebarListHeader">
            My Work
          </div>
          <nav>
            <ul id="navbarList">
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
              <li>
                <Link to={"/"}>
                  <img src='https://cdn-icons-png.flaticon.com/16/846/846449.png' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="main">
          <button className="openbtn" onClick={openNav}>&#9776; Menu</button>
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div> :
      <div id="entryButton">
        <button type="button" onClick={setEntry}>Click To Enter</button>
      </div>
    }
    </div>
  );
}