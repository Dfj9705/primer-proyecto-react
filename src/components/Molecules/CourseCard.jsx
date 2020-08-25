import React from 'react'
import Proptypes from 'prop-types'
import {Link} from "react-router-dom"

const CourseCard = ({id,title,image,price, professor}) =>(
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
            <a className="button--ghost-alert button--tiny" href="https:/ed.team">$ {`${price}`}</a>
          </div>
          
        </div>
    </article>
)

CourseCard.propTypes = {
  title : Proptypes.string,
  image : Proptypes.string,
  precio : Proptypes.number,
  professor : Proptypes.string,
}

CourseCard.defaultProps = {
  title : "No hay titulo",
  image : "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
  precio : "--",
  professor : ''
}



export default CourseCard