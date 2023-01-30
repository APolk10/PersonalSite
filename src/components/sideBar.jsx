import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = function({ openAndCloseNav }) {
  return (
    <div id="mySidebar" className="sidebar">
      <h1 id="sidebarNameHeader">Adam&apos;s</h1>
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
  )
}

export default SideBar;