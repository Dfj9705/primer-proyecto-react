import React from 'react';
import "../styles/styles.scss";
import Course from "./Pages/Course"
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home'


const App = () => (
  <Router>
    <MainMenu />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/cursos/:id" component={Course}/>
    <Route path="/cursos" component={CourseGrid}/>
    <Route path="/historial/:valor" component={History}/>
    <Route path="/historial" component={History}/>
    <Route path="/formulario" component={() => <Form name="de Contacto"/>}/>
    <Route component ={() => (
      <div className="ed-grid">
        <h1>Error 404</h1>
        <span>Página no encontrada</span>
      </div>
    )}/>
    </Switch>
  </Router>
)

export default App;
