import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = React.forwardRef((props, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(formData);
    axios
      .post(
        "https://st-hospital-server.adaptable.app/appointment/sendMail",
        formData
      )
      .then((response) => {
        console.log("mail sent successfully");
      })
      .catch((error) => {
        // setErrorMessage(error.response.data.message);
        console.log("error");
      });
  };

  return (
    <div ref={ref} className="contact-section">
      <h1>Contact Information</h1>
      <Row className="contact-info ">
        <Col xs={12} md={4}>
          <div className="contact-item">
            <AiOutlineMail />
            <a href="mailto:sunithatheresa18@gmail.com">
              sunithatheresa18@gmail.com
            </a>
          </div>
        </Col>
        {/* <Col xs={12} md={4}>
          <div className="contact-item">
            <AiOutlinePhone />
            <p>+31 682827102</p>
          </div>
        </Col> */}
        <Col xs={12} md={4}>
          <div className="contact-item">
            <AiOutlineLinkedin />
            <a
              href="https://www.linkedin.com/in/sunitha-arockia-dass-587b8679/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="contact-item">
            <AiOutlineEnvironment />
            <a
              href="https://www.google.nl/maps/place/Utrecht/@52.0840718,4.9176857,11z/data=!3m1!4b1!4m6!3m5!1s0x47c66f4339d32d37:0xd6c8fc4c19af4ae9!8m2!3d52.0907374!4d5.1214201!16zL20vMGQ5czU?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Utrecht, Netherlands
            </a>
          </div>
        </Col>
      </Row>
    </div>
    // <div ref={ref} className="contact-section">
    //   <h1>Contact Information</h1>
    //   <Row className="contact-info">
    //     <Col xs={12} md={6}>
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group controlId="formName">
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control
    //             name="name"
    //             type="text"
    //             placeholder="Enter your name"
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             name="email"
    //             type="email"
    //             placeholder="Enter your email"
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formSubject">
    //           <Form.Label>Subject</Form.Label>
    //           <Form.Control
    //             name="subject"
    //             type="text"
    //             placeholder="Enter the subject"
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formMessage">
    //           <Form.Label>Message</Form.Label>
    //           <Form.Control
    //             name="message"
    //             as="textarea"
    //             rows={3}
    //             placeholder="Enter your message"
    //           />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </Col>
    //     <Col xs={12} md={6}>
    //       <div className="contact-item">
    //         <AiOutlineMail />
    //         <a href="mailto:sunithatheresa18@gmail.com">
    //           sunithatheresa18@gmail.com
    //         </a>
    //       </div>
    //       <div className="contact-item">
    //         <AiOutlineLinkedin />
    //         <a
    //           href="https://www.linkedin.com/in/sunitha-arockia-dass-587b8679/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           LinkedIn Profile
    //         </a>
    //       </div>
    //       <div className="contact-item">
    //         <AiOutlineEnvironment />
    //         <a
    //           href="https://www.google.nl/maps/place/Utrecht/@52.0840718,4.9176857,11z/data=!3m1!4b1!4m6!3m5!1s0x47c66f4339d32d37:0xd6c8fc4c19af4ae9!8m2!3d52.0907374!4d5.1214201!16zL20vMGQ5czU?entry=ttu"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Utrecht, Netherlands
    //         </a>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  );
});

export default Contact;
