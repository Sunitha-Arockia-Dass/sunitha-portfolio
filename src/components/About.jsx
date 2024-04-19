import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import AboutPhoto from "../../public/Images/aboutphoto.jpeg";
import { AiOutlineBook, AiOutlineUser } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      <Row className="about-content">
        <h1>About Me</h1>
        <Col xs={12} md={6}>
          <Card className="about-card description-card">
            <Card.Body>
              <div className="text-center">
                <Image src={AboutPhoto} className="rounded-circle" fluid />
              </div>
              <Card className="about-card ">
                <Card.Body>
                  <div className="about-description ">
                    <div className="about-text ">
                      <h3>
                        Hey, I'm Sunitha, your friendly neighborhood web wizard!
                      </h3>
                      <p>
                        Based in Utrecht, Netherlands, I craft digital wonders
                        that dazzle and delight. With a magic wand called HTML,
                        CSS, JavaScript, React, and Vue.js, I turn ideas into
                        eye-catching websites.
                      </p>
                      <p>
                        When I'm not conjuring up code spells, you'll find me
                        soaking up the latest tech buzz, tinkering with new
                        tools, and exploring the endless possibilities of the
                        web.
                      </p>
                      <p>
                        I believe in the power of pixels and pixels, and I'm
                        always ready to team up and tackle exciting projects.
                        So, whether you're a fellow coder, a potential
                        collaborator, or just someone who loves surfing the web,
                        let's join forces and create some online magic!
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="about-card">
            <Card.Body>
              <Row>
                <Col xs={12} md={6}>
                  <Card className="about-card">
                    <Card.Body>
                      <h3>Education</h3>
                      <div className="education-item">
                        <AiOutlineBook />
                        <div>
                          <p>Bachelor of Engineering in Bio-medical</p>
                          <p>08/2010 - 04/2014</p>
                          <p>Jerusalem College of Engineering</p>
                        </div>
                      </div>
                      <div className="education-item">
                        <DiCodeigniter />
                        <div>
                          <p>Web Development Bootcamp</p>
                          <p>06/2023 - 12/2023</p>
                          <p>IRONHACK AMSTERDAM</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card className="about-card">
                    <Card.Body>
                      <h3>Soft Skills</h3>
                      <ul>
                        <li>Effective communication</li>
                        <li>Team player</li>
                        <li>Problem-solving skills</li>
                        <li>Adaptability</li>
                        <li>Time management</li>
                        <li>Continuous learner</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Card className="about-card">
                <Card.Body>
                  <h3>Experiences</h3>
                  <div className="experience-item">
                    <AiOutlineUser />
                    <div>
                      <p>Career Break</p>
                      <p>08/2016 - 05/2023</p>
                    </div>
                    <div>
                      <p>
                        Took a career break to focus on personal development and
                        family responsibilities. During this time, engaged in
                        independent study to enhance skills in frontend
                        development, demonstrating strong communication,
                        continuous learning, and resilience.
                      </p>
                    </div>
                  </div>
                  <div className="experience-item">
                    <AiOutlineUser />
                    <div>
                      <p>Medical Coder</p>
                      <p>07/2015 - 07/2016</p>
                      <p>Intelenet Global Services, Chennai, India</p>
                    </div>
                    <div>
                      <p>
                        Implemented streamlined coding procedures to ensure
                        precise ICD-10 code assignment, contributing to enhanced
                        coding accuracy, efficiency, and operational
                        performance.
                      </p>
                    </div>
                  </div>
                  <div className="experience-item">
                    <AiOutlineUser />
                    <div>
                      <p>Data Indexer</p>
                      <p>05/2014 - 06/2015</p>
                      <p>Scope Eknowledge Center, Chennai, India</p>
                    </div>
                    <div>
                      <p>
                        Applied advanced indexing techniques to mine extensive
                        archives, enriching content value and leading a data
                        enrichment project to improve researcher accessibility
                        and foster innovation.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
});

export default About;
