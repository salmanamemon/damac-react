import React from 'react';
import './Customer.css';

const Customer = () => {

    const customers = [
        { id: 0, imgUrl: '../assets/img/c1.jpg', name: 'North America' },
        { id: 1, imgUrl: '../assets/img/c2.jpg', name: 'Asia' },
        { id: 2, imgUrl: '../assets/img/c3.jpg', name: 'Europe' },
        { id: 3, imgUrl: '../assets/img/c4.jpg', name: 'Middle East and North Africa' },
    ]

    return (
        <section className="customer">
            <div className="users">
                
            </div>
        <div className="container text-center">
            <h2 className="heading__title">
                Closer To The Customer
            </h2>
            <p className="sub__title">Our global presence</p>
            <div className="customer__inner row">
                {
                    customers.map(function(customer){
                    // returns Nathan, then John, then Jane
                        return (
                            <div key={customer.id} className="customer__box__wrap col-md-3">
                                <div className="customer__box" style={{backgroundImage: `url('${customer.imgUrl}')`}}>
                                    <a href="/">{customer.name}</a>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </section>
    )
}

export default Customer
