import React from "react";
export default function Features() {
    return (
        <section id="features" className="features_area pt-95">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="section_title text-center pb-25">
                            <h4 className="title">Drone Features</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr diam nonumy eirmod tempor
                                invidunt labore dolore magna aliquyam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_features mt-30">
                            <i className="lni lni-camera"></i>
                            <h5 className="title">Camera</h5>
                            <p>20 MP Resolution, 4k at 60 FPS</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single_features mt-30">
                            <i className="lni lni-bolt"></i>
                            <h5 className="title">Battery Life</h5>
                            <p>Up to 90 Minutes Flight Time</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single_features mt-30">
                            <i className="lni lni-game"></i>
                            <h5 className="title">Control</h5>
                            <p>2 KM of Smooth Range</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single_features mt-30">
                            <i className="lni lni-rocket"></i>
                            <h5 className="title">Speed</h5>
                            <p>Fly up to 30 MPH</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
