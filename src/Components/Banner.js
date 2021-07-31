import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <section className="banner" style={{backgroundImage: "url('../assets/img/bg.jpg')"}}>
            <div className="container">
                <div className="banner_inner text-center">
                    <img src='../assets/img/Rectangle673.png' alt="Banner Img" />
                    <h1>Lorem Ipsum 
                        <span>A Global Focus</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Banner
