import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="site-header">

            {/* Top Header */}
            <div className="top-header text-white d-none">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-10">
                            <div className="d-flex flex-wrap align-items-center">

                                <a
                                    href="tel:+919899930108"
                                    className="top-header-item"
                                >
                                    <i className="fa-solid fa-phone"></i>
                                    <span>Call: +91 98999 30108</span>
                                </a>

                                <div className="top-header-item">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
                                </div>

                                <a
                                    href="mailto:abc@gmail.com"
                                    className="top-header-item"
                                >
                                    <i className="fa-regular fa-envelope"></i>
                                    <span>abc@gmail.com</span>
                                </a>

                            </div>
                        </div>

                        <div className="col-lg-2 d-none d-lg-block">

                            {/* Social Media Links */}
                            <div className="d-flex justify-content-end align-items-center gap-3">

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                    aria-label="Facebook"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                    aria-label="Instagram"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                              
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg bg-white shadow-sm py-0">
                <div className="container-xl py-0">

                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img
                            src="/img/logo.png"
                            alt="U-Tech Hydraulic"
                            className="site-logo"
                        />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="fa-solid fa-bars">  </span>
                    </button>

                    {/* Navigation */}
                    <div
                        className="collapse navbar-collapse"
                        id="mainNavbar"
                    >
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" end>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    About Us
                                </NavLink>
                            </li>

                            {/* Products Dropdown */}
                            {/* <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/products"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Our Products
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/products/safety-products">
                                            Safety Products
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/mig-tig-torches"
                                        >
                                            MIG & TIG Torches
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/gas-cutters-pug-cutting-Mmchines"
                                        >
                                            Gas Cutters & PUG Cutting Machines
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/welding-accessories-regulators"
                                        >
                                            Welding Accessories & Regulators
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item border-0"
                                            to="/products/brass-parts"
                                        >
                                            Brass Parts
                                        </Link>
                                    </li>

                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Our Products
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Industries
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Contact Us
                                </NavLink>
                            </li>

                           

                            {/* Global Button */}
                            <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                                <a 
                                    href="tel:+919899930108"
                                    className="main-btn"
                                >
                                    <i className="fa-solid fa-phone fa-beat pe-4"></i>
                                    Call Now
                                </a >
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>


        </header>
    );
};

export default Navbar;