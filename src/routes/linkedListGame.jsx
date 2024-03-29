import React from 'react';
import { useState, useEffect } from 'react';

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
  const [isPaused, setPause] = useState();

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

  function handleSegmentClick() {
    //  const clickedSegment = e.target.classList.value;
    pauseWorm();
  }

  function pauseWorm() {
    if (isPaused) {
      document.getAnimations().forEach((anim) => {
        anim.play();
      })
      setPause(false);
    } else {
      document.getAnimations().forEach((anim) => {
        anim.pause();
      })
      setPause(true);
    }
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
    <div className="outerContainer">
      <div className="pageContainer">
        <div className="pageTitle">Linked List Monster!</div>
        <div className="dataContainer">
          <div className="textHeader" id="specialHeaderStart">What is this?</div>
          <p className="subTextAlt">I created this as a visual aid for linked lists as I found many online representations less interesting to look at.</p>
          <p className="subTextAlt">The basic premise is that this animation is made using a linked list under the hood. Each segment is connected to the neighboring righthand segment. As you click new segments, new segments are inserted to the tail end of this &quot;monster&quot; and the monster gets longer as a result. I wanted to visualize a linked list and I think this simple animation does the trick rather well.</p>
          <p className="subTextAlt">
            I got the core idea from a game I had played called Terraria. In this game there is a boss named Eater of Worlds who resembles a segmented worm. When fighting this worm, each link can be attacked and broken individually, creating new and indpendent worms. One became two and so the subdivision would continue, until the boss was defeated.
          </p>
          <p className="subTextAlt">Below is my representation using vanilla CSS, JavaScript and React.</p>
          <div id="ll-container">
            <div id="ll-gamebox">
              <div>
                {segmentContainer.length > 0 ? segmentContainer.map(segment =>
                  <div key={`segmentPath-${segment.data}`} className={`segmentPath-${segment.data}`}>
                    <div key={`segment-${segment.data}`} className={`segment-${segment.data}`} style={{'backgroundColor': segment.color}} color={segment.color} data={segment.data}  onClick={handleSegmentClick}>
                  </div>
                  </div>
                ) : <></>}
              </div>
            </div >
            <p className="subTextAlt">(Best viewed on desktop or in landscape mode)</p>
            <div id="ll-buttonBox">
              <button className="ll-buttons" type="button" onClick={resetAnimation}>Reset worm</button>
              <button className="ll-buttons" type="button" onClick={addMonsterSegment}>Add segment</button>
            </div>
            <p className="subTextAlt">I did this by writing a linked list class and I wrote the functions for this page to iterate through the linked list as well as randomize all but the first color of the segments. Each segment, or node, contains the time to wait before rendering, the unique color associated with it, and a reference to the neighboring node that renders after it.</p>
            <p className="subTextAlt">The cap for segments is 10 and although this is not the fully fledged Terraria boss, it does interact with you a bit if you are brave enough to click a segment!</p>
          </div>
        </div>
        </div>
      </div>
  )
}
export default LinkedListGame;