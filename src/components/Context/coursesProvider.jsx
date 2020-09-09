import React, {component, Component} from "react"
import coursesContext from "./coursesContext"

class CoursesProvider extends Component {
    constructor (props){
        super(props)
        this.state ={
            courses:[
                {
                    "id": 1,
                    "title": "React desde Cero con context API",
                    "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
                    "price": 20,
                    "professor": "Daniel Fuentes"
                }   
            ]
        }
    }

    render(){
        return(
            <coursesContext.Provider value={this.state}>
                {this.props.children}
            </coursesContext.Provider>
        )
    }
}

export default CoursesProvider