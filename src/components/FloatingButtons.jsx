
import React from "react";

const FloatingButtons = () => {
  // Replace with official U-Tech contact details
    const phoneNumber = "+91 98999 30108";
    const whatsappNumber = "+91 98999 30108";

  // Replace with official social media profile URLs
  const socialLinks = [
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
          url: "https://www.facebook.com/UTechHydraulic07/",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
        url: "",
    },
    {
      name: "YouTube",
      icon: "fa-brands fa-youtube",
        url: "https://www.youtube.com/@UTECHHYDRAULIC",
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      url: "",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello U-Tech Hydraulic, I would like to enquire about your hydraulic machinery and equipment."
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* LEFT SIDE SOCIAL MEDIA ICONS */}
      <div className="uh-floating-social">
        {socialLinks
          .filter((social) => social.url)
          .map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="uh-social-icon"
              aria-label={`Visit U-Tech on ${social.name}`}
              title={social.name}
            >
              <i className={social.icon}></i>
              <span className="uh-social-tooltip">
                {social.name}
              </span>
            </a>
          ))}
      </div>

      {/* RIGHT SIDE CONTACT BUTTONS */}
      <div className="uh-floating-contact">

        {/* BACK TO TOP */}
        <button
          type="button"
          className="uh-float-btn uh-back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to Top"
        >
          <i className="fa-solid fa-arrow-up"></i>
          <span className="uh-float-tooltip">
            Back to Top
          </span>
        </button>

        {/* WHATSAPP */}
        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="uh-float-btn uh-whatsapp"
            aria-label="Chat with U-Tech on WhatsApp"
            title="WhatsApp Us"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span className="uh-float-tooltip">
              WhatsApp Us
            </span>
          </a>
        )}

        {/* PHONE CALL */}
        {phoneNumber && (
          <a
            href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}
            className="uh-float-btn uh-call"
            aria-label="Call U-Tech Hydraulic"
            title="Call Us"
          >
            <i className="fa-solid fa-phone"></i>
            <span className="uh-float-tooltip">
              Call Us
            </span>
          </a>
        )}

      </div>
    </>
  );
};

export default FloatingButtons;
