// Home.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="home">
      <Container>
        <Row>
          <Col xs={6}>
            <h4>Welcome to Sunitha's Page</h4>
            <p>
              I am <b>Sunitha Josephine Theresa Arockia Dass</b>
            </p>
            <p>
              Aspiring <b>Full Stack Web Developer</b> based in{" "}
              <b>Utrecht, Netherlands.</b>
            </p>
            <p>
              An enthusiastic individual with a drive to excel in my career and
              contribute to impactful projects, I'm excited to showcase my work
              and express my dedication to web development. Let's collaborate to
              craft innovative digital solutions and shape a promising future
              together!
            </p>
          </Col>
          <Col
            sm={4}
            className="d-flex justify-content-center align-items-center">
            <img
              className="home-img"
              src="public\Images\sunitha.jpeg"
              alt="pic error"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Home;
