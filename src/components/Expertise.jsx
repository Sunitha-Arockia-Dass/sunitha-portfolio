import React from "react";
import {
  Col,
  Container,
  Image,
  Row,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import HTML from "../../public/Images/html5.png";
import CSS from "../../public/Images/css3.png";
import JavaScript from "../../public/Images/javascript.png";
import JavaScriptES6 from "../../public/Images/javascriptes6.png";
import ReactImage from "../../public/Images/react.png";
import VueJS from "../../public/Images/vuejs.png";
import NodeJS from "../../public/Images/nodejs.png";
import Express from "../../public/Images/express.jpg";
import MongoDB from "../../public/Images/mongodb.png";
import NextJS from "../../public/Images/nextjs.png";
import NPM from "../../public/Images/npm.jpg";
import Bootstrap from "../../public/Images/bootstrap.png";
import ReactBootstrap from "../../public/Images/reactbootstrap.png";
import GSAP from "../../public/Images/gsap.png";
import Git from "../../public/Images/git.png";
import HandlebarsJS from "../../public/Images/handlebarsjs.png";
import Axios from "../../public/Images/axios.jpg";
import API from "../../public/Images/api.png";

const Expertise = React.forwardRef((props, ref) => {
  const technologies = [
    { name: "HTML", src: HTML },
    { name: "CSS", src: CSS },
    { name: "JavaScript", src: JavaScript },
    { name: "JavaScript ES6", src: JavaScriptES6 },
    { name: "React", src: ReactImage },
    { name: "Vue.js", src: VueJS },
    { name: "Node.js", src: NodeJS },
    { name: "Express", src: Express },
    { name: "MongoDB", src: MongoDB },
    { name: "Next.js", src: NextJS },
    { name: "NPM", src: NPM },
    { name: "Bootstrap", src: Bootstrap },
    { name: "React Bootstrap", src: ReactBootstrap },
    { name: "GSAP", src: GSAP },
    { name: "Git", src: Git },
    { name: "Handlebars.js", src: HandlebarsJS },
    { name: "Axios", src: Axios },
    { name: "API", src: API },
  ];

  return (
    <div ref={ref} className="expertise ">
      <h1>Mastering the Craft</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          {technologies.map((tech, index) => (
            <Col key={index} xs={6} md={2}>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
              >
                <Image src={tech.src} fluid rounded />
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
});

export default Expertise;
