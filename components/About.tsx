import React from "react";

export default function About() {
  return (
    <section className="about-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">Love Story</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="image-hover-thumb">
              <img
                src="images/Mia.jpeg"
                className="about-image img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="about-info-wrap d-flex flex-column">
              <div className="about-info-title d-flex align-items-center my-3">
                <h4>Mia</h4>

                <span className="about-tag ms-2">The Bride</span>
              </div>

              <p>
                When I first met jowel, I already had a crush on him. He is so
                amazing, talented, smart, funny, and an absolute sweetheart. He
                makes me smile when I am sad. He lifts me up when I'm feeling
                down. He always believe in me, even when I couldn't even belive
                on myself. He's simply my other half.
              </p>

              <div className="social-icon-wrap mt-auto">
                <ul className="social-icon ms-auto">
                  <li className="social-icon-item">
                    <a
                      href="https://www.facebook.com/miatricia.paras"
                      target="_blank"
                      className="social-icon-link bi-facebook"
                    ></a>
                  </li>

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
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="image-hover-thumb">
              <img
                src="images/Jowel.jpeg"
                className="about-image img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div className="about-info-wrap d-flex flex-column">
              <div className="about-info-title d-flex align-items-center my-3">
                <h4>Jowel</h4>

                <span className="about-tag ms-2">The Groom</span>
              </div>

              <p>Si Mia ay gubat na di makalat, parang dagat na di maalat.</p>
              <p>
                Para siyang sunog na walang apoy, parang durian na walang amoy.
              </p>
              <p>
                Kung titignan siya ay di perpekto, pero sa buhay ko siya lang
                ang kukumpleto.
              </p>

              <div className="social-icon-wrap mt-auto">
                <ul className="social-icon ms-auto">
                  <li className="social-icon-item">
                    <a
                      href="https://www.facebook.com/JowelCastaneda6"
                      target="_blank"
                      className="social-icon-link bi-facebook"
                    ></a>
                  </li>

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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
