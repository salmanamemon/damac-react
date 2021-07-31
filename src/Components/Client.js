import React, { Component } from "react";
import './Client.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Client extends Component {
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };

    const clientItem = (imgUrl) => (
      <div><img src={imgUrl} alt="clients" /></div>
    );
    return (
        <section className="clients">
            <div className="container text-center">
                <h2 className="heading__title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</h2>
                <div className="clients-main row">
                    <div className="clients__inner">
                        <Slider {...settings}>
                          {clientItem('../assets/img/cisco.png')}
                          {clientItem('../assets/img/cisco.png')}
                          {clientItem('../assets/img/cisco.png')}
                          {clientItem('../assets/img/cisco.png')}
                          {clientItem('../assets/img/cisco.png')}
                          {clientItem('../assets/img/cisco.png')}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}