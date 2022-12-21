import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Invitation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState(1);
  const [message, setMessage] = useState("");

  // Validation
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const checkIfValid = () => {
    let isValid = true;
    if (name == "" || name.match(/^\s+$/)) {
      setInvalidName(true);
      isValid = false;
    } else {
      setInvalidName(false);
    }

    if (email == "" || email.match(/^\s+$/)) {
      setInvalidEmail(true);
      isValid = false;
    } else {
      setInvalidEmail(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkIfValid();
  };

  return (
    <section className="rsvp-section section-padding" id="section_6">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <div className="rsvp-form-wrap">
              <div className="section-title-wrap mb-5">
                <h2 className="rsvp-section-title">RSVP</h2>

                <div className="section-title-bottom">
                  <span className="section-title-line"></span>
                  <i className="section-title-icon bi-heart-fill"></i>
                  <span className="section-title-line"></span>
                </div>
              </div>

              <h5 className="question mb-4">
                Will you attend?&nbsp;
                <span className="text-muted">
                  Please reserve before December 30, 2022
                </span>
              </h5>

              <Form
                className="custom-form rsvp-form"
                role="form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <img src="/images/Invitation.jpeg" alt="Invitation" />

                  <div className="col-lg-3 col-5 pt-3 mx-auto">
                    <button type="submit" className="form-control">
                      <Link
                        className="text-white"
                        target="_blank"
                        href="https://docs.google.com/spreadsheets/d/1eB9ggR0th2LiYLPj9PtTSnlCrzFCiT04CiuKXkXOtdU/edit#gid=0"
                      >
                        Click here!
                      </Link>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
