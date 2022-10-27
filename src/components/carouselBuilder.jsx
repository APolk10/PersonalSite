import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// rewrite to map over any given data that includes src, alt, id etc
function PortfolioCarousel({ imageURLs }) {
  return (
    <div id="mvpCarousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[0]}
            alt="First slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Main Page</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[1]}
            alt="Second slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Hovering Over Countries</h3>
            <p>From here the</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[2]}
            alt="Second slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Clicking A Country</h3>
            <p>From here the</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[3]}
            alt="Second slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Multiple Slides</h3>
            <p>From here the</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[4]}
            alt="Second slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Clicking The "Listen Here" Button</h3>
            <p>From here the</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PortfolioCarousel;