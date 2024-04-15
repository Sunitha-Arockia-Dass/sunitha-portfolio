// Contact.jsx
import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='contact'>
      <h1>Contact <Sunitha>Sunitha</Sunitha></h1>
    </div>
  );
});

export default Contact;
