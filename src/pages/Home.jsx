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

            {/* hero-banner start */}

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
                <h1 className="uh-watermark">
                    U-Tech Hydraulic
                </h1>

                <div className="container">
                    <div className="uh-hero-inner">

                        {/* Left Content */}
                        <div className="uh-hero-left">


                            <span className="uh-top-text">
                                Trusted Hydraulic Solutions Since 2014
                            </span>

                            <h2 className="uh-main-heading">
                                U-Tech Hydraulic
                                <br />
                                Manufacturer, Supplier
                                <br />
                                & Trader of Hydraulic Machinery
                            </h2>


                            <p className="uh-description">
                                U-Tech Hydraulic is a manufacturer, supplier
                                and trader of industrial hydraulic machinery
                                and components. We offer hydraulic power packs,
                                scissor lift cylinders, hydraulic press machines
                                and baling presses, built with quality materials
                                to support reliable industrial performance.
                            </p>

                            {/* Hero Button */}
                            <div className="uh-hero-buttons">

                                <a href="/" className="main-btn">
                                    <span>Explore Products</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                            </div>

                        </div>

                        {/* Right Info Card */}
                        <div className="uh-hero-right">

                            <div className="uh-info-card">

                                <h3>
                                    Engineered for Industrial Performance
                                </h3>

                                <div className="uh-info-line"></div>

                                <p>
                                    With a focus on quality control,
                                    research and development, and modern
                                    manufacturing practices, we provide
                                    hydraulic products in different sizes,
                                    models and specifications to meet
                                    diverse industrial requirements.
                                </p>

                                {/* Company Highlights */}
                                <div className="uh-stats-box">

                                    <div className="uh-stat-item">

                                        <h4>2014</h4>

                                        <p>
                                            Year of
                                            <br />
                                            Establishment
                                        </p>

                                    </div>

                                    <div className="uh-stat-divider"></div>

                                    <div className="uh-stat-item">

                                        <h4>3-in-1</h4>

                                        <p>
                                            Manufacturer,
                                            <br />
                                            Supplier & Trader
                                        </p>

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
                                        src="/img/about-1.jpg"
                                        alt="U-Tech Hydraulic manufacturing facility"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Establishment Badge */}
                                <div className="uh-about-experience">
                                    <h3>2014</h3>
                                    <p>
                                        Established
                                        
                                        Since 2014
                                    </p>
                                </div>

                                {/* Overlapping Bottom Image */}
                                <div className="uh-about-small-image">
                                    <img
                                        src="/img/about-2.jpg"
                                        alt="U-Tech Hydraulic machinery manufacturing process"
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
                                    01 &nbsp; ABOUT U-TECH HYDRAULIC
                                </span>

                                {/* Reusable Heading */}
                                <h2 className="heading">
                                    U-Tech Hydraulic
                                    <br />
                                    Engineering Quality,
                                    <br />
                                    Delivering Reliability.
                                </h2>

                                <p className="uh-about-description">
                                    Established in 2014, U-Tech Hydraulic is a manufacturer,
                                    supplier, and trader of hydraulic machinery and industrial
                                    components. Our product range includes Industrial Hydraulic
                                    Power Packs, Scissor Lift Cylinders, Hydraulic Power Press
                                    Machines, Hydraulic Baling Presses, and other components.
                                    We use high-grade raw materials and modern manufacturing
                                    techniques to deliver reliable products in different sizes,
                                    models, and specifications.
                                </p>

                                <p className="uh-about-description">
                                    Our well-equipped infrastructure supports manufacturing,
                                    quality checking, warehousing, and packaging. With a strong
                                    focus on research and development, we continuously improve
                                    our products and production methods. Our skilled team and
                                    quality control practices help us provide durable and
                                    dependable hydraulic solutions for various industries.
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

            {/* ================= FEATURED PRODUCTS ================= */}
            <section className="home-products-section py-5" id="product-sec">

                <div className="container">

                    {/* Section Heading */}
                    <div className="row align-items-end g-3 mb-4">

                        <div className="col-lg-8">

                            <div className="section-heading mb-0">

                                <span className="sub-heading">
                                    02 &nbsp; OUR PRODUCT RANGE
                                </span>

                                <h2 className="heading">
                                    Quality Hydraulic Machinery
                                    <br />
                                    by U-Tech Hydraulic
                                </h2>

                            </div>

                            <p className="home-products-intro mt-3 mb-0">
                                Explore our range of Industrial Hydraulic Power Packs,
                                Scissor Lift Cylinders, Hydraulic Power Press Machines,
                                Hydraulic Baling Presses, and Hydraulic Components.
                                Available in different sizes, models, and specifications
                                to meet diverse industrial requirements.
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
                            <span>Explore All Products</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                    </div>

                </div>

            </section>
            {/* ================= PRODUCT SECTION END ================= */}

            {/* ================= PRODUCT SECTION END ================= */}


        </>
    )
}

export default Home
