import React from "react";
import { Col, Container, Carousel, Image, Row, OverlayTrigger, Tooltip ,Button} from 'react-bootstrap';
import Explore from "../../public/Images/explore.svg";
import Git from "../../public/Images/git.png";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      imageUrl: "public/Images/Chiceggs.png",
      title: "Chic & Eggs",
      techs: [
        { id: 1, name: "HTML5", image: "public/Images/html5.png" },
        { id: 2, name: "CSS3", image: "public/Images/css3.png" },
        { id: 3, name: "Javascript", image: "public/Images/javascript.png" },
        { id: 4, name: "git", image: "public/Images/git.png" },
      ],
      github: "https://github.com/Sunitha-Arockia-Dass/Chic-Eggs",
      website: "https://sunitha-arockia-dass.github.io/Chic-Eggs/",
      description:
        "Chic & Eggs is an engaging word puzzle game that challenges players with limited trials and offers a range of difficulty levels to suit every player. Test your vocabulary and strategic skills as you navigate through a series of challenging word puzzles. With its sleek design and intuitive gameplay, Chic & Eggs is the perfect brain-teaser for puzzle enthusiasts of all ages.",
    },
    {
      id: 2,
      imageUrl: "public/Images/HEALTH.png",
      title: "H.E.A.L.T.H",
      github: "https://github.com/Sunitha-Arockia-Dass/HEALTH",
      website: "https://kind-pink-iguana-gown.cyclic.app/",
      techs: [
        { id: 1, name: "HTML5", image: "public/Images/html5.png" },
        { id: 2, name: "CSS3", image: "public/Images/css3.png" },
        { id: 3, name: "Javascript", image: "public/Images/javascript.png" },
        { id: 4, name: "Handlebars", image: "public/Images/handlebarsjs.png" },
        { id: 5, name: "Git", image: "public/Images/git.png" },
        { id: 6, name: "Nodejs", image: "public/Images/nodejs.png" },
        { id: 7, name: "MongoDB", image: "public/Images/mongodb.png" },
        { id: 8, name: "NPM", image: "public/Images/npm.jpg" },
        { id: 9, name: "ExpressJs", image: "public/Images/express.jpg" },
        { id: 10, name: "Axios", image: "public/Images/axios.jpg" },
        { id: 11, name: "API", image: "public/Images/api.png" },
      ],
      description:
        "H.E.A.L.T.H offers two main functions. Firstly, it helps you calculate your BMI (Body Mass Index) and provides personalized diet recommendations based on whether you aim to lose or gain weight. Moreover, H.E.A.L.T.H tracks your BMI progression over time, presenting it in a simple-to-read graph for effective health monitoring. Secondly, it serves as a convenient calendar to keep track of your appointments. The added bonus is that you can create profiles for yourself and your loved ones, allowing you to manage their health information and appointments as well.",
    },
    {
      id: 3,
      imageUrl: "public/Images/SThospital.png",
      title: "ST Hospital",
      github: "https://github.com/Sunitha-Arockia-Dass/ST-Hospital-Client",
      website: "https://musical-buttercream-e1a1d2.netlify.app/",
      techs: [
        { id: 1, name: "HTML5", image: "public/Images/html5.png" },
        { id: 2, name: "CSS3", image: "public/Images/css3.png" },
        { id: 3, name: "Javascript", image: "public/Images/javascript.png" },
        { id: 4, name: "Handlebars", image: "public/Images/handlebarsjs.png" },
        { id: 5, name: "Git", image: "public/Images/git.png" },
        { id: 6, name: "Nodejs", image: "public/Images/nodejs.png" },
        { id: 7, name: "MongoDB", image: "public/Images/mongodb.png" },
        { id: 8, name: "NPM", image: "public/Images/npm.jpg" },
        { id: 9, name: "ExpressJs", image: "public/Images/express.jpg" },
        { id: 10, name: "React", image: "public/Images/react.png" },
        { id: 11, name: "Gsap", image: "public/Images/gsap.png" },
        { id: 12, name: "Axios", image: "public/Images/axios.jpg" },
        { id: 13, name: "API", image: "public/Images/api.png" },
      ],
      description:
        "H.E.A.L.T.H offers BMI calculation with personalized diet recommendations and tracks BMI progression over time. Additionally, it serves as a convenient calendar for appointments and allows profile creation to manage health information and appointments for yourself and your loved ones.F",
    },
    {
      id: 4,
      imageUrl: "public/Images/portfolio.png",
      title: "Portfolio",
      github: "https://github.com/Sunitha-Arockia-Dass/portfolio",
      website: "https://sunitha-arockia-dass.github.io/portfolio/",
      techs: [
        { id: 1, name: "React", image: "public/Images/react.png" },
        {
          id: 2,
          name: "React Bootstrap",
          image: "public/Images/reactbootstrap.png",
        },
        { id: 3, name: "Javascript", image: "public/Images/javascript.png" },
        { id: 4, name: "HTML5", image: "public/Images/html5.png" },
        { id: 5, name: "CSS3", image: "public/Images/css3.png" },
      ],
      description:
        "Explore my curated showcase of frontend projects, demonstrating expertise in HTML, CSS, JavaScript, and React.js. From responsive layouts to dynamic features and API integration, each project reflects a commitment to creating impactful user experiences. Get a glimpse of my skills below and reach out for collaboration or inquiries.",
    },
  ];

  return (
    <div ref={ref} className="projects-container">
      <h1>Projects</h1>
      <Carousel fade prevLabel="" nextLabel="">
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <Container>
              <Row>
                <Col>
                  <div className="project-image-container">
                    <Image
                      className="project-image"
                      src={project.imageUrl}
                      fluid
                    />
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <div className="project-caption">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="tech-images-container">
                      {project.techs.map((tech,index) => (
                        <div key={tech.id} className="tech-slide">
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip id={`tooltip-${index}`}>
                                {tech.name}
                              </Tooltip>
                            }
                          >
                            <Image
                              src={tech.image}
                              className="projects-tech-image"
                              fluid
                              rounded
                            />
                          </OverlayTrigger>
                        </div>
                      ))}
                    </div>
                    <div className="project-btns">
                      <Button>
                        <a
                          href={project.github}
                          target="_blank"
                          className="custom-link"
                        >
                          <Image src={Git} fluid rounded />
                          Repository
                        </a>
                      </Button>
                      <Button>
                        <a
                          href={project.website}
                          target="_blank"
                          className="custom-link"
                        >
                          <Image src={Explore} fluid rounded />
                          Explore
                        </a>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            1
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
});

export default Projects;
