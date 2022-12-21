import { Carousel } from "react-bootstrap";
import Image from "next/image";

function Header() {
  return (
    <section className="hero-section d-flex pt-5" id="section_1">
      <div className="hero-container container d-flex flex-column justify-content-end">
        <div className="row h-100">
          <div className="col-lg-6 col-12 my-auto">
            <h2 className="text-white">👋 Hi there, You're invited</h2>

            <h1 className="text-white hero-title mb-4">
              We're getting married
            </h1>

            <p className="text-white mb-2">
              <i className="bi-check-circle-fill custom-icon me-1"></i>
              Jowel Yambao Castañeda
            </p>

            <p className="text-white">
              <i className="bi-check-circle-fill custom-icon me-1"></i>
              Mia Tricia Reyes Paras
            </p>

            <a href="#section_2" className="custom-link custom-btn btn mt-4">
              Discover More
            </a>
          </div>

          <div className="col-lg-3 col-12 save-the-date-wrap mt-auto ms-lg-auto">
            <div className="save-the-date-thumb">
              <h4 className="save-the-date-title">Save the date</h4>

              <div className="save-the-date-body">
                <span className="date">5th January 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
