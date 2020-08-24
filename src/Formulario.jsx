import React, {Component} from 'react'

class Formulario extends Component{

    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarCampo.bind(this)
        this.cambiarNombre = this.cambiarFecha.bind(this)
    }

    cambiarCampo( {value}, type ){
        
        this.setState({[type] : value})
    }

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }
    render(){
       
        return(
            <div className='ed-grid'>
                <h1>Formulario {this.props.name}</h1>
               
                <form id="elemento">
                    <div className="ed-grid m-grid-2" >
                        
                        <div className="form__item">
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input type="text" onChange={e => this.cambiarCampo(e.target, "nombre")}/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="email">Correo Electrónico </label>
                            <input type="email" onChange={e => this.cambiarCampo(e.target, "correo")}/>
                        </div>
                        
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount(){
       
    }

    componentDidUpdate(prevProps,prevState){
       
        // console.log(prevState)
    }

    componentWillUnmount(){
        
    }
}

export default Formulario