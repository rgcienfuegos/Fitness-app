import React from 'react';
import ExerciseList from '../components/exerciseList';
import Welcome from '../components/welcome';
import AddNewExercise from '../components/addNewExercise';

const Exercises = ({ data }) => (
  <React.Fragment>
    <Welcome username="Jerson" />
    <ExerciseList exercises={data} />
    <AddNewExercise img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" />
  </React.Fragment>
);

export default Exercises;
