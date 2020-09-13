import React from 'react';
import "../styles/styles.scss";
import CoursesProvider from './Context/coursesProvider';
import AppRoutes from './AppRoutes';
import CartProvider from './Context/Cart/CartProvider';
//comentario
//otro comentario
const App = () => (
  <CoursesProvider>
    <CartProvider>
      <AppRoutes/>
    </CartProvider>
  </CoursesProvider>
)

export default App;
