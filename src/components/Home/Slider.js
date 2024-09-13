import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider2.png'
import slider3 from '../../images/slider3.png'
function HomeSlider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='mb-4 my-dir' >
      <Carousel.Item >
        <div className='d-flex sh justify-content-center align-items-center'>
        <img
          className="d-block w-25 h-100"
          src={slider1}
          alt="First slide"
        />
        <div className='text-center'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='d-flex sh justify-content-center align-items-center'>
        <img
          className="d-block w-25 h-100"
          src={slider2}
          alt="First slide"
        />
        <div className='text-center'>
          <h3>thecond slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='d-flex sh justify-content-center align-items-center'>
        <img
          className="d-block w-25 h-100"
          src={slider3}
          alt="First slide"
        />
        <div className='text-center'>
          <h3>third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider