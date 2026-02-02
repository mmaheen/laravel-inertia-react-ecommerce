import React from "react";
import Header from "../Components/ThemeOne/Header";
import ProductFeature from "../Components/ThemeOne/ProductFeature";
import Overview from "./../Components/ThemeOne/Overview";
import BodyFeature from "../Components/ThemeOne/BodyFeature";
import Tutorial from "../Components/ThemeOne/Tutorial";
import Gallery from "../Components/ThemeOne/Gallery";
import Contact from "../Components/ThemeOne/Contact";
import Footer from "../Components/ThemeOne/Footer";

export default function ThemeOne() {
    return (
        <>
            <Header />
            <BodyFeature />
            <Overview />
            <ProductFeature />
            <Tutorial />
            <Gallery />
            <Contact />
            <Footer />
        </>
    );
}
