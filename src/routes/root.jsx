import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import UseMediaQuery from '../components/mobileView.jsx';
import Home from './home.jsx';
import MVP from './mvp.jsx';
import SDC from './sdc.jsx';
import BlueOcean from './blueOcean.jsx';
import Photography from './photography.jsx';
import LinkedListGame from './linkedListGame.jsx';
import Footer from '../components/footer.jsx';

export default function Root() {
  const[isOpen, setOpen] = useState(false);
  const[isMobile, setIsMobile] = useState(UseMediaQuery("screen and (max-width: 450px)"))

  function openAndCloseNav() {
    // allows initial render to have fade in but no other lifecycle changes
    document.getElementById("detail").style.animation = "none";

    if (!isOpen) {
      if (isMobile) {
        document.getElementById("mySidebar").style.width = "30vw";
        document.getElementById("menubtn").style.marginLeft = "20vw";
        document.getElementById("menubtn").style.width = "25vw";
        document.getElementById("menubtn").style.fontSize = "5vw";
        document.getElementById("navbarList").style.opacity = "1";
        document.getElementById("navbarList").style.paddingLeft = "-5vw";
        setOpen(true);
      } else {
        document.getElementById("mySidebar").style.width = "30vw";
        document.getElementById("menubtn").style.marginLeft = "1.5vw";
        document.getElementById("menubtn").style.width = "10vw";
        document.getElementById("menubtn").style.fontSize = "1.2vw";
        document.getElementById("menubtn").style.color = "grey";
        document.getElementById("menubtn").style.backgroundColor = "whitesmoke";
        document.getElementById("navbarList").style.opacity = "1";
        document.getElementById("navbarList").style.paddingLeft = "-5vw";
        setOpen(true);
      }
    }
    if (isOpen) {
      if (isMobile) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("menubtn").style.marginLeft = "3vw";
        document.getElementById("menubtn").style.width = "25vw";
        document.getElementById("menubtn").style.fontSize = "5vw";
        document.getElementById("menubtn").style.backgroundColor = "rgba(67, 143, 143, .8)";
        document.getElementById("navbarList").style.opacity = "0";
      } else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("menubtn").style.marginLeft = "-16vw";
        document.getElementById("menubtn").style.width = "15vw";
        document.getElementById("menubtn").style.fontSize = "1.6vw";
        document.getElementById("menubtn").style.color = "white";
        document.getElementById("menubtn").style.backgroundColor = "rgba(67, 143, 143, .8)";
        document.getElementById("navbarList").style.opacity = "0";
      }
      setOpen(false);
    }
  }

  useEffect(() => {
    console.log('fired');
  }, [isMobile])

  return (
        <div id="root">
          <div id="container">
            <div id="mySidebar" className="sidebar">
              <h1 id="sidebarNameHeader">Adam's</h1>
              <div id="sidebarListHeader">
                Portfolio
              </div>
              <nav>
                <ul id="navbarList">
                  <li id="listName">
                    <Link id="listBlock" to={'/home'} onClick={openAndCloseNav}>About Me</Link>
                  </li>
                  <li id="listName">
                    <Link id="listBlock" to={`/mvp`} onClick={openAndCloseNav}>
                      <p id="listText">Music By</p>
                      <p id="listText">Country</p>
                      <p id="listText">Application</p>
                    </Link>
                  </li>
                  <li id="listName">
                    <Link id="listBlock" to={`sdc`} onClick={openAndCloseNav}>
                      <p id="listText">Server and</p>
                      <p id="listText">Database</p>
                      <p id="listText">Overhaul</p>
                    </Link>
                  </li>
                  <li id="listName">
                    <Link id="listBlock" to={`blueOcean`} onClick={openAndCloseNav}>
                      <p id="listText">Construction</p>
                      <p id="listText">Job Portal</p>
                      <p id="listText">Website</p>
                    </Link>
                  </li>
                  <li id="listName">
                    <Link id="listBlock" to={`photography`} onClick={openAndCloseNav}>
                      <p id="listText">McMillan</p>
                      <p id="listText">Photography</p>
                      </Link>
                  </li>
                  <li id="listName">
                    <Link id="listBlock" to={`linkedListGame`} onClick={openAndCloseNav}>
                      <p id="listText">Linked List</p>
                      <p id="listText">Game</p>
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