// About.jsx
import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='about'>
     <h1>About</h1> 
    </div>
  );
});

export default About;
