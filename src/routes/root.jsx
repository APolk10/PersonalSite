import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sideBar.jsx';

import Footer from '../components/footer.jsx';

export default function Root() {
  const[isOpen, setOpen] = useState(false);
  const[width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  function openAndCloseNav() {
    // allows initial render to have fade in but no other lifecycle changes
    document.getElementById("detail").style.animation = "none";

    if (!isOpen) {
      if (width < 450) {
        document.getElementById("mySidebar").style.width = "60vw";
        document.getElementById("menubtn").style.marginLeft = "52vw";
        document.getElementById("menubtn").style.width = "35vw";
        document.getElementById("menubtn").style.fontSize = "5vw";
        document.getElementById("navbarList").style.opacity = "1";
        document.getElementById("navbarList").style.paddingLeft = "6vw";
        setOpen(true);
      } else {
        document.getElementById("mySidebar").style.width = "17vw";
        document.getElementById("menubtn").style.marginLeft = "1.5vw";
        document.getElementById("menubtn").style.width = "10vw";
        document.getElementById("menubtn").style.fontSize = "1.2vw";
        document.getElementById("navbarList").style.opacity = "1";
        document.getElementById("navbarList").style.paddingLeft = "-5vw";
        setOpen(true);
      }
    }
    if (isOpen) {
      if (width < 450) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("menubtn").style.marginLeft = "1vw";
        document.getElementById("menubtn").style.marginTop = "-5vh";
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
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }, []);

  return (
        <div id="root">
          <div id="container">
            <div id="main">
              <SideBar openAndCloseNav={openAndCloseNav}></SideBar>
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