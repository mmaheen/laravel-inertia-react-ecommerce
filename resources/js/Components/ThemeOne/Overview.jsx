import React from "react";
export default function About() {
    return (
        <section id="about" className="about_area pt-95">
            {/* About Shape */}
            <div className="about_shape d-none d-lg-block">
                <img
                    src="/assets/frontend/theme-one/images/about_shape.svg"
                    alt="shape"
                />
            </div>

            {/* About Image */}
            <div className="about_image d-flex align-items-center justify-content-end">
                <div className="image">
                    <img
                        src="/assets/frontend/theme-one/images/about.png"
                        alt="about"
                    />
                </div>
            </div>

            {/* About Content */}
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-6">
                        <div className="about_content">
                            <div className="section_title pb-25">
                                <h4 className="title">Overview of Drone</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit
                                    amet. Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod.
                                </p>
                            </div>
                            <a href="#" className="main-btn">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
