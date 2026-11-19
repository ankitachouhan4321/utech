import React from 'react'

import { Link } from "react-router-dom";
import MovingStrips from '../components/MovingStrips'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import UTechFAQ from '../components/UTechFAQ'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";



const testimonials = [
    {
        id: 1,
        name: "Customer Name",
        designation: "Industrial Equipment Buyer",
        rating: 5,
        review:
            "The hydraulic power pack met our machinery requirements and provided dependable performance. We appreciated the clear communication and support throughout the purchasing process."
    },
    {
        id: 2,
        name: "Customer Name",
        designation: "Manufacturing Industry",
        rating: 5,
        review:
            "We were looking for a reliable hydraulic solution for our production operations. The team helped us understand the product specifications and select suitable equipment."
    },
    {
        id: 3,
        name: "Customer Name",
        designation: "Engineering Company",
        rating: 5,
        review:
            "Our experience with U-Tech Hydraulic was positive. The team understood our technical requirements and guided us in choosing the right hydraulic equipment for our application."
    },
    {
        id: 4,
        name: "Customer Name",
        designation: "Material Handling Industry",
        rating: 5,
        review:
            "We needed hydraulic equipment suitable for our material handling operations. The product quality and the team's attention to our requirements made the overall experience satisfactory."
    },
    {
        id: 5,
        name: "Customer Name",
        designation: "Recycling Industry",
        rating: 5,
        review:
            "The hydraulic baling equipment suited our material compression needs. We appreciated the practical guidance and product information provided during the selection process."
    },
    {
        id: 6,
        name: "Customer Name",
        designation: "Industrial Machinery Supplier",
        rating: 5,
        review:
            "U-Tech Hydraulic provided helpful technical information and maintained clear communication about our equipment requirements. We appreciated their professional approach."
    }
];


export const featuredProducts = [
    {
        id: 1,
        name: "Mini Hydraulic Power Pack",
        slug: "mini-hydraulic-power-pack",
        category: "Hydraulic Power Packs",
        image: "/img/prod-1.png",
        description:
            "Compact mini hydraulic power pack designed to deliver reliable hydraulic power, smooth operation, and efficient performance for industrial machinery and equipment.",
    },
    {
        id: 2,
        name: "Electrical Mini Hydraulic Power Pack",
        slug: "electrical-mini-hydraulic-power-pack",
        category: "Hydraulic Power Packs",
        image: "/img/prod-2.png",
        description:
            "Electric motor-driven mini hydraulic power pack designed to provide controlled hydraulic pressure and dependable operation for various industrial applications.",
    },
    {
        id: 3,
        name: "Scissor Lift Cylinder",
        slug: "scissor-lift-cylinder",
        category: "Hydraulic Cylinders",
        image: "/img/prod-3.png",
        description:
            "Durable scissor lift hydraulic cylinder designed for controlled lifting, stable movement, and reliable performance in hydraulic scissor lift systems.",
    },
    {
        id: 4,
        name: "Industrial Hydraulic Cylinder",
        slug: "industrial-hydraulic-cylinder",
        category: "Hydraulic Cylinders",
        image: "/img/prod-4.png",
        description:
            "Heavy-duty industrial hydraulic cylinder designed to provide controlled linear movement, reliable force, and efficient operation in industrial machinery.",
    },
    {
        id: 5,
        name: "Hand Operated Hydraulic Press Machine",
        slug: "hand-operated-hydraulic-press-machine",
        category: "Hydraulic Press Machines",
        image: "/img/prod-5.png",
        description:
            "Hand operated hydraulic press machine designed for controlled pressing, straightening, and assembly operations in workshops and industrial applications.",
    },
    {
        id: 6,
        name: "VERTICAL INJECTION MOULDING",
        slug: "vertical-injection-moulding",
        category: "Injection Moulding Machines",
        image: "/img/prod-6.png",
        description:
            "Vertical injection moulding machine designed for precision moulding, controlled material injection, and efficient production of plastic components.",
    },
    {
        id: 7,
        name: "Industrial Hydraulic Deep Drawing Machine",
        slug: "industrial-hydraulic-deep-drawing-machine",
        category: "Hydraulic Press Machines",
        image: "/img/prod-7.png",
        description:
            "Industrial hydraulic deep drawing machine designed for sheet metal forming, deep drawing operations, and accurate shaping of metal components.",
    },
    {
        id: 8,
        name: "Hydraulic Paper Bailing Press",
        slug: "hydraulic-paper-bailing-press",
        category: "Hydraulic Baling Press Machines",
        image: "/img/prod-8.png",
        description:
            "Hydraulic paper baling press designed to compress waste paper, cardboard, and recyclable materials into compact bales for easier storage and handling.",
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

            {/* industries start */}
            <section className="uh-industries-section">
                <div className="container">

                    <div className="uh-industries-heading">
                        <h2 className='heading'>Industries We Serve</h2>
                        <p>
                            Reliable hydraulic solutions designed for different
                            industrial applications and operational needs.
                        </p>
                    </div>

                    <div className="uh-industries-grid">

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-industry"></i>
                            </div>
                            <h3>Manufacturing</h3>
                            <p>
                                Hydraulic power packs and presses for efficient
                                production and industrial machinery operations.
                            </p>
                        </div>

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-car"></i>
                            </div>
                            <h3>Automotive</h3>
                            <p>
                                Hydraulic solutions for component pressing,
                                assembly processes, and automotive production.
                            </p>
                        </div>

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-helmet-safety"></i>
                            </div>
                            <h3>Construction</h3>
                            <p>
                                Durable hydraulic cylinders for lifting,
                                movement, and heavy-duty equipment applications.
                            </p>
                        </div>

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-dolly"></i>
                            </div>
                            <h3>Material Handling</h3>
                            <p>
                                Hydraulic cylinders and power units for smooth
                                lifting, positioning, and load-handling operations.
                            </p>
                        </div>

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-gears"></i>
                            </div>
                            <h3>Steel & Metal</h3>
                            <p>
                                Hydraulic presses and cylinders for metal
                                forming, pressing, and fabrication applications.
                            </p>
                        </div>

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-recycle"></i>
                            </div>
                            <h3>Recycling & Scrap</h3>
                            <p>
                                Hydraulic baling equipment for compressing
                                recyclable materials and managing industrial waste.
                            </p>
                        </div>

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-box-open"></i>
                            </div>
                            <h3>Paper & Packaging</h3>
                            <p>
                                Hydraulic paper baling presses for compacting
                                paper waste and improving material storage.
                            </p>
                        </div>

                        <div className="uh-industry-item">
                            <div className="uh-industry-icon">
                                <i className="fa-solid fa-bottle-water"></i>
                            </div>
                            <h3>Plastic & PET</h3>
                            <p>
                                Hydraulic baling machines for compressing PET
                                bottles and plastic recyclable materials.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* industries end */}

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
                                        src="/img/about-2.png"
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


            {/* why-choose start */}

            <section className="uh-why-choose-section">
                <div className="container">
                    <div className="uh-why-choose-wrap">

                        <div className="uh-why-choose-left">
                            <div className="uh-section-tag">
                                <span className="uh-dot"></span>
                                <span className="uh-section-number">03</span>
                                <span className="uh-section-text">WHY CHOOSE US</span>
                            </div>

                            <h2>
                                Why Industries
                                
                                Choose U-Tech
                               
                                Hydraulic?
                            </h2>

                            <p>
                                U-Tech Hydraulic provides reliable hydraulic equipment
                                and practical solutions for a wide range of industrial
                                applications. We focus on precision manufacturing,
                                consistent quality, and customer satisfaction to help
                                businesses achieve efficient and dependable operations.
                            </p>
                        </div>

                        <div className="uh-why-choose-right">

                            <div className="uh-why-card">
                                <span>01</span>
                                <p>
                                    <strong>In-House Manufacturing</strong>
                                    We manufacture hydraulic machinery with careful
                                    attention to precision, material quality, and
                                    finishing for dependable industrial performance.
                                </p>
                            </div>

                            <div className="uh-why-card">
                                <span>02</span>
                                <p>
                                    <strong>Custom Hydraulic Solutions: </strong>
                                    We provide hydraulic equipment and solutions suited
                                    to different machine specifications, industrial
                                    applications, and operational requirements.
                                </p>
                            </div>

                            <div className="uh-why-card">
                                <span>03</span>
                                <p>
                                    <strong>Quality-Focused Production: </strong>
                                    Our manufacturing process focuses on product
                                    quality, structural strength, and reliable
                                    performance for industrial applications.
                                </p>
                            </div>

                            <div className="uh-why-card">
                                <span>04</span>
                                <p>
                                    <strong>Technical Knowledge & Experience: </strong>
                                    Our team understands hydraulic systems and industrial
                                    machinery requirements, helping customers select
                                    suitable equipment for their operations.
                                </p>
                            </div>

                            <div className="uh-why-card">
                                <span>05</span>
                                <p>
                                    <strong>Efficient Order Management: </strong>
                                    We focus on organized production planning, clear
                                    communication, and efficient order processing
                                    to support customers' project schedules.
                                </p>
                            </div>

                            <div className="uh-why-card">
                                <span>06</span>
                                <p>
                                    <strong>Customer-Focused Support: </strong>
                                    We build lasting business relationships through
                                    responsive communication, product guidance,
                                    and dependable customer assistance.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* why-choose end */}


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

                        <Link to="/" className="main-btn">
                            <span>Explore All Products</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                    </div>

                </div>

            </section>

            {/* product-sec end */}


            <section className="uh-manufacturing-section">
                <div className="container">

                    {/* SECTION HEADER */}
                    <div className="uh-manufacturing-header">

                        <div className="uh-section-tag">
                            <span className="uh-dot"></span>
                            <span className="uh-section-number">04</span>
                            <span className="uh-section-text">
                                MANUFACTURING
                            </span>
                        </div>

                        <h2>
                            Advanced Manufacturing for Reliable
                            Hydraulic Solutions
                        </h2>

                    </div>

                    {/* MANUFACTURING CONTENT */}
                    <div className="uh-manufacturing-content">

                        {/* LEFT CONTENT */}
                        <div className="uh-manufacturing-left">
                            <p>
                                At U-Tech Hydraulic, we have a dedicated
                                manufacturing setup for a wide range of
                                hydraulic equipment, including hydraulic
                                power packs, cylinders, presses, and baling
                                machines. Our facility is equipped with
                                modern machinery and a skilled team that
                                follows a systematic production process—from
                                design and fabrication to testing and final
                                assembly. We use quality materials and strict
                                process control to ensure durable, efficient,
                                and reliable hydraulic solutions for different
                                industrial applications.
                            </p>
                        </div>

                        {/* RIGHT FEATURES */}
                        <div className="uh-manufacturing-features">

                            <div className="uh-manufacturing-feature">
                                <div className="uh-feature-heading">
                                    <i className="fa-solid fa-gear"></i>
                                    <h3>Modern Infrastructure</h3>
                                </div>
                                <p>
                                    Well-equipped facility for precision
                                    and efficient production.
                                </p>
                            </div>

                            <div className="uh-manufacturing-feature">
                                <div className="uh-feature-heading">
                                    <i className="fa-solid fa-layer-group"></i>
                                    <h3>Quality Materials</h3>
                                </div>
                                <p>
                                    High-grade materials selected for
                                    durable and dependable performance.
                                </p>
                            </div>

                            <div className="uh-manufacturing-feature">
                                <div className="uh-feature-heading">
                                    <i className="fa-solid fa-users"></i>
                                    <h3>Skilled Team</h3>
                                </div>
                                <p>
                                    Experienced professionals with
                                    practical hydraulic knowledge.
                                </p>
                            </div>

                            <div className="uh-manufacturing-feature">
                                <div className="uh-feature-heading">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <h3>Process Control</h3>
                                </div>
                                <p>
                                    Systematic checks throughout production
                                    to maintain consistent quality.
                                </p>
                            </div>

                            <div className="uh-manufacturing-feature">
                                <div className="uh-feature-heading">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                    <h3>Testing & Inspection</h3>
                                </div>
                                <p>
                                    Careful inspection of equipment
                                    for performance and reliability.
                                </p>
                            </div>

                            <div className="uh-manufacturing-feature">
                                <div className="uh-feature-heading">
                                    <i className="fa-solid fa-cube"></i>
                                    <h3>Ready for Industrial Use</h3>
                                </div>
                                <p>
                                    Hydraulic equipment built for
                                    demanding industrial applications.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* faq start */}
            <UTechFAQ/>
            {/* faq end */}

            {/* ================= TESTIMONIAL SECTION ================= */}
            <section className="home-testimonial-section py-lg-5 py-4">
                <div className="container py-lg-4">

                    {/* Global Heading */}
                    <div className="text-center mb-5">
                        <span className="sub-heading">
                            Customer Feedback
                        </span>

                        <h2 className="heading">
                            What Our Customers Say
                        </h2>

                        <p className="home-testimonial-intro mx-auto mt-3 mb-0">
                            We value the trust of our customers and focus on
                            understanding their welding and industrial
                            safety product requirements.
                        </p>
                    </div>

                    {/* Testimonial Swiper */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={24}
                        speed={700}
                        grabCursor={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".home-testimonial-pagination",
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        className="home-testimonial-slider"
                    >

                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>

                                <div className="home-testimonial-card h-100">

                                    {/* Rating */}
                                    <div className="home-testimonial-rating mb-3">
                                        {Array.from({ length: item.rating }).map((_, index) => (
                                            <i
                                                key={index}
                                                className="fa-solid fa-star"
                                            ></i>
                                        ))}
                                    </div>

                                    {/* Review */}
                                    <p className="home-testimonial-review">
                                        "{item.review}"
                                    </p>

                                    {/* Customer Information */}
                                    <div className="home-testimonial-user d-flex align-items-center gap-3 mt-auto">

                                        <div className="home-testimonial-avatar">
                                            <i className="fa-regular fa-user"></i>
                                        </div>

                                        <div>
                                            <h5 className="mb-1">
                                                {item.name}
                                            </h5>

                                            <span>
                                                {item.designation}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                    {/* Pagination */}
                    <div className="home-testimonial-pagination"></div>

                </div>
            </section>
            {/* ================= TESTIMONIAL SECTION END ================= */}



        </>

    )
}

export default Home
