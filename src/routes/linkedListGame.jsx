import React from 'react';
import { useState, setState, useEffect } from 'react';

// define lastInterval to stagger release
var currentTimeToWait = 0;
var head = {color: "purple", data: 0, next: null};

// build a linked list constructor
class MonsterSegment {
  constructor() {
    this.data = currentTimeToWait;
    this.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.next = null;
  }
}

// allow for adding segments to monster
function addSegment() {
  currentTimeToWait += 1;
  let newSegment = new MonsterSegment();
  newSegment.next = head;
  head = newSegment;
  return newSegment;
}

// React Code
function LinkedListGame() {

  const [segments, setSegments] = useState({});
  const [segmentContainer, setSegmentContainer] = useState([]);

  function addMonsterSegment() {
    const newSegment = addSegment();
    setSegments(newSegment);
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
  }

  function monsterIteration() {
    var copyOfSegments = segments;
    var collectionOfSegmentData = [];

    if (copyOfSegments) {
      while (copyOfSegments.next) {
        collectionOfSegmentData.unshift(copyOfSegments)
        copyOfSegments = copyOfSegments.next;
      }
      // allows head of worm to be static color
      collectionOfSegmentData.unshift({color: "purple", data: 0, next: null})
    }
    return collectionOfSegmentData;
  }

  function resetAnimation() {
    // sets state to original version
    head = {color: "purple", data: 0, next: null};
    currentTimeToWait = 0;
    setSegments({});
    setSegmentContainer([]);
  }

  useEffect(() => {
    const segmentsToTrack = monsterIteration();
    setSegmentContainer(segmentsToTrack);
  }, [segments])

  return (
    <div>
      <div id='ll-title'>Linked List Monster!</div>
      <div>
        <p id='ll-description'>I created this as a visual aid for linked lists as I found many online representations less interesting to look at.</p>
        <p id='ll-description'>
          I got the core idea from a game I had played called Terraria. In this game there is a boss who resembles a segmented worm. When fighting this worm, each link can be attacked and broken individually, creating new and indpendent worms. One became two and so the subdivision would continue, until the boss was defeated.
        </p>
        <p id='ll-description'>Below is my representation using vanilla CSS, JavaScript and React.</p>
      </div>
      <div id="ll-container">
        <div id="ll-gamebox">
          <div>
            {segmentContainer.length > 0 ? segmentContainer.map(segment => {
              console.log('segmentColor', segment)
              return (
                <div key={`segmentPath-${segment.data}`} className={`segmentPath-${segment.data}`}>
                <div key={`segment-${segment.data}`} className={`segment-${segment.data}`} style={{'backgroundColor': segment.color}}></div>
              </div>
              )}
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