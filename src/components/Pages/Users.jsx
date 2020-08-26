import React, {Component} from "react"
import UserGrid from "../Organisms/UserGrid"
import Axios from "axios"


class Users extends Component {

    constructor(props){
        super(props)
        this.state= {
            users: []
        }
    }
    //usando fetch nativo
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users',{method:"get"})
    //     .then(response => response.json())
    //     .then(response2 => {
    //         this.setState({
    //             users: response2
    //         })
    //     })
    // }

    //usando axios
    componentDidMount(){
        //libreria json placeholder
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(resp => {
            this.setState({
                users: resp.data
            })
        })
    }

    render(){
        const {users} = this.state
        return(
            <UserGrid users={users}/>

        )
    }
}

export default Users