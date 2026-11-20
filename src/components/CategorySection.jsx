
import React from "react";
import { Link } from "react-router-dom";

const categories = [
    {
        id: "01",
        title: "Hydraulic Power Packs",
        description: "Reliable hydraulic power solutions",
        image: "/images/categories/power-pack.webp",
        link: "/hydraulic-power-packs",
    },
    {
        id: "02",
        title: "Hydraulic Cylinders",
        description: "Built for powerful industrial movement",
        image: "/images/categories/hydraulic-cylinder.webp",
        link: "/hydraulic-cylinders",
    },
    {
        id: "03",
        title: "Hydraulic Power Presses",
        description: "Industrial pressing machinery",
        image: "/images/categories/power-press.webp",
        link: "/hydraulic-power-presses",
    },
    {
        id: "04",
        title: "Hydraulic Baling Presses",
        description: "Efficient material compression solutions",
        image: "/images/categories/baling-press.webp",
        link: "/hydraulic-baling-presses",
    },
    {
        id: "05",
        title: "Hydraulic Components",
        description: "Essential parts for hydraulic systems",
        image: "/images/categories/components.webp",
        link: "/hydraulic-components",
    },
];

const CategorySection = () => {
    return (
        <section className="uh-category-section py-5">
            <div className="container py-lg-4">

                {/* SECTION HEADING */}
                <div className="uh-category-header text-center">
                    <span className="sub-heading">
                        02 &nbsp; OUR PRODUCT CATEGORIES
                    </span>

                    <h2 className="heading heading-dark">
                        Explore Our Hydraulic
                        <br />
                        <span>Machinery Categories</span>
                    </h2>

                    <p className="uh-category-intro">
                        Discover our range of hydraulic machinery,
                        equipment, and industrial components designed
                        to support different manufacturing and
                        production requirements.
                    </p>
                </div>

                {/* CATEGORY GRID */}
                <div className="uh-category-grid">
                    {categories.map((category, index) => (
                        <Link
                            to={category.link}
                            className="uh-category-card"
                            key={category.id}
                            style={{
                                animationDelay: `${index * 0.12}s`,
                            }}
                            aria-label={`Explore ${category.title}`}
                        >
                            {/* IMAGE */}
                            <div className="uh-category-image">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    loading="lazy"
                                />
                            </div>

                            {/* DARK OVERLAY */}
                            <div className="uh-category-overlay"></div>

                            {/* TOP NUMBER */}
                            <span className="uh-category-number">
                                {category.id}
                            </span>

                            {/* BOTTOM CONTENT */}
                            <div className="uh-category-content">
                                <span className="uh-category-label">
                                    U-TECH HYDRAULIC
                                </span>

                                <h3>{category.title}</h3>

                                <p>{category.description}</p>

                                <div className="uh-category-bottom">
                                    <span>Explore Category</span>

                                    <div className="uh-category-arrow">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM ACCENT */}
                            <div className="uh-category-accent"></div>
                        </Link>
                    ))}
                </div>

                {/* BOTTOM TEXT */}
                <div className="uh-category-footer">
                    <span className="uh-category-footer-line"></span>

                    <p>
                        Engineering Quality. Delivering Reliability.
                    </p>

                    <span className="uh-category-footer-line"></span>
                </div>

            </div>
        </section>
    );
};

export default CategorySection;
