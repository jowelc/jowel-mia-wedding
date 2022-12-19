import React from "react";

export default function Wedding() {
  return (
    <section
      className="the-wedding-section section-bg section-padding"
      id="section_3"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">The Wedding</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src="images/bw.jpeg" className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h3 className="my-3">The Reception</h3>

              <p className="mb-2">
                <i className="bi-geo-alt me-1"></i>
                Best Western Hotel Balibago
              </p>

              <p className="mb-2">
                <i className="bi-clipboard-heart me-1"></i>
                Simon & Stanley Hall (4th flr)
              </p>

              <p>
                <i className="bi-clock me-1"></i>
                4:00 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src="images/immacon.jpeg" className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h3 className="my-3">Wedding Ceremony</h3>

              <p className="mb-2">
                <i className="bi-geo-alt me-1"></i>
                Immaculate Conception Parish Church
              </p>

              <p>
                <i className="bi-clock me-1"></i>
                2:30 PM to 4:00 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.9925021215777!2d120.58919571537237!3d15.158756467216831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2722ba92cc5%3A0x1fd34c48671c1f9d!2sImmaculate%20Conception%20Parish%20Church%20-%20Balibago%2C%20Angeles%20City%2C%20Pampanga%20(Archdiocese%20of%20San%20Fernando)!5e0!3m2!1sen!2sph!4v1670256826658!5m2!1sen!2sph"
              width="100%"
              height="310"
              loading="lazy"
            ></iframe>

            <div className="section-block">
              <h3 className="my-3">Location</h3>

              <p className="mb-2">
                <i className="bi-geo-alt me-1"></i>
                Angeles City, Pampanga
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
