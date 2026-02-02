import React from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <section className="header_area">
            <div className="header_navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link href="/" className="navbar-brand">
                                    <img
                                        src="/assets/frontend/theme-one/images/logo.png"
                                        alt="Logo"
                                    />
                                </Link>

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div
                                    className="collapse navbar-collapse sub-menu-bar"
                                    id="navbarSupportedContent"
                                >
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a
                                                className="page-scroll"
                                                href="#home"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="page-scroll"
                                                href="#features"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="page-scroll"
                                                href="#about"
                                            >
                                                Overview
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="page-scroll"
                                                href="#video"
                                            >
                                                Tutorial
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="page-scroll"
                                                href="#gallery"
                                            >
                                                Gallery
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="page-scroll"
                                                href="#contact"
                                            >
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home" className="header_hero d-lg-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header_hero_content mt-45">
                                <h2 className="header_title">
                                    Represent Your <span>Product</span> In
                                    Better Way.
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos etaccusa diam.
                                </p>
                                <a href="#features" className="main-btn">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="header_shape bg_cover d-none d-lg-block"
                    style={{
                        backgroundImage:
                            "url('/assets/frontend/theme-one//images/header_shape.png')",
                    }}
                ></div>

                <div className="header_image d-flex align-items-center">
                    <div className="image">
                        <img
                            src="/assets/frontend/theme-one//images/header_image.png"
                            alt="header image"
                        />
                        <img
                            src="/assets/frontend/theme-one//images/dots.svg"
                            alt="dots"
                            className="dots"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
