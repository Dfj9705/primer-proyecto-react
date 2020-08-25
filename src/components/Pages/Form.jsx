import React, {Component} from 'react'

class form extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "",
            mail: "",
            fecha: new Date()
        }

        this.updateField = this.updateField.bind(this)
        this.updateDate = this.updateDate.bind(this)
    }

    updateField( {value}, type ){
        
        this.setState({[type] : value})
    }

    updateDate(){
        this.setState({
            fecha: new Date()
        })
    }
    render(){
       
        return(
            <div className='ed-grid'>
                <h1>Formulario {this.props.name}</h1>
               
                <form id="form-element">
                    <div className="ed-grid m-grid-2" >
                        
                        <div className="form__item">
                            <label htmlFor="name">Nombre Completo</label>
                            <input type="text" onChange={e => this.updateField(e.target, "name")}/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="email">Correo Electrónico </label>
                            <input type="email" onChange={e => this.updateField(e.target, "mail")}/>
                        </div>
                        
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu Correo es ${this.state.mail}`}</span>
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

export default form