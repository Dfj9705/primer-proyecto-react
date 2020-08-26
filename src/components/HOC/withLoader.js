import React, {Component} from "react"

const withLoader = (propvalue) => (WrappedComponent) =>{
    return class WithLoader extends Component{
        constructor(props){
            super(props)
        }

        render(){
            return this.props[propvalue].length === 0
            ? <h1 className="t3">Cargando...</h1>
            : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader