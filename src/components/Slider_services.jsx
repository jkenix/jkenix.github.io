import React, { Component } from 'react'
import Slider from "react-slick";

export default class Slider_services extends Component {
    render() {
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              swipeToSlide: true,
              infinite: true,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
        ],
      };
      return (
        <Slider {...settings}>
          <div className="process-dev">
            <div className="ti-pic-block img__resp-block" aria-hidden="true">
           
            </div>
          </div>
        
        </Slider>
      );
    }
  }