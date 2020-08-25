import React from 'react' 
import CourseCard from '../Molecules/CourseCard'

const courses = [
  {
      "id" : 1,
    "title" : "React desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price" : 20,
    "professor" : "Daniel Fuentes"
  },
  {
      "id" : 2,
    "title" : "HMTL desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png",
    
    "price" : 25,
    "professor" : "Javier Fuentes"
  },
  {
      "id" : 3,
    "title" : "GO desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/a9913502-8af2-400b-8095-7b78f52200dc.png",
    "price" : 30,
    "professor" : "Abner Fuentes"
  },
  {
      "id" : 4,
    "title" : "CSS desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
    "price" : 10,
    "professor" : "Daniel Fuentes"
  }
]

const CourseGrid = () =>(
    <div className="ed-grid m-grid-4">
        {courses.map(c =>(
            <CourseCard
                key= {c.id}
                id= {c.id}
                title= {c.title}
                image= {c.image}
                price= {c.price}
                professor= {c.professor}
            />
        ))}
    </div>
)

export default CourseGrid