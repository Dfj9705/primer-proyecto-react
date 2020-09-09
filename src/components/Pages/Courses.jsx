import React from 'react' 
import CourseGrid from '../Organisms/CourseGrid'
import coursesContext from '../Context/coursesContext'




const Courses = () =>(

    <coursesContext.Consumer>
      { context =>  <CourseGrid courses= {context.courses}/>}
     
    </coursesContext.Consumer>
)
  
    
    
    
    
  


export default Courses