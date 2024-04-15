import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectsCarousel = ({ projects }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Number of slides to show at once
      slidesToScroll: 1 // Number of slides to scroll
    };
  
    return (
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id}>
            {/* Render your project content here */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Slider>
    );
  };
  
  export default ProjectsCarousel;
  