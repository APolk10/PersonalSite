import React from 'react';

function Entry({setEntered}) {


  return (
    <div id="entryContainer">
      <div id="entryCenter">
      <p>Welcome to my portfolio!</p>
      <button id="entryButton" type="button" onClick={setEntered}>Click Here to enter</button>
      </div>
    </div>
  )
}

export default Entry;