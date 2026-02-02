import React from "react";
export default function Footer() {
    return (
        <section id="footer" className="footer_area">
            <div className="footer_widget pt-50 pb-100">
                <div className="container">
                    <div className="row">
                        {/* Left column: About */}
                        <div className="col-lg-4">
                            <div className="footer_about mt-50">
                                <a href="#">
                                    <img
                                        src="/assets/frontend/theme-one/images/logo.png"
                                        alt="logo"
                                    />
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonum eirmod
                                    tempor invidunt ut labore et dolomagna vero
                                    eos etaccusa diam.
                                </p>
                                <ul className="social">
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-facebook-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-twitter-original"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-instagram-original"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-linkedin-original"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right column: Links */}
                        <div className="col-lg-8">
                            <div className="footer_link_wrapper d-flex flex-wrap">
                                <div className="footer_link mt-45">
                                    <h4 className="footer_title">
                                        Quick Links
                                    </h4>
                                    <ul className="link">
                                        <li>
                                            <a href="#">Terms of Service</a>
                                        </li>
                                        <li>
                                            <a href="#">Refund Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>
                                        <li>
                                            <a href="#">Branches</a>
                                        </li>
                                        <li>
                                            <a href="#">License</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="footer_link mt-45">
                                    <h4 className="footer_title">Why To Buy</h4>
                                    <ul className="link">
                                        <li>
                                            <a href="#">Direct</a>
                                        </li>
                                        <li>
                                            <a href="#">Amazon</a>
                                        </li>
                                        <li>
                                            <a href="#">Walmart</a>
                                        </li>
                                        <li>
                                            <a href="#">BestBuy</a>
                                        </li>
                                        <li>
                                            <a href="#">Etsy</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="footer_link mt-45">
                                    <h4 className="footer_title">Support</h4>
                                    <ul className="link">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Features</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorial</a>
                                        </li>
                                        <li>
                                            <a href="#">Gallery</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer_copyright">
                <div className="container">
                    <div className="copyright text-center">
                        <p>
                            Designed and Developed by{" "}
                            <a href="https://uideck.com/" rel="nofollow">
                                UIdeck
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
