import React from 'react';
import './css/addNewExercise.css';
import { Link } from 'react-router-dom';

const AddNewExercise = props => (
  <div className="container">
    <div className="button-container">
      <Link className="add-new-exercise" to="/exercise/new">
        <img src={props.img} alt="addcard" />
      </Link>
    </div>
  </div>
);

export default AddNewExercise;
