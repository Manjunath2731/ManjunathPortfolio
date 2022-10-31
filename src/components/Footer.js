import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={7} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Manjunath2731" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/manjunath.manjunatg.12" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mr_manjunath_2706" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/manjunath-naik-0235b823a/" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
