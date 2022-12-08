import React from 'react';
import { useState, setState, useEffect } from 'react';

// define lastInterval to stagger release
var currentTimeToWait = 0;
var head = {color: "purple", data: 0, next: undefined};

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
  currentTimeToWait += 1;
  let newSegment = new MonsterSegment(color);
  newSegment.next = head;
  head = newSegment;
  return newSegment;
}

//
function LinkedListGame() {
  const [color, setColor] = useState("purple");
  const [segments, setSegments] = useState({});
  const [segmentContainer, setSegmentContainer] = useState([]);

  var test;

  function onNewMonsterSegmentClick() {
    // create a new value for the node
    // instantiate new segment
    // invoke addSegment to attach
  }

  function addMonsterSegment() {
    const newSegment = addSegment("purple");
    setSegments(newSegment);
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
  }

  function monsterIteration() {
    var copyOfSegments = segments;
    var collectionOfSegmentData = [];

    if (copyOfSegments.next) {
      while (copyOfSegments.next) {
        collectionOfSegmentData.unshift(copyOfSegments.data)
        copyOfSegments = copyOfSegments.next;
      }
      collectionOfSegmentData.push(0);
    }
    if (collectionOfSegmentData.length === 0) {
      return [0];
    }
    return collectionOfSegmentData;
  }

  function resetAnimation() {
    // let oldState = {color: "purple", data: 0, next: undefined};
    // setSegments({});
    // setSegmentContainer([]);
  }

  useEffect(() => {
    const segmentsToTrack = monsterIteration();
    setSegmentContainer(segmentsToTrack);
    resetAnimation();
  }, [segments])

  return (
    <div>
      <div id='ll-title'>Linked List Monster!</div>
      <div>
        <p id='ll-description'>I created this to entertain myself as well as others with a visualization of linked lists.</p>
      </div>
      <div id="ll-container">
        <div id="ll-gamebox">
          <div>
            {segmentContainer.length > 0 ? segmentContainer.map(segment =>
            <div key={`segmentPath-${segment}`} className={`segmentPath-${segment}`}>
              <div key={`segment-${segment}`} className={`segment-${segment}`}></div>
            </div>
            ) : <></>}
          </div>
        </div >
        <div id="ll-buttonBox">
          <button className="ll-buttons" type="button" onClick={resetAnimation}>Reset worm</button>
          <button className="ll-buttons" type="button" onClick={addMonsterSegment}>Add segment</button>
        </div>
      </div>
    </div>
  )
}
export default LinkedListGame;