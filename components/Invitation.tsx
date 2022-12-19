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
                  Please reserve before March 2th, 2022
                </span>
              </h5>

              <Form
                className="custom-form rsvp-form"
                role="form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <Form.Group className="col-lg-6 col-md-6 col-12">
                    <Form.Control
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Full Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isInvalid={invalidName}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please input your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="col-lg-6 col-md-6 col-12">
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email Address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={invalidEmail}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please input your email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="col-lg-6 col-md-6 col-12">
                    <Form.Label>Number of Guests</Form.Label>
                    <select
                      name="guests"
                      className="form-select"
                      id="guests"
                      aria-label="Guests"
                    >
                      <option selected value="1">
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  </Form.Group>

                  <div className="col-lg-12 col-12">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Message (Optional)"
                    ></textarea>
                  </div>

                  <div className="col-lg-3 col-5 mx-auto">
                    <button
                      type="submit"
                      className="form-control"
                      onClick={handleSubmit}
                    >
                      Send Invitation
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
