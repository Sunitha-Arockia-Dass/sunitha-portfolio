import React from 'react'

const Projects = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='projects'>
        <h1>Projects</h1>
      </div> 
       )
})

export default Projects

