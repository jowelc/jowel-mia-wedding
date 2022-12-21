import React, { useState } from "react";

export default function People() {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <section className="people-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">Groomsmen & Bridesmaid</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-12 me-auto">
            <nav>
              <div
                className="nav nav-tabs flex-lg-column align-items-baseline"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className={activeTab ? "nav-link active" : "nav-link"}
                  id="nav-groomsmen-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-groomsmen"
                  type="button"
                  role="tab"
                  aria-controls="nav-groomsmen"
                  aria-selected="true"
                  onClick={() => setActiveTab(true)}
                >
                  <h3>Groom Side</h3>
                </button>

                <button
                  className={!activeTab ? "nav-link active" : "nav-link"}
                  id="nav-bridesmaid-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-bridesmaid"
                  type="button"
                  role="tab"
                  aria-controls="nav-bridesmaid"
                  aria-selected="false"
                  onClick={() => setActiveTab(false)}
                >
                  <h3>Bride Side</h3>
                </button>
              </div>
            </nav>
          </div>

          <div className="col-lg-8 col-md-6 col-12">
            <div className="tab-content" id="nav-tabContent">
              <div
                className={
                  activeTab ? "tab-pane fade show active" : "tab-pane fade show"
                }
                id="nav-groomsmen"
                role="tabpanel"
                aria-labelledby="nav-groomsmen-tab"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Gian.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Gian</h4>

                        <span className="about-tag ms-2">Best friend</span>
                      </div>

                      <p>
                        RG Cabrera, 26. The best man is the groom's right-hand
                        man at the wedding. Usually this person is asked to
                        stand by the groom's side to support and assist in any
                        way possible before and during the wedding. He is also
                        responsible for lending a hand during pre-wedding events
                        and the reception.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Aaron.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Aaron</h4>

                        <span className="about-tag ms-2">Best friend</span>
                      </div>

                      <p>
                        AJ Rosal, 25. The candle sponsor light the wedding
                        candles before the rite of marriage. He also help the
                        best man with his duties, usher in guests before the
                        ceremony, and escort the bridesmaids during the
                        ceremony.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Mark.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Mark</h4>

                        <span className="about-tag ms-2">Cousin</span>
                      </div>

                      <p>
                        MD Punzalan, 24. The first veil sponsor drape the veil
                        over the groom's shoulder. Besides giving support to the
                        groom, this guy typically also help the groom with
                        whatever last minute errands he needs to run.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Chan.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Justine</h4>

                        <span className="about-tag ms-2">Chan</span>
                      </div>

                      <p>
                        JK Chan, 25. The second veil sponsor will also remove
                        the veil after the cord is removed. He is also the groom
                        tasks/schedule coordinator.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/John.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">John</h4>

                        <span className="about-tag ms-2">Brother</span>
                      </div>

                      <p>
                        J Castañeda, 22. The first cord sponsor, tie or place
                        the cord over the groom. He is there to get ready with
                        the groom and get the party started. He also performs
                        important duties during the wedding where he is mostly
                        responsible to assist the Groom in his needs throughout
                        the day.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/jonel.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Jonel</h4>

                        <span className="about-tag ms-2">Brother</span>
                      </div>

                      <p>
                        J Castañeda, 18. The second cord sponsor is responsible
                        in removing the cord after Communion. He is also there
                        for some specific role like assisting the groom's
                        guests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  !activeTab
                    ? "tab-pane fade show active"
                    : "tab-pane fade show"
                }
                id="nav-bridesmaid"
                role="tabpanel"
                aria-labelledby="nav-bridesmaid-tab"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Lia.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Morella</h4>

                        <span className="about-tag ms-2">Cousin</span>
                      </div>

                      <p>
                        M Compio, 22. The maid of honor is in charge of the
                        leading the rest of the bridesmaids throughout the
                        planning process and on the day of the wedding.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Keith.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Keith</h4>

                        <span className="about-tag ms-2">Cousin</span>
                      </div>

                      <p>
                        KR Ubando, 26. The candle sponsor light the wedding
                        candles before the rite of marriage. The lighting of
                        this candle is a ceremonial acknowledgement of the vows
                        exchanged by the bride and groom that have united them
                        in marriage.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Rio.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Rio</h4>

                        <span className="about-tag ms-2">Cousin</span>
                      </div>

                      <p>
                        RL Reyes, 22. The first veil sponsor drape the veil over
                        the bride's head. The veil came to symbolize modesty and
                        obedience. In many religions it is seen as a symbol of
                        reverence for women to cover their heads.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/jaymee.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Jaymee</h4>

                        <span className="about-tag ms-2">Friend</span>
                      </div>

                      <p>
                        JA Torrecampo, 17. The second veil sponsor will remove
                        the veil after the cord is removed. The veil came to
                        symbolize modesty and obedience. In many religions it is
                        seen as a symbol of reverence for women to cover their
                        heads.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Rica.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Rica</h4>

                        <span className="about-tag ms-2">Cousin</span>
                      </div>

                      <p>
                        R Reyes, 26. The first cord sponsor, tie or place the
                        cord over the bride. This cord symbolizes lifetime unity
                        or the everlasting union of the bride and groom when
                        they officially become husband and wife.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="people-thumb image-hover-thumb">
                      <img
                        src="images/Jhoanne.jpeg"
                        className="people-image img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="section-block">
                      <div className="d-flex align-items-center my-3">
                        <h4 className="mb-0">Jhoanne</h4>

                        <span className="about-tag ms-2">Friend</span>
                      </div>

                      <p>
                        J Granda, 23. The second cord sponsor is responsible for
                        removing the cord after Communion. This cord symbolizes
                        lifetime unity or the everlasting union of the bride and
                        groom when they officially become husband and wife.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
