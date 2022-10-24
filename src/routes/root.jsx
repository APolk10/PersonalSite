import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import MVP from './mvp.jsx';
import SDC from './sdc.jsx';
import BlueOcean from './blueOcean.jsx';
import Photography from './photography.jsx';

export default function Root() {
  const[isEntered, setEntry] = useState(false);

  return (
    <>
    {isEntered ?
      <>
        <div id="sidebar">
          <h1>Adam</h1>
          <div>
            My Work
          </div>
          <nav>
            <ul>
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
                <Link to={"/"}>Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </> :
      <div>
        <button type="button" onClick={setEntry}>Click Here To Enter </button>
      </div>
    }
    </>
  );
}