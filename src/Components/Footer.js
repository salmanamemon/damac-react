import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <a href="/">
                                    <img src="../assets/img/LOGO.png" alt="" />
                                </a>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <p>Subscribe to our exclusive offers</p>
                                    <form>
                                        <input type="" placeholder="Enter your email address" />
                                        <button type="sumit"><span className="icon-send"></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer-mid row">
                            <div className="col-md-3">
                                <h3 className="footer__title">About us</h3>
                                <ul>
                                    <li><a href="/">Our company</a></li>
                                    <li><a href="/">Leadership </a></li>
                                    <li><a href="/">Corporate Social Responsibility </a></li>
                                    <li><a href="/">Awards</a></li>
                                    <li><a href="/">History</a></li>
                                    <li><a href="/">Annual Report</a></li>
                                    <li><a href="/">Sustanaibility report</a></li>
                                    <li><a href="/">Careers</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer__title">Sectors</h3>
                                <ul>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet </a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet </a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet report</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer__title">Subsidiaries</h3>
                                <ul>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet </a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet </a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet report</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="/">Lorem ipsum dolor sit amet Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer__title">Investor Relations</h3>
                                <ul>
                                    <li><a href="/">Our company</a></li>
                                    <li><a href="/">Leadership </a></li>
                                </ul>
                                <h3 className="footer__title">News</h3>
                                <ul>
                                    <li><a href="/">Our company</a></li>
                                    <li><a href="/">Leadership </a></li>
                                </ul>
                                <h3 className="footer__title">Global Presence</h3>
                                <ul>
                                    <li><a href="/">Our company</a></li>
                                    <li><a href="/">Leadership </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-bottom row">
                        <div className="col-md-3 copyright">
                            &copy; 2021 Lorem ipsum dolor sit amet consectetur
                        </div>
                        <div className="col-md-6 nav">
                        <ul>
                            <li><a href="/">Legal</a></li>
                            <li><a href="/">Privacy policy</a></li>
                            <li><a href="/">Sustainability policy</a></li>
                            <li><a href="/">Cookie policy</a></li>
                            <li><a href="/">Sitemap</a></li>
                        </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="social">
                                <li><a target="_blank" href="/"><span className="icon-Group-5306"><span className="path1"></span><span className="path2"></span></span></a></li>
                                <li><a target="_blank" href="/"><span className="icon-Group-5305"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span></a></li>
                                <li><a target="_blank" href="/"><span className="icon-linkedin"><span className="path1"></span><span className="path2"></span></span></a></li>
                                <li><a target="_blank" href="/"><span className="icon-twitter"><span className="path1"></span><span className="path2"></span></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
