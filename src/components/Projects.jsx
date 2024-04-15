// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image from 'react-bootstrap/Image'; // Import Image component from react-bootstrap
// import { SamplePrevArrow, SampleNextArrow } from './SampleArrow'


// const Projects = React.forwardRef((props, ref) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />
//   };

//   const projects = [
//     { id: 1, imageUrl: "/Images/Chiceggs.png", title: "Chic & Eggs", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
//     { id: 2, imageUrl: "/Images/HEALTH.png", title: "H.E.A.L.T.H", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
//     { id: 3, imageUrl: "/Images/SThospital.png", title: "ST Hospital", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
//     { id: 4, imageUrl: "/Images/javascript.png", title: "Portfolio", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
//   ];
  

//   return (
//     <div ref={ref} className='projects'>
//       <h1>Projects Parade</h1>
//       <Slider {...settings}>
//         {projects.map(project => (
//           <div key={project.id}>
//             <Image src={project.imageUrl} fluid rounded />
//             <h3>{project.title}</h3>
//             <h4>Techs used</h4>

//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// });

// export default Projects;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'react-bootstrap/Image'; // Import Image component from react-bootstrap
import { SamplePrevArrow, SampleNextArrow } from './SampleArrow';

const Projects = React.forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  const projects = [
    { id: 1, imageUrl: "/Images/Chiceggs.png", title: "Chic & Eggs", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
    { id: 2, imageUrl: "/Images/HEALTH.png", title: "H.E.A.L.T.H", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
    { id: 3, imageUrl: "/Images/SThospital.png", title: "ST Hospital", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
    { id: 4, imageUrl: "/Images/javascript.png", title: "Portfolio", techs: [{ id: 1, name: "HTML5", image: "/Images/html5.png" }], description: "test" },
  ];

  return (
    <div ref={ref} className='projects'>
      <h1>Projects Parade</h1>
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id} className="project-slide">
            <Image src={project.imageUrl} fluid rounded />
            <div className="project-details">
              <h3>{project.title}</h3>
              <h4>Techs used</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default Projects;
