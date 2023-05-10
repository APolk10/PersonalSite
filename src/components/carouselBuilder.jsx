import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

// rewrite to map over any given data that includes src, alt, id etc
function PortfolioCarousel({ imageURLs }) {
  return (
    <div id="mvpCarousel">
      <Carousel fade id="carousel">
        {imageURLs.map((url, index) => {
          return (
            <Carousel.Item key={index} id={index}>
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

PortfolioCarousel.propTypes = {
  imageURLs: PropTypes.array
}

export default PortfolioCarousel;