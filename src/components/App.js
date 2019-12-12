import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExercisesContainer from '../pages/exerciseContainer';
import ExerciseNewContainer from '../pages/exercisesNewContainer';
import NotFound from '../pages/notFound';

// Para los componentes funcionales podemos usar arrow funcitons para simplificar un poco nuestro codigo

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/exercise" component={ExercisesContainer} />
      <Route exact path="/exercise/new" component={ExerciseNewContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
