import React from 'react';
import "./Header.css";

const Header = () => {
    const hide = () => {
        const x = document.getElementById("nav");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="header__inner">
                        <div className="header__brand">
                            <a href="/">
                                <img src="/assets/img/LOGO.png" alt="" />
                            </a>
                        </div>
                        <div className="header__nav">
                            <span style={{cursor: "pointer"}} onClick={hide} className="icon icon-menu"></span>
                            <nav id="nav">
                                <ul>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Geographic Presence</a></li>
                                    <li><a href="/">Lorem ipsum</a></li>
                                    <li><a href="/">Lorem ipsum</a></li>
                                    <li><a href="/">Contact us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
