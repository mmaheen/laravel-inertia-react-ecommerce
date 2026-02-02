import React from "react";
export default function ProductFeatures() {
    return (
        <section id="product_features" className="product_features_area pt-95">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="section_title text-center pb-25">
                            <h4 className="title">Body Features</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr diam nonumy eirmod tempor
                                invidunt labore dolore magna aliquyam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="product_image mt-30">
                            <img
                                src="/assets/frontend/theme-one/images/product_features.png"
                                alt="product features"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
