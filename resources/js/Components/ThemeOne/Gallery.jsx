import React from "react";
export default function Gallery() {
    // Gallery items data
    const galleryItems = [
        {
            id: 1,
            sticker: { type: "discount", text: "-30%" },
            image: "/assets/frontend/theme-one/images/gallery-1.png",
            title: "Drone Model S",
            regularPrice: "$458.00",
            discountPrice: "$415.00",
        },
        {
            id: 2,
            sticker: { type: "new", text: "New" },
            image: "/assets/frontend/theme-one/images/gallery-2.png",
            title: "Drone Model Cyber",
            regularPrice: "$543.00",
            discountPrice: "$512.00",
        },
        {
            id: 3,
            sticker: { type: "discount", text: "-30%" },
            image: "/assets/frontend/theme-one/images/gallery-3.png",
            title: "Drone Model Hexa",
            regularPrice: "$965.00",
            discountPrice: "$635.00",
        },
        {
            id: 4,
            sticker: { type: "new", text: "New" },
            image: "/assets/frontend/theme-one/images/gallery-4.png",
            title: "Drone Model Pure",
            regularPrice: "$396.00",
            discountPrice: "$288.00",
        },
        {
            id: 5,
            sticker: { type: "discount", text: "-30%" },
            image: "/assets/frontend/theme-one/images/gallery-5.png",
            title: "Drone Model Dream",
            regularPrice: "$756.00",
            discountPrice: "$658.00",
        },
        {
            id: 6,
            sticker: { type: "new", text: "New" },
            image: "/assets/frontend/theme-one/images/gallery-3.png",
            title: "Drone Exclusive Model Z",
            regularPrice: "$458.00",
            discountPrice: "$366.00",
        },
    ];

    return (
        <section id="gallery" className="gallery_area pt-95">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="section_title text-center pb-55">
                            <h4 className="title">Drone Gallery</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr diam nonumy eirmod tempor
                                invidunt labore dolore magna aliquyam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row gallery_active">
                    {galleryItems.map((item) => (
                        <div className="col-lg-3" key={item.id}>
                            <div className="single_gallery text-center">
                                {/* Sticker */}
                                <div className="gallery_sticker clearfix">
                                    <span className={item.sticker.type}>
                                        {item.sticker.text}
                                    </span>
                                </div>

                                {/* Image */}
                                <div className="gallery_image">
                                    <img src={item.image} alt={item.title} />
                                </div>

                                {/* Content */}
                                <div className="gallery_content">
                                    <ul>
                                        <li>
                                            <i className="lni lni-star-filled"></i>
                                        </li>
                                        <li>
                                            <i className="lni lni-star-filled"></i>
                                        </li>
                                        <li>
                                            <i className="lni lni-star-filled"></i>
                                        </li>
                                        <li>
                                            <i className="lni lni-star-filled"></i>
                                        </li>
                                        <li>
                                            <i className="lni lni-star"></i>
                                        </li>
                                    </ul>
                                    <h4 className="gallery_title">
                                        <a href="#">{item.title}</a>
                                    </h4>
                                    <div className="price">
                                        <span className="regular_price">
                                            {item.regularPrice}
                                        </span>
                                        <span className="discount_price">
                                            {item.discountPrice}
                                        </span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="gallery_btn">
                                    <a className="main-btn" href="#">
                                        ADD TO CART
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
