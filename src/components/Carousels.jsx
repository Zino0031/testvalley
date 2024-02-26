import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import React, { useEffect, useState } from 'react';

const Carousels = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetch('https://api.testvalley.kr/main-banner/all')
      .then(response => response.json())
      .then(data => {
        setBannerData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <Carousel
    centerMode={true}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={"desktop"}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
       {bannerData.map((banner, index) => (
          <div className="flex ml-5 gap-5" key={index}>
            <img className="" src={banner.pcImageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
    </Carousel>
  );
};

export default Carousels;
