import React from 'react';
import { useState, setState } from 'react';

// define lastInterval to stagger release
var currentTimeToWait = 0;
var head;

// build a linked list constructor
class MonsterSegment {
  constructor(randomColor) {
    this.data = currentTimeToWait;
    this.color = randomColor
    this.next = null;
  }
}

// allow for adding segments to monster
function addSegment(color) {
  currentTimeToWait += .25;
  let newSegment = new MonsterSegment(color);
  newSegment.next = head;
  head = newSegment;
  return newSegment;
}

//
function LinkedListGame() {
  const [color, setColor] = useState("purple");
  const [segments, setSegments] = useState([]); // eventually I want to use an object instead of cheating with array

  function onNewMonsterSegmentClick() {
    // create a new value for the node
    // instantiate new segment
    // invoke addSegment to attach
  }

  function addMonsterSegment() {
    const newSegment = addSegment("purple");
    setSegments(newSegment);
  }

  return (
    <div>
      <div id="ll-gamebox">
        {/* This will be where all nodes will be rendered */}
        <div id="segmentPath">
          <div id="segment"></div>
        </div>
      </div>
      <button type="button" onClick={addMonsterSegment}>Add segment</button>
    </div>
  )
}
export default LinkedListGame;