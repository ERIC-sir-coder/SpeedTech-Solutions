import { useState } from "react";
import "./App.css";

import heroSpeedtech from "./assets/speedtech/hero-speedtech.jpg";
import coverageSpeedtech from "./assets/speedtech/coverage-speedtech.jpg";
import speedsSpeedtech from "./assets/speedtech/speeds-speedtech.jpg";

/* ============================================================
   SPEEDTECH SOLUTIONS
   Main React Application

   CUSTOMER COMMUNICATION:
   Phone + WhatsApp — Contact section only

   CONFIRMED COVERAGE:
   Kiambu • Kirigiti • South B • Sabaki

   BRAND COLORS:
   Purple • Maroon • Brown • Green • Orange • Gold
   ============================================================ */

/* ============================================================
   BUSINESS NAME
   ============================================================ */

const BUSINESS_NAME = "SpeedTech Solutions";

/* ============================================================
   COVERAGE LOCATIONS
   ============================================================ */

const COVERAGE_LOCATIONS = [
  "Kiambu",
  "Kirigiti",
  "South B",
  "Sabaki",
];

/* ============================================================
   INTERNET PACKAGE DATA
   ============================================================ */

const internetPackages = [
  {
    id: "4-mbps",
    speedMbps: 4,
    price: null,
    description:
      "A practical internet connection for basic browsing, communication, and everyday use.",
  },
  {
    id: "6-mbps",
    speedMbps: 6,
    price: null,
    description:
      "A reliable connection for browsing, social media, streaming, and everyday household use.",
  },
  {
    id: "8-mbps",
    speedMbps: 8,
    price: null,
    description:
      "A stronger connection for households with multiple devices and regular entertainment.",
  },
  {
    id: "10-mbps",
    speedMbps: 10,
    price: null,
    description:
      "A higher-speed connection for households that need more capacity across multiple devices.",
  },
];

/* ============================================================
   BUSINESS DETAILS
   ============================================================ */

const WHATSAPP_NUMBER = "254790460470";
const PHONE_NUMBER = "0790 460 470";

/* ============================================================
   APP
   ============================================================ */

function App() {
  /* ==========================================================
     NAVIGATION STATE
     ========================================================== */

  const [menuOpen, setMenuOpen] = useState(false);

  /* ==========================================================
     NAVIGATION HELPERS
     ========================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ==========================================================
     SMOOTH SECTION NAVIGATION
     ========================================================== */

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  };

  /* ==========================================================
     WHATSAPP
     ========================================================== */

  const handleGeneralWhatsApp = () => {
    const message = `Hello SpeedTech Solutions,

I would like to know more about your internet connection and installation services.

Please share information about the available speeds, prices, coverage, installation, and how I can get connected.

Thank you.`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <div className="site">

      {/* ======================================================
          NAVIGATION
          ====================================================== */}

      <header className="navbar">
        <div className="container nav-container">

          {/* BRAND */}

          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label={`${BUSINESS_NAME} home`}
          >
            <div className="brand-text">
              <strong>
                SPEEDTECH
              </strong>

              <span>
                SOLUTIONS
              </span>
            </div>
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="menu-toggle"
            onClick={() =>
              setMenuOpen(
                (previous) => !previous
              )
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* NAVIGATION LINKS */}

          <nav
            className={`nav-links ${
              menuOpen ? "open" : ""
            }`}
            aria-label="Main navigation"
          >
            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>

            <a
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>

            <a
              href="#packages"
              onClick={closeMenu}
            >
              Packages
            </a>

            <a
              href="#coverage"
              onClick={closeMenu}
            >
              Coverage
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </nav>

        </div>
      </header>

      <main>

        {/* ====================================================
            HERO
            ==================================================== */}

        <section
          id="home"
          className="hero"
        >
          <div className="container">

            <div className="hero-content">

              {/* HERO TEXT */}

              <div className="hero-text">

                <span className="eyebrow">
                  RELIABLE INTERNET • KIAMBU • KIRIGITI • SOUTH B • SABAKI
                </span>

                <h1>
                  SpeedTech Solutions{" "}
                  <span>
                    Reliable Internet Connection & Installation.
                  </span>
                </h1>

                <p>
                  Get reliable internet connection and
                  professional installation for your home
                  or premises. Choose from practical
                  internet speeds and get connected with
                  SpeedTech Solutions.
                </p>

              </div>

              {/* HERO IMAGE */}

              <div className="hero-image-wrapper">

                <img
                  src={heroSpeedtech}
                  alt="SpeedTech Solutions internet connection services"
                  className="hero-image"
                />

              </div>

            </div>

          </div>
        </section>

        {/* ====================================================
            ABOUT
            ==================================================== */}

        <section
          id="about"
          className="intro-section"
        >
          <div className="container intro-grid">

            <div>

              <span className="section-label">
                ABOUT SPEEDTECH SOLUTIONS
              </span>

              <h2>
                Internet connection and
                <span>
                  {" "}installation made simple.
                </span>
              </h2>

            </div>

            <div>

              <p>
                SpeedTech Solutions provides reliable
                internet connection and professional
                installation for customers looking
                for dependable connectivity.
              </p>

              <p>
                Our goal is simple: provide convenient
                internet access that supports everyday
                browsing, communication, entertainment,
                work, and other digital needs across
                our service areas.
              </p>

            </div>

          </div>
        </section>

        {/* ====================================================
            SERVICES
            ==================================================== */}

        <section
          id="services"
          className="services-section"
        >
          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                OUR SERVICES
              </span>

              <h2>
                SpeedTech Solutions Internet Connection
                <span>
                  {" "}& Installation.
                </span>
              </h2>

              <p>
                Get connected, choose your preferred
                speed, and arrange professional installation.
              </p>

            </div>

            <div className="services-grid">

              {/* INTERNET CONNECTION */}

              <article className="service-card">

                <div className="service-number">
                  01
                </div>

                <h3>
                  Internet Connection
                </h3>

                <p>
                  Reliable monthly internet connection
                  with practical speeds for homes and
                  everyday digital activities.
                </p>

                <button
                  type="button"
                  className="service-link"
                  onClick={() =>
                    scrollToSection("packages")
                  }
                >
                  View Packages →
                </button>

              </article>

              {/* INTERNET INSTALLATION */}

              <article className="service-card">

                <div className="service-number">
                  02
                </div>

                <h3>
                  Internet Installation
                </h3>

                <p>
                  Professional installation of your
                  SpeedTech Solutions internet connection
                  at your home or premises.
                </p>

                <button
                  type="button"
                  className="service-link"
                  onClick={() =>
                    scrollToSection("contact")
                  }
                >
                  Ask About Installation →
                </button>

              </article>

              {/* COVERAGE CHECK */}

              <article className="service-card">

                <div className="service-number">
                  03
                </div>

                <h3>
                  Coverage Check
                </h3>

                <p>
                  Confirm whether SpeedTech Solutions
                  internet connection is available at
                  your location in our current service areas.
                </p>

                <button
                  type="button"
                  className="service-link"
                  onClick={() =>
                    scrollToSection("coverage")
                  }
                >
                  Check Coverage →
                </button>

              </article>

            </div>
          </div>
        </section>

        {/* ====================================================
            PACKAGES
            ==================================================== */}

        <section
          id="packages"
          className="packages-section"
        >
          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                HOME CONNECT
              </span>

              <h2>
                Choose your
                <span>
                  {" "}connection speed.
                </span>
              </h2>

              <p>
                Select your preferred internet
                connection speed for your home.
              </p>

            </div>

            {/* ==================================================
                SPEED IMAGE
                ================================================== */}

            <div className="speed-image-card">

              <img
                src={speedsSpeedtech}
                alt="SpeedTech Solutions internet speeds and Mbps packages"
                className="speed-image"
              />

            </div>

            {/* ==================================================
                SPEED PROGRESSION
                ================================================== */}

            <div className="speed-scale-card">

              <div className="speed-scale-header">

                <div>

                  <span className="scale-label">
                    HOME CONNECT
                  </span>

                  <h3>
                    Internet Speed Progression
                  </h3>

                </div>

                <span className="scale-unit">
                  Mbps
                </span>

              </div>

              <div className="speed-scale">

                <div className="speed-line"></div>

                {internetPackages.map(
                  (pkg) => (

                    <button
                      type="button"
                      className="speed-point"
                      key={pkg.id}
                      onClick={() =>
                        scrollToSection("contact")
                      }
                      aria-label={`Contact SpeedTech Solutions about ${pkg.speedMbps} Mbps`}
                    >

                      <span className="speed-dot"></span>

                      <strong>
                        {pkg.speedMbps}
                      </strong>

                      <span>
                        Mbps
                      </span>

                    </button>

                  )
                )}

              </div>

              <div className="speed-scale-footer">

                <span>
                  Starting speed
                </span>

                <span>
                  Higher speed
                </span>

              </div>

            </div>

            {/* ==================================================
                PACKAGE CARDS
                ================================================== */}

            <div className="packages-grid">

              {internetPackages.map(
                (pkg, index) => (

                  <article
                    className="package-card"
                    key={pkg.id}
                  >

                    <div className="package-header">

                      <span className="package-tag">
                        HOME CONNECT
                      </span>

                      <span className="package-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <div className="package-speed">

                      <strong>
                        {pkg.speedMbps}
                      </strong>

                      <span>
                        Mbps
                      </span>

                    </div>

                    <h3>
                      SpeedTech Internet
                    </h3>

                    <p>
                      {pkg.description}
                    </p>

                    <div className="package-divider"></div>

                    <div className="package-footer">

                      <span>
                        Monthly connection
                      </span>

                      <button
                        type="button"
                        className="package-btn"
                        onClick={() =>
                          scrollToSection("contact")
                        }
                      >
                        Contact SpeedTech

                        <span aria-hidden="true">
                          →
                        </span>

                      </button>

                    </div>

                  </article>

                )
              )}

            </div>

            {/* ==================================================
                PACKAGE NOTE
                ================================================== */}

            <div className="package-note">

              <strong>
                Pricing:
              </strong>

              <span>
                Contact SpeedTech Solutions for current
                pricing, availability, and installation
                information.
              </span>

            </div>

          </div>
        </section>

        {/* ====================================================
            COVERAGE
            ==================================================== */}

        <section
          id="coverage"
          className="coverage-section"
        >
          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                COVERAGE & LOCATION
              </span>

              <h2>
                Connecting customers across
                <span>
                  {" "}our service areas.
                </span>
              </h2>

              <p>
                SpeedTech Solutions currently serves
                customers in Kiambu, Kirigiti, South B,
                and Sabaki.
              </p>

            </div>

            <div className="coverage-grid">

              {/* ==================================================
                  COVERAGE IMAGE
                  ================================================== */}

              <div className="coverage-image-wrapper">

                <img
                  src={coverageSpeedtech}
                  alt="SpeedTech Solutions coverage areas"
                  className="coverage-image"
                />

              </div>

              {/* ==================================================
                  COVERAGE INFORMATION
                  ================================================== */}

              <div className="coverage-info">

                <span className="coverage-status">
                  CURRENT SERVICE AREAS
                </span>

                <h3>
                  Where We Connect
                </h3>

                <p>
                  SpeedTech Solutions currently
                  provides internet connection and
                  installation services in the
                  following locations.
                </p>

                <div className="coverage-location-list">

                  {COVERAGE_LOCATIONS.map(
                    (location, index) => (

                      <div
                        className="coverage-location"
                        key={location}
                      >

                        <span className="location-marker">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>

                          <strong>
                            Service Area
                          </strong>

                          <span>
                            {location}
                          </span>

                        </div>

                      </div>

                    )
                  )}

                </div>

                <p>
                  Availability may vary by specific
                  location. Contact SpeedTech Solutions
                  to confirm whether your exact location
                  can be connected.
                </p>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    scrollToSection("contact")
                  }
                >
                  Check Your Location
                </button>

              </div>

            </div>

          </div>
        </section>

        {/* ====================================================
            FINAL CTA
            ==================================================== */}

        <section className="final-cta">

          <div className="container final-cta-inner">

            <div>

              <span className="section-label">
                GET CONNECTED
              </span>

              <h2>
                Ready to get your
                <span>
                  {" "}SpeedTech connection?
                </span>
              </h2>

              <p>
                Choose your preferred internet speed
                or contact SpeedTech Solutions about
                connection, installation, pricing,
                and coverage.
              </p>

            </div>

            <div className="cta-actions">

              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  scrollToSection("contact")
                }
              >
                Contact SpeedTech
              </button>

            </div>

          </div>

        </section>

        {/* ====================================================
            CONTACT
            PHONE + WHATSAPP ONLY
            ==================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="container contact-grid">

            {/* ==================================================
                DIRECT CONTACT
                ================================================== */}

            <div className="contact-info-panel">

              <span className="section-label">
                DIRECT CONTACT
              </span>

              <h2>
                Choose how to
                <span>
                  {" "}reach SpeedTech Solutions.
                </span>
              </h2>

              <p>
                Contact SpeedTech Solutions directly
                for internet connection, installation,
                package enquiries, pricing, or coverage.
              </p>

              <div className="contact-details">

                {/* ==================================================
                    PHONE
                    ================================================== */}

                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="contact-method"
                  aria-label={`Call SpeedTech Solutions at ${PHONE_NUMBER}`}
                >

                  <div
                    className="contact-icon phone-contact-icon"
                    aria-hidden="true"
                  >

                    <svg
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      focusable="false"
                      aria-label="Phone"
                    >

                      <defs>

                        <linearGradient
                          id="truecallerBlueGradient"
                          x1="7"
                          y1="8"
                          x2="42"
                          y2="40"
                          gradientUnits="userSpaceOnUse"
                        >

                          <stop
                            offset="0"
                            stopColor="#1729F5"
                          />

                          <stop
                            offset="0.5"
                            stopColor="#1748F7"
                          />

                          <stop
                            offset="1"
                            stopColor="#35A7F4"
                          />

                        </linearGradient>

                        <linearGradient
                          id="truecallerLightGradient"
                          x1="28"
                          y1="4"
                          x2="43"
                          y2="44"
                          gradientUnits="userSpaceOnUse"
                        >

                          <stop
                            offset="0"
                            stopColor="#B9E4FF"
                          />

                          <stop
                            offset="0.45"
                            stopColor="#5AB8F4"
                          />

                          <stop
                            offset="1"
                            stopColor="#168FEA"
                          />

                        </linearGradient>

                        <clipPath id="truecallerIconClip">

                          <rect
                            x="3"
                            y="3"
                            width="42"
                            height="42"
                            rx="11"
                          />

                        </clipPath>

                      </defs>

                      <g clipPath="url(#truecallerIconClip)">

                        <rect
                          x="3"
                          y="3"
                          width="42"
                          height="42"
                          rx="11"
                          fill="url(#truecallerBlueGradient)"
                        />

                        <path
                          d="
                            M29 3
                            H45
                            V45
                            H16
                            C19.5 32.5 22.5 22 29 3Z
                          "
                          fill="url(#truecallerLightGradient)"
                        />

                        <path
                          d="
                            M29.2 3
                            H45
                            V25
                            C45 27.9 42.7 30 39.8 30
                            H28.2
                            C25.6 30 23.7 31.5 22.8 34
                            L20.2 41.3
                            C19.7 42.7 18.8 44 17.7 45
                            H16
                            C19.4 32.1 22.5 21.3 29.2 3Z
                          "
                          fill="#1732F4"
                        />

                        <path
                          d="
                            M14.25 12.15
                            C15.1 11.35 16.35 11.05 17.42 11.55
                            L20.25 12.9
                            C21.35 13.42 21.8 14.72 21.3 15.82
                            L19.8 19.12
                            C19.5 19.78 19.58 20.52 20.02 21.08
                            C21.38 22.85 23.05 24.5 24.9 25.83
                            C25.48 26.25 26.22 26.3 26.86 25.98
                            L30.03 24.43
                            C31.12 23.9 32.42 24.3 32.97 25.38
                            L34.38 28.15
                            C34.92 29.2 34.67 30.48 33.78 31.25
                            L31.92 32.85
                            C30.93 33.7 29.53 34.05 28.27 33.75
                            C22.18 32.3 15.7 26.05 13.05 20.02
                            C12.5 18.77 12.7 17.35 13.58 16.35
                            Z
                          "
                          fill="#FFFFFF"
                        />

                      </g>

                    </svg>

                  </div>

                  <div>

                    <strong>
                      PHONE
                    </strong>

                    <span>
                      {PHONE_NUMBER}
                    </span>

                  </div>

                </a>

                {/* ==================================================
                    WHATSAPP
                    ================================================== */}

                <button
                  type="button"
                  className="contact-method contact-whatsapp-method"
                  onClick={handleGeneralWhatsApp}
                  aria-label="Chat with SpeedTech Solutions on WhatsApp"
                >

                  <div
                    className="contact-icon whatsapp-contact-icon"
                    aria-hidden="true"
                  >

                    <svg
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      focusable="false"
                      aria-label="WhatsApp"
                    >

                      <circle
                        cx="24"
                        cy="24"
                        r="21"
                        fill="#25D366"
                      />

                      <path
                        d="
                          M24 10
                          C16.27 10 10 16.1 10 23.65
                          C10 26.35 10.8 28.85 12.2 30.95
                          L10.4 37.8
                          L17.45 35.95
                          C19.4 37.05 21.65 37.65 24 37.65
                          C31.73 37.65 38 31.55 38 23.65
                          C38 16.1 31.73 10 24 10Z
                        "
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="
                          M17.1 16.7
                          C17.65 16.15 18.5 15.95 19.2 16.3
                          L21.95 17.7
                          C22.65 18.05 22.95 18.9 22.6 19.6
                          L21.35 22.1
                          C21.1 22.6 21.15 23.2 21.5 23.65
                          C22.65 25.25 24.15 26.75 25.8 27.85
                          C26.25 28.15 26.85 28.2 27.3 27.95
                          L29.8 26.7
                          C30.5 26.35 31.35 26.65 31.7 27.35
                          L33.1 30.1
                          C33.45 30.8 33.25 31.65 32.65 32.15
                          L30.9 33.55
                          C30.1 34.2 29 34.4 28.05 34.1
                          C23.1 32.55 17.05 26.65 15.55 21.6
                          C15.25 20.55 15.5 19.45 16.25 18.65
                          Z
                        "
                        fill="#FFFFFF"
                      />

                    </svg>

                  </div>

                  <div>

                    <strong>
                      WHATSAPP
                    </strong>

                    <span>
                      Chat with SpeedTech Solutions
                    </span>

                  </div>

                </button>

              </div>

            </div>

            {/* ==================================================
                GET CONNECTED PANEL
                ================================================== */}

            <div className="contact-connect-panel">

              <span className="section-label">
                GET CONNECTED
              </span>

              <h3>
                SpeedTech Solutions
              </h3>

              <p>
                Need reliable internet for your home
                or premises? Contact SpeedTech Solutions
                directly for information about available
                speeds, installation, pricing, and coverage.
              </p>

              <div className="contact-service-list">

                <div className="contact-service-item">

                  <span className="contact-service-number">
                    01
                  </span>

                  <div>

                    <strong>
                      Internet Connection
                    </strong>

                    <small>
                      Choose your preferred speed
                    </small>

                  </div>

                </div>

                <div className="contact-service-item">

                  <span className="contact-service-number">
                    02
                  </span>

                  <div>

                    <strong>
                      Internet Installation
                    </strong>

                    <small>
                      Homes and premises
                    </small>

                  </div>

                </div>

                <div className="contact-service-item">

                  <span className="contact-service-number">
                    03
                  </span>

                  <div>

                    <strong>
                      Coverage Check
                    </strong>

                    <small>
                      Confirm your location
                    </small>

                  </div>

                </div>

              </div>

              <div className="contact-panel-note">

                <span>
                  CONTACT SPEEDTECH SOLUTIONS
                </span>

                <p>
                  Use the phone number or WhatsApp
                  option to ask about internet connection,
                  installation, speeds, pricing, and coverage.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ========================================================
          FOOTER
          ======================================================== */}

      <footer className="footer">

        <div className="container footer-inner">

          <div className="footer-brand">

            <strong>
              SPEEDTECH
            </strong>

            <span>
              SOLUTIONS
            </span>

          </div>

          <p>
            ©{" "}
            {new Date().getFullYear()}{" "}
            SpeedTech Solutions.
            All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;