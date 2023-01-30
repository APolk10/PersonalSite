import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// rewrite to map over any given data that includes src, alt, id etc
function PortfolioCarousel({ imageURLs }) {
  return (
    <div id="mvpCarousel">
      <Carousel fade id="carousel">
        {imageURLs.map((url, index) => {
          return (
            <Carousel.Item id={index}>
              <img
                id={index}
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