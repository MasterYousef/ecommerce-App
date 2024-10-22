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
  const bgColors = ['#FFC300', '#DAF7A6', '#FF5733'];
  const slideContent = [
    {
      title: "New Arrivals",
      description: "Check out our latest collection of trendy products!"
    },
    {
      title: "Special Offers",
      description: "Don't miss out on our amazing discounts and deals!"
    },
    {
      title: "Customer Favorites",
      description: "Discover our most popular and highly-rated items!"
    }
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='mb-4 my-dir' style={{ height: 'auto', minHeight: '50vh' }}>
      {[slider1, slider2, slider3].map((slider, idx) => (
        <Carousel.Item key={idx} style={{ backgroundColor: bgColors[idx], minHeight: '50vh' }}>
          <div className='d-flex justify-content-center align-items-center h-100 py-4'>
            <div className='d-flex flex-column align-items-center'>
              <img
                className="d-block"
                src={slider}
                alt={`Slide ${idx + 1}`}
                style={{ width: 'auto', maxHeight: '30vh', objectFit: 'contain' }}
              />
              <div className='text-center mt-3'>
                <h3>{slideContent[idx].title}</h3>
                <p>{slideContent[idx].description}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeSlider