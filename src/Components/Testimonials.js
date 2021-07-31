import React, { Component } from "react";
import './Testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Testimonials extends Component {
  render() {
    const testimonials = [
        { id: 1, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', person: 'Fredrik, CEO, Versace' },
        { id: 2, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', person: 'Fredrik, CEO, Versace' },
        { id: 3, text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', person: 'Fredrik, CEO, Versace' },
    ]

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <section className="testimonials ">
            <div className="container text-center">
                <span className="icon icon-Path-5437"></span>
                <div className="testimonials__slider">
                    <Slider {...settings}>
                        {
                            testimonials.map(function(testimonial){
                            // returns Nathan, then John, then Jane
                                return (
                                    <blockquote key={testimonial.id} >
                                       {testimonial.text}
                                        <cite>{testimonial.text}</cite>   
                                    </blockquote>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className="testimonails__bottom">
                    <p>How can we add value to your business?</p>
                    <a className="c-btn" href="/">Let's Talk</a>
                </div>
            </div>
        </section>
    );
  }
}