import React from 'react';
import './News.css';

const News = () => {
    
    return (
        <section className="news">
        <div className="container">
            <h2 className="heading__title text-center">
                Latest News
            </h2>
            <p className="sub__title text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>

            <div className="news__inner row">
                <div className="news__box col-md-4">
                    <img src="../assets/img/blog1.jpg" alt="" />
                    <h3>Dolore magna aliqua</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos.
                        <span>
                            <i className="icon-time"></i>
                            2m ago
                        </span>
                    </p>
                    <a href='/' >Latest News <span className="icon-Group-5352"></span></a>
                </div>
                <div className="news__box col-md-4">
                    <img src="../assets/img/blog2.jpg" alt="" />
                    <h3>Dolore magna aliqua</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos.
                        <span>
                            <i className="icon-time"></i>
                            2m ago
                        </span>
                    </p>
                    <a  href='/'>Latest News <span className="icon-Group-5352"></span></a>
                </div>
                <div className="news__box col-md-4">
                    <img src="../assets/img/blog3.jpg" alt="" />
                    <h3>Dolore magna aliqua</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos.
                        <span>
                            <i className="icon-time"></i>
                            2m ago
                        </span>
                    </p>
                    <a  href='/'>Latest News <span className="icon-Group-5352"></span></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default News
