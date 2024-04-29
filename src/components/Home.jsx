import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import sunitha from "../../public/Images/sunitha.jpeg";

const Home = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="home-section">
      <Container>
        <Row>
          <h1>Welcome to my Portfolio</h1>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center landing"
          >
            <div className="landing-description">
              <p>
                I am <b>Sunitha Josephine Theresa Arockia Dass</b>
              </p>
              <p>
                Aspiring <b>Full Stack Web Developer / Frontend Developer</b>{" "}
                based in <b>Utrecht, Netherlands.</b>
              </p>
              <p>
                As a frontend developer, I specialize in creating visually
                appealing and user-friendly web applications. Here, you'll find
                a collection of my projects demonstrating my skills in
                <b> HTML</b>,<b> CSS</b>, <b> JavaScript</b>, and various
                <b> frontend frameworks</b>. Feel free to explore my work and
                don't hesitate to reach out for collaboration opportunities or
                inquiries.
              </p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center landing"
          >
            <Image
              className="home-img text-center"
              src={sunitha}
              alt="Sunitha Josephine Theresa Arockia Dass"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Home;
