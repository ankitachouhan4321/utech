
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Connect your newsletter API here.
    // Do not show success until the API confirms subscription.
    console.log("Newsletter email:", email);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="uh-footer">

      {/* NEWSLETTER SECTION */}
      <div className="uh-footer-newsletter-wrap">
        <div className="container">

          <div className="uh-footer-newsletter">

            <div className="uh-newsletter-content">

              <span className="uh-newsletter-label">
                <i className="fa-solid fa-square"></i>
                STAY CONNECTED WITH U-TECH
              </span>

              <h2>
                Discover Hydraulic
                <br />
                Products, Industry News
                <br />
                & Company Updates.
              </h2>

            </div>

            <form
              className="uh-newsletter-form"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">
                <span>Subscribe</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>

          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="uh-footer-main">
        <div className="container">

          <div className="uh-footer-grid">

            {/* COLUMN 1 - COMPANY */}
            <div className="uh-footer-about">

              <Link to="/" className="uh-footer-logo">

                <img
                  src="/images/logo.png"
                  alt="U-Tech Hydraulic Logo"
                />

                <span>
                  U-Tech
                  <strong> Hydraulic</strong>
                  <b>.</b>
                </span>

              </Link>

              <p>
                Established in 2014, U-Tech Hydraulic is a
                manufacturer, supplier, and trader of
                hydraulic machinery and industrial components.
                We offer quality hydraulic products in
                different sizes and specifications to
                meet diverse industrial requirements.
              </p>

              <div className="uh-footer-watermark">
                U-Tech
                <span> Hydraulic</span>
              </div>

            </div>

            {/* COLUMN 2 - USEFUL LINKS */}
            <div className="uh-footer-links">

              <h3 className="uh-footer-title">
                Useful Links
              </h3>

              <div className="uh-footer-links-grid">

                <Link to="/">
                  Home
                </Link>

                <Link to="/about">
                  About Us
                </Link>

                <Link to="/products">
                  Our Products
                </Link>

                <Link to="/contact">
                  Contact Us
                </Link>

                <Link to="/products/industrial-hydraulic-power-pack">
                  Hydraulic Power Packs
                </Link>

                <Link to="/products/scissor-lift-cylinder">
                  Scissor Lift Cylinders
                </Link>

                <Link to="/products/hydraulic-power-press-machine">
                  Hydraulic Press Machines
                </Link>

                <Link to="/products/hydraulic-baling-press">
                  Hydraulic Baling Presses
                </Link>

              </div>

            </div>

            {/* COLUMN 3 - CONTACT DETAILS */}
            <div className="uh-footer-contact">

              <div className="uh-footer-contact-group">

                <h3 className="uh-footer-title">
                  Office Address
                </h3>

                <p>
                  U-Tech Hydraulic
                  <br />
                  Add Your Complete Office Address
                  <br />
                  City, State, PIN Code, India
                </p>

              </div>

              <div className="uh-footer-contact-group">

                <h3 className="uh-footer-title">
                  Email Us
                </h3>

                <p>
                  For product enquiries and quotations:
                  <br />

                  <a href="mailto:your-email@example.com">
                    your-email@example.com
                  </a>
                </p>

              </div>

            </div>

            {/* COLUMN 4 - PHONE & SOCIAL */}
            <div className="uh-footer-last">

              <div className="uh-footer-phone">

                <h3 className="uh-footer-title">
                  Call Us
                </h3>

                <a href="tel:+910000000000">
                  +91 XXXXX XXXXX
                </a>

              </div>

              <div className="uh-footer-social-wrap">

                <h3 className="uh-footer-title">
                  Follow U-Tech Hydraulic
                </h3>

                <div className="uh-footer-social">

                  <a
                    href="#"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="uh-footer-bottom">

        <div className="container">

          <div className="uh-footer-bottom-inner">

            <p>
              © {new Date().getFullYear()}
              <strong> U-Tech Hydraulic.</strong>
              {" "}All Rights Reserved.
            </p>

            <p className="uh-footer-credit">
              Designed by{" "}
              <a
                href="https://viraladsmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Viral Ads Media
              </a>
            </p>

          </div>

        </div>

      </div>

      {/* SCROLL TO TOP */}
      <button
        type="button"
        className="uh-footer-scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

    </footer>

  );
};

export default Footer;
