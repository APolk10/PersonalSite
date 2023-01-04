import React from 'react';
import { useState, setState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// rewrite to map over any given data that includes src, alt, id etc
function PortfolioCarousel({ imageURLs }) {
  return (
    <div id="mvpCarousel">
      <Carousel fade id="carousel">
        {imageURLs.map((url, index) => {
          return (
            <Carousel.Item id={url}>
              <img
                className="d-block w-100"
                src={url}
                alt="Slide"
              />
            </Carousel.Item>
          )}
        )}
      </Carousel>
    </div>
  )
}

export default PortfolioCarousel;