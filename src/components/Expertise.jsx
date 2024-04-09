
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Expertise = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='expertise'>
      <h1>Mastering the Craft</h1> 
      <Container className="d-flex justify-content-center">
        <Row>
          <Col xs={6} md={2}>
            <Image src="\Images\html5.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\css3.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\javascript.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\javascriptes6.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\react.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\vuejs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\nodejs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\expressjs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\mongodb.jpg" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\nextjs.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\npm.jpg" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\bootstrap.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\reactbootstrap.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\gsap.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\git.png" fluid rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="\Images\handlebarsjs.png" fluid rounded />
          </Col>
                  </Row>
      </Container>
    </div>
  );
});

export default Expertise;
