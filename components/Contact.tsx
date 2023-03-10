import React from "react";

export default function Contact() {
  return (
    <section
      className="contact-section section-bg section-padding"
      id="section_7"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">Get in touch</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <h4 className="mb-4">Visit Us</h4>

            <p>
              1450 Melba St. Mountain View <br />
              Balibago Angeles City, Pampanga
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 my-4 my-lg-0 my-md-0">
            <h4 className="mb-4">Contact Information</h4>

            <p className="mb-2">
              <a href="mailto:jowelcastaneda6@gmail.com">
                jowelcastaneda6@gmail.com
              </a>
            </p>

            <p>
              <a href="tel: 099-7720-0248">099-7720-0248</a>
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <h4 className="mb-4">Socials</h4>

            <ul className="social-icon">
              <li className="social-icon-item">
                <a
                  href="https://twitter.com/jowelcastaneda"
                  target="_blank"
                  className="social-icon-link bi-twitter"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://www.instagram.com/jowel_castaneda/"
                  target="_blank"
                  className="social-icon-link bi-instagram"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://www.facebook.com/miatricia.paras"
                  target="_blank"
                  className="social-icon-link bi-facebook"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
