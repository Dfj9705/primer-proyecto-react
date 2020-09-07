import React from 'react'
import Proptypes from 'prop-types'
import {Link} from "react-router-dom"
import { addToCart } from '../../redux/actionCreators'
import {connect} from "react-redux"

const CourseCard = ({id,title,image,price, professor,addCourseToCart, cart}) =>(
    <article className="card" id={title}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <Link to={`/cursos/${id}`}>
            <img src={image} alt={title}/>
          </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="center">{title}</h3>
          <div className="s-main-center">
            <span>{`${professor}`}</span>
          </div>
          <div className="s-main-center">
            <button 
              className="button--ghost-alert button--tiny"
              onClick={()=> addCourseToCart(id)}
            >
              { cart.find(a => a=== id)
                  ? `Agregado al carrito`
                  :`$ ${price}`
              }
            </button>
          </div>
          
        </div>
    </article>
)

CourseCard.propTypes = {
  title : Proptypes.string,
  image : Proptypes.string,
  price : Proptypes.number,
  professor : Proptypes.string,
}

CourseCard.defaultProps = {
  title : "No hay titulo",
  image : "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
  price : "--",
  professor : ''
}


const mapStateToProps = state =>({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  addCourseToCart(id){
    dispatch(addToCart(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)