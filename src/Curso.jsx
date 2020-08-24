import React from 'react'
import Proptypes from 'prop-types'
import {Link} from "react-router-dom"

const Curso = ({id,title,image,price, profesor}) =>(
    <article className="card" id={title}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <Link to={`/cursos/${id}`}>
            <img src={image} alt={title}/>
          </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="center">{title}</h3>
          <div className="s-main-center">
            <span>{`${profesor}`}</span>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https:/ed.team">$ {`${price}`}</a>
          </div>
          
        </div>
    </article>
)

Curso.propTypes = {
  title : Proptypes.string,
  image : Proptypes.string,
  precio : Proptypes.number,
  profesor : Proptypes.string,
}

Curso.defaultProps = {
  title : "No hay titulo",
  image : "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
  precio : "--",
  profesor : ''
}



export default Curso