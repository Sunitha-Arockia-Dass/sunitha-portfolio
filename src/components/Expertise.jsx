
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import HTML from "../../public/Images/html5.png"

const Expertise = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='expertise'>
      <h1>Mastering the Craft</h1> 
      <Container className="d-flex justify-content-center">
        <Row>
          <Col xs={6} md={2}>
            <Image src={HTML} fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\css3.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\javascript.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\javascriptes6.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\react.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\vuejs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\nodejs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\express.jpg" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\mongodb.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\nextjs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\npm.jpg" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\bootstrap.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\reactbootstrap.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\gsap.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\git.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\handlebarsjs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\axios.jpg" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="public\Images\api.png" fluid rounded />
          </Col>
                  </Row>
      </Container>
    </div>
  );
});

export default Expertise;
