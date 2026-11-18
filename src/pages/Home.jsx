import React from 'react'

import { Link } from "react-router-dom";
import MovingStrips from '../components/MovingStrips'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


export const featuredProducts = [
    {
        id: 1,
        name: "Hydraulic Power Pack",
        slug: "hydraulic-power-pack",
        category: "Hydraulic Equipment",
        image: "/img/prod-1.png",
        description:
            "Hydraulic power pack designed to provide reliable power and smooth operation for various industrial hydraulic systems.",
    },
    {
        id: 2,
        name: "Hydraulic Cylinder",
        slug: "hydraulic-cylinder",
        category: "Hydraulic Components",
        image: "/img/prod-1.png",
        description:
            "Durable hydraulic cylinders designed for controlled movement, lifting, pressing and industrial machinery applications.",
    },
    {
        id: 3,
        name: "Hydraulic Press Machine",
        slug: "hydraulic-press-machine",
        category: "Industrial Machinery",
        image: "/img/prod-1.png",
        description:
            "Heavy-duty hydraulic press machine suitable for pressing, forming, bending and other industrial manufacturing operations.",
    },
    {
        id: 4,
        name: "Hydraulic Jack",
        slug: "hydraulic-jack",
        category: "Hydraulic Lifting Equipment",
        image: "/img/prod-1.png",
        description:
            "Hydraulic jack designed for controlled lifting and supporting heavy loads in industrial maintenance applications.",
    },
    {
        id: 5,
        name: "Hydraulic Hose Assembly",
        slug: "hydraulic-hose-assembly",
        category: "Hydraulic Accessories",
        image: "/img/prod-1.png",
        description:
            "Flexible hydraulic hose assemblies designed for fluid transfer in hydraulic machinery and industrial equipment.",
    },
    {
        id: 6,
        name: "Hydraulic Control Valve",
        slug: "hydraulic-control-valve",
        category: "Hydraulic Components",
        image: "/img/prod-1.png",
        description:
            "Hydraulic control valves designed to regulate fluid flow, pressure and direction in industrial hydraulic systems.",
    },
    {
        id: 7,
        name: "Hydraulic Scissor Lift",
        slug: "hydraulic-scissor-lift",
        category: "Lifting Equipment",
        image: "/img/prod-1.png",
        description:
            "Hydraulic scissor lift designed for stable vertical lifting and efficient material handling in industrial facilities.",
    },
    {
        id: 8,
        name: "Hydraulic Pump",
        slug: "hydraulic-pump",
        category: "Hydraulic Equipment",
        image: "/img/prod-1.png",
        description:
            "Hydraulic pump designed to supply pressurized fluid for smooth and efficient operation of hydraulic machinery.",
    },
];


const Home = () => {
    return (
        <>
            <section className="uh-hero">
                {/* Background Video */}
                <video
                    className="uh-hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/img/hero.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="uh-hero-overlay"></div>

                {/* Watermark Text */}
                <h1 className="uh-watermark">U-Tech Hydraulic</h1>

                <div className="container">
                    <div className="uh-hero-inner">
                        {/* Left Content */}
                        <div className="uh-hero-left">
                            <span className="uh-top-text">
                                U-Tech Hydraulic Engineering. Since 1988.
                            </span>

                            <h2 className="uh-main-heading">
                                ISO-Certified Hydraulic
                                <br />
                                Machine Manufacturer in
                                <br />
                                Ahmedabad
                            </h2>

                            <p className="uh-description">
                                We design and manufacture rugged hydraulic systems built for
                                performance, precision, and long service life. With 35+ years of
                                engineering experience and an advanced in-house workshop, we
                                deliver trusted hydraulic solutions for industrial needs.
                            </p>

                            <div className="uh-hero-buttons">
                                <a href="/contact" className="main-btn">
                                    Book Consultation
                                </a>

                                {/* <a href="/about" className="uh-btn-arrow">
                                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                              </a> */}
                            </div>
                        </div>

                        {/* Right Info Card */}
                        <div className="uh-hero-right">
                            <div className="uh-info-card">
                                <h3>Precision Hydraulic Engineering</h3>
                                <div className="uh-info-line"></div>

                                <p>
                                    Choosing us means partnering with a company dedicated to
                                    quality, precision, reliability, and long-term industrial
                                    performance.
                                </p>

                                <div className="uh-stats-box">
                                    <div className="uh-stat-item">
                                        <h4>35+</h4>
                                        <p>Years of Hydraulic Expertise</p>
                                    </div>

                                    <div className="uh-stat-divider"></div>

                                    <div className="uh-stat-item">
                                        <h4>50+</h4>
                                        <p>Skilled Hydraulic Engineers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>

            {/* hero-banner end */}


            {/* about-sec start */}
            <section className="uh-about-section">

                <div className="container">
                    <div className="row align-items-center g-5">

                        {/* LEFT IMAGE SECTION */}
                        <div className="col-lg-6">

                            <div className="uh-about-image-wrap">

                                {/* Main Image */}
                                <div className="uh-about-main-image">
                                    <img
                                        src="/images/about/about-main.jpg"
                                        alt="U-Tech Hydraulic manufacturing facility"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Experience Badge */}
                                <div className="uh-about-experience">
                                    <h3>25+</h3>
                                    <p>
                                        Years of Industry
                                        <br />
                                        Experience
                                    </p>
                                </div>

                                {/* Overlapping Bottom Image */}
                                <div className="uh-about-small-image">
                                    <img
                                        src="/images/about/about-small.jpg"
                                        alt="Hydraulic machine manufacturing process"
                                        loading="lazy"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* RIGHT CONTENT SECTION */}
                        <div className="col-lg-6">

                            <div className="uh-about-content">

                                {/* Reusable Sub Heading */}
                                <span className="sub-heading">
                                    01 &nbsp; ABOUT THE WORKS
                                </span>

                                {/* Reusable Heading */}
                                <h2 className="heading">
                                    Engineering Strength.
                                    <br />
                                    Delivering Hydraulic
                                    <br />
                                    Excellence.
                                </h2>

                                <p className="uh-about-description">
                                    At U-Tech Hydraulic, we focus on providing
                                    reliable hydraulic machinery and engineering
                                    solutions for industrial applications. Our
                                    commitment to quality, precision, and
                                    performance helps businesses operate
                                    efficiently and confidently.
                                </p>

                                <p className="uh-about-description">
                                    We understand that every industry has
                                    different requirements. That's why we
                                    focus on practical engineering, durable
                                    construction, and dependable hydraulic
                                    solutions that support smooth operations
                                    and long-term productivity.
                                </p>

                                <p className="uh-about-description">
                                    From manufacturing to industrial
                                    applications, our goal is to deliver
                                    equipment that combines strength,
                                    efficiency, and reliable performance.
                                </p>

                                {/* Existing Global Button */}
                                <div className="uh-about-action">

                                    <Link to="/about" className="main-btn">
                                        <span>More About Us</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
            {/* about-sec end */}


            {/* movingStrips start */}
            <MovingStrips />
            {/* movingStrips end */}


            {/* ================= FEATURED PRODUCTS ================= */}
            <section className="home-products-section py-5" id="product-sec">

                <div className="container">

                    {/* Section Heading */}
                    <div className="row align-items-end g-3 mb-4">

                        <div className="col-lg-8">

                            <div className="section-heading mb-0">

                                <span className="sub-heading">
                                    02 &nbsp; OUR PRODUCTS
                                </span>

                                <h2 className="heading">
                                    Explore Our Hydraulic
                                    <br />
                                    Machinery & Equipment
                                </h2>

                            </div>

                            <p className="home-products-intro mt-3 mb-0">
                                Explore our range of hydraulic machinery and industrial
                                equipment designed for dependable performance,
                                durable construction, and efficient operations.
                            </p>

                        </div>

                        {/* Slider Navigation */}
                        <div className="col-lg-4">

                            <div className="d-flex gap-2 justify-content-lg-end">

                                <button
                                    type="button"
                                    className="home-products-prev"
                                    aria-label="Previous products"
                                >
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>

                                <button
                                    type="button"
                                    className="home-products-next"
                                    aria-label="Next products"
                                >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>

                        </div>

                    </div>

                    {/* Products Slider */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        speed={700}
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".home-products-prev",
                            nextEl: ".home-products-next",
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="home-products-slider"
                    >

                        {featuredProducts.map((product) => (

                            <SwiperSlide key={product.id}>

                                <article className="home-product-card h-100">

                                    {/* Product Image */}
                                    <div className="home-product-image">

                                        <Link to={`/products/${product.slug}`}>

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                            />

                                        </Link>

                                    </div>

                                    {/* Product Information */}
                                    <div className="home-product-content">

                                        <span className="home-product-category">
                                            {product.category}
                                        </span>

                                        <h3 className="home-product-name">

                                            <Link to={`/products/${product.slug}`}>
                                                {product.name}
                                            </Link>

                                        </h3>

                                        <p className="home-product-description">
                                            {product.description}
                                        </p>

                                        {/* Card Button */}
                                        <div className="home-product-actions">

                                            <Link
                                                to={`/products/${product.slug}`}
                                                className="main-btn home-product-view"
                                            >
                                                <span>View Details</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>

                                        </div>

                                    </div>

                                </article>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                    {/* View All Products */}
                    <div className="text-center mt-4">

                        <Link to="/products" className="main-btn">
                            <span>View All Products</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                    </div>

                </div>

            </section>
            {/* ================= PRODUCT SECTION END ================= */}


        </>
    )
}

export default Home
