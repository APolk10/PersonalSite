import React from 'react';

function Entry({setEntered}) {


  return (
    <div id="entryContainer">
      <div id="entryCenter">
      <p>Welcome to my portfolio!</p>
      <p>Click below to see what I have made so far</p>
      <button id="entryButton" type="button" onClick={setEntered}>Click Here to enter</button>
      </div>
    </div>
  )
}

export default Entry;