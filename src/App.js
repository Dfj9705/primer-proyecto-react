import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
  {
    "title" : "React desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price" : 20,
    "profesor" : "Daniel Fuentes"
  },
  {
    "title" : "HMTL desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/a9913502-8af2-400b-8095-7b78f52200dc.png",
    "price" : 25,
    "profesor" : "Javier Fuentes"
  },
  {
    "title" : "GO desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price" : 30,
    "profesor" : "Abner Fuentes"
  },
  {
    "title" : "CSS desde Cero",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
    "price" : 10,
    "profesor" : "Daniel Fuentes"
  }
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://www.technocrazed.com/wp-content/uploads/2015/12/city-wallpaper-34.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EdTeam</p>
            <p> Tu futuro te esta esperando</p>
            <a href="https:/ed.team" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      {
        cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/>)
      }
     
     
    </div>
  </>
)

export default App;
