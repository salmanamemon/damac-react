import React from 'react';
import './Services.css';

const Services = () => {
    const serviceItem = (bgUrl, title, text) => (
        <div className="services__card" style={{backgroundImage: `url('${bgUrl}')`}}>
            <div className="services_card_inner">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );

    return (
    <section className="services">
        <div className="container">
            <h2 className="heading__title text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </h2>
            <p className="sub__title text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
            <div className="services__inner">
                {serviceItem('../assets/img/s1.jpg', 'Lorem ipsum', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sodales .')}
                {serviceItem('../assets/img/s2.jpg', 'Lorem ipsum', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sodales .')}
                {serviceItem('../assets/img/s3.jpg', 'Lorem ipsum', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sodales .')}
                {serviceItem('../assets/img/s4.jpg', 'Lorem ipsum', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sodales .')}

            </div>
        </div>
    </section>
    )
}

export default Services
