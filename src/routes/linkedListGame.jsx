import React from 'react';
import { useState, setState } from 'react';

// define head
var head;

// build a linked list constructor
class MonsterSegment {
  constructor(val) {
    this.self = val;
    this.next = null;
  }
}

// allow for adding segments to monster
function addSegment(newVal) {
  let newSegment = new MonsterSegment(newVal);
  newSegment.next = head;
  head = newSegment;
}

//
function LinkedListGame() {

  function onNewMonsterSegmentClick() {
    // create a new value for the node
    // instantiate new segment
    // invoke addSegment to attach
  }

  function addMonsterSegment() {

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