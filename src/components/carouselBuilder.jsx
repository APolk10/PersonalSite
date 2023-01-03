import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// rewrite to map over any given data that includes src, alt, id etc
function PortfolioCarousel({ imageURLs }) {
  return (
    <div id="mvpCarousel">
      <Carousel fade id="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[0]}
            alt="First slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Map Highlighting USA</h3>
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
            <h3>Ivestigating USA</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[2]}
            alt="Third slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Map highlighting Australia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[3]}
            alt="Fourth slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Investigating Australia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[4]}
            alt="Fifth slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Map highlighting China</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageURLs[5]}
            alt="Sixth slide"
            id="mvpImg"
          />
          <Carousel.Caption>
            <h3>Investigating China</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PortfolioCarousel;