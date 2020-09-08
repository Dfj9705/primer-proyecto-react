import React from 'react';
import "../styles/styles.scss";
import AppRoutes from './AppRoutes';
import {Provider} from "react-redux"
import store from "../redux/store"
import { getCourseList } from '../redux/actionCreators';
store.dispatch(getCourseList())
const App = () => (
  // provee de un flujo de informacion
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)

export default App;
