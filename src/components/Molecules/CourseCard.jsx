import React, { useContext } from 'react'
import Proptypes from 'prop-types'
import {Link} from "react-router-dom"
import CartContext from '../Context/Cart/CartContext'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../Context/Cart/actions'

const CourseCard = ({id,title,image,price, professor}) =>{

  const [state, dispatch] = useContext(CartContext)


  return (
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
            {
              state.cart.find(c => c === id )
              ? <button 
                onClick={()=>dispatch({
                  type: REMOVE_FROM_CART,
                  course: id
                })}
                className="button--ghost-alert button--tiny">
                  Remover del carrito
                </button>
              : <button 
                  onClick={()=>dispatch({
                    type: ADD_TO_CART,
                    course: id
                  })} 
                  className="button--ghost-alert button--tiny">$ {`${price}`}
                </button>
            }
          </div>
          
        </div>
    </article>
)
}

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



export default CourseCard