import React from "react";

export default function Gallery() {
  return (
    <section
      className="gallery-section section-bg section-padding"
      id="section_5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">Gallery</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="gallery-thumb image-hover-thumb">
              <a href="images/1.jpeg" className="popup-image">
                <img
                  src="images/1.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-flex flex-column">
            <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
              <a href="images/5.jpeg" className="popup-image">
                <img
                  src="images/5.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
              <a href="images/33.jpeg" className="popup-image">
                <img
                  src="images/33.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="gallery-thumb image-hover-thumb">
              <a href="images/3.jpeg" className="popup-image">
                <img
                  src="images/3.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-flex flex-column">
            <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
              <a href="images/4.jpeg" className="popup-image">
                <img
                  src="images/4.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
              <a href="images/7.jpeg" className="popup-image">
                <img
                  src="images/7.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="gallery-thumb image-hover-thumb">
              <a href="images/105.jpeg" className="popup-image">
                <img
                  src="images/105.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-flex flex-column">
            <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
              <a href="images/6.jpeg" className="popup-image">
                <img
                  src="images/6.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
              <a href="images/8.jpeg" className="popup-image">
                <img
                  src="images/8.jpeg"
                  className="gallery-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
