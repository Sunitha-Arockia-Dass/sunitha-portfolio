import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineEnvironment } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Contact = React.forwardRef((props, ref) => {
  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=Ijsselstein+Netherlands", "_blank");
};
    return (
    <div ref={ref} className="contact-section">
      <h1>Contact Information</h1>
      <Row className="contact-info ">
        <Col xs={12} md={4}>
          <div className="contact-item">
            <AiOutlineMail />
            <a href="mailto:sunithatheresa18@gmail.com">sunithatheresa18@gmail.com</a>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="contact-item">
            <AiOutlinePhone />
            <p>+31 682827102</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="contact-item">
            <AiOutlineLinkedin />
            <a href="https://www.linkedin.com/in/sunitha-arockia-dass-587b8679/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </Col>
        <Col xs={12} md={4}>
                    <div className="contact-item" onClick={handleLocationClick}>
                        <AiOutlineEnvironment />
                        <a href="https://www.google.com/maps/dir/?api=1&destination=Ijsselstein+Netherlands" target="_blank" rel="noopener noreferrer">Ijsselstein, Netherlands</a>
                    </div>
                </Col>
      </Row>
    </div>
  );
});

export default Contact;


