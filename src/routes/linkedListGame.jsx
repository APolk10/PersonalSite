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
  currentTimeToWait += .25;
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
  const [animationOne, setAnimationOne] = useState("segmentY 1s alternate infinite ease-in-out");
  const [animationTwo, setAnimationTwo] = useState("segmentX 10s alternate infinite linear");

  var test;

  function onNewMonsterSegmentClick() {
    // create a new value for the node
    // instantiate new segment
    // invoke addSegment to attach
  }

  function addMonsterSegment() {
    const newSegment = addSegment("purple");
    setSegments(newSegment);
    // setAnimationOne("none");
    // setAnimationTwo("none");
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
        collectionOfSegmentData.push(copyOfSegments.data)
        copyOfSegments = copyOfSegments.next;
      }
    }
    return collectionOfSegmentData;
  }

  function resetAnimation() {
    // const stylesStringOne = "segmentX-2 10s alternate infinite linear";
    // const stylesStringTwo = "segmentY-2 2s alternate infinite ease-in-out";

    // setAnimationOne(stylesStringOne);

    // setAnimationTwo(stylesStringTwo);
  }

  useEffect(() => {
    const segmentsToTrack = monsterIteration();
    setSegmentContainer(segmentsToTrack);
    resetAnimation();
  }, [segments])

  return (
    <div>
      <div id="ll-gamebox">
        {/* This will be where all nodes will be rendered */}
        <div id="segmentPath" className="segmentPath" styles={{animation: animationOne}}>
          {segmentContainer.length > 0 ? segmentContainer.map(segment => <div key={`segment-${segment}`} className="segment" styles={{animation: animationTwo}}></div>) : <></>}
        </div>
      </div>
      <button type="button" onClick={addMonsterSegment}>Add segment</button>
    </div>
  )
}
export default LinkedListGame;