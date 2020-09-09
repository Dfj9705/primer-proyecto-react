import React, {component, Component} from "react"
import coursesContext from "./coursesContext"
import Axios from "axios"

class CoursesProvider extends Component {
    constructor (props){
        super(props)
        this.state ={
            courses:[]
        }
    }

    componentDidMount(){
        Axios.get("http://my-json-server.typicode.com/Dfj9705/json-db/cursos")
        .then(response=>this.setState({
          courses: response.data
        }
        ))
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