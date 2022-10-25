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
        <div id="sidebar">
          <h1 id="sidebarNameHeader">Adam</h1>
          <div id="sidebarListHeader">
            My Work
          </div>
          <nav>
            <ul id="navbarList">
              <li>
                <Link to={`/mvp`}>MVP</Link>
              </li>
              <li>
                <Link to={`sdc`}>SDC</Link>
              </li>
              <li>
                <Link to={`blueOcean`}>BlueOcean</Link>
              </li>
              <li>
                <Link to={`photography`}>Photography</Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src='https://cdn-icons-png.flaticon.com/16/846/846449.png' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div> :
      <div id="entryButton" /*styles={{
        backgroundImage:
        "url('https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1')",
        }}*/>
        <button type="button" onClick={setEntry}>Click Here To Enter </button>
      </div>
    }
    </div>
  );
}