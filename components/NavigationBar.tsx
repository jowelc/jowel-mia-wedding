import { Container, Navbar, NavLink } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="bg-white fixed-top">
      <Container>
        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <a href="#" className="navbar-brand mx-auto mx-lg-0">
          <span>Jowel</span>
          <i className="bi-heart brand-icon"></i>
          <span>Mia</span>
        </a>

        <Navbar.Collapse id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#section_1">
                Homepage
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#section_2">
                Our Story
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#section_3">
                The Wedding
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#section_4">
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#section_5">
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#section_6">
                Rsvp
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link click-scroll" href="#section_7">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
