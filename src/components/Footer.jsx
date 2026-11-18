
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
                INDUSTRIAL UPDATES
              </span>

              <h2>
                Engineering insights,
                <br />
                company news and
                <br />
                new innovations.
              </h2>
            </div>

            <form
              className="uh-newsletter-form"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Your work email"
                aria-label="Your work email"
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
                U-Tech Hydraulic provides hydraulic machinery
                and engineering solutions designed for
                industrial strength, reliable performance,
                and long-term productivity.
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

                <Link to="/about">About Us</Link>
                <Link to="/products">Our Products</Link>

                <Link to="/contact">Contact Us</Link>
                <Link to="/gallery">Gallery</Link>

                <Link to="/contact">Request a Quote</Link>

              </div>

            </div>

            {/* COLUMN 3 - CONTACT DETAILS */}
            <div className="uh-footer-contact">

              <div className="uh-footer-contact-group">

                <h3 className="uh-footer-title">
                  Office Address
                </h3>

                <p>
                  Your Office Address
                  <br />
                  City, State, PIN Code
                  <br />
                  India
                </p>

              </div>

              <div className="uh-footer-contact-group">

                <h3 className="uh-footer-title">
                  Email
                </h3>

                <p>
                  Have a project in mind?
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
                  Phone
                </h3>

                <a href="tel:+910000000000">
                  +91 XXXXX XXXXX
                </a>

                <a href="tel:+910000000001">
                  +91 XXXXX XXXXX
                </a>

              </div>

              <div className="uh-footer-social-wrap">

                <h3 className="uh-footer-title">
                  Follow Us
                </h3>

                <div className="uh-footer-social">

                  <a href="#" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a href="#" aria-label="X">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a href="#" aria-label="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>

                  <a href="#" aria-label="Facebook">
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
              Designed by
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
