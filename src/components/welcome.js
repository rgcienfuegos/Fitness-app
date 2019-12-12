import React from 'react';
import './css/welcome.css';

// a este tipo de componentes se le denominan "funcionales" y es la forma mas facil de hacer un componente sencillo

// en esta clase de componentes no se trabaja con el estado ni el ciclo de vida de los componentes

const Welcome = ({ username }) => (
  <div className="container">
    <div className="Fitness-User-Info">
      <h1>Hello {username}!</h1>
      <p>Let's workout to get someone gains!</p>
    </div>
  </div>
);

export default Welcome;
