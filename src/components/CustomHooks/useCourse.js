import {useState, useEffect} from "react"
import Axios from "axios"

const useCourse = (id)=>{
    const [course, setCourse] = useState({})

    useEffect(()=>{
        Axios.get(`http://my-json-server.typicode.com/Dfj9705/json-db/cursos/${id}`)
        .then(resp => setCourse(resp.data))
      },[])

    return course
}

export default useCourse