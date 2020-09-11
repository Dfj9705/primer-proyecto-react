import React, { useContext } from 'react' 
import CourseGrid from '../Organisms/CourseGrid'
import coursesContext from '../Context/coursesContext'

const Courses = () =>{
  const { courses } = useContext(coursesContext);
  return <CourseGrid courses= {courses}/>
}
  
    
    
    
    
  


export default Courses