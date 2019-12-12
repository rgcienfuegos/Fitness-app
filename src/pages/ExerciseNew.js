import React from 'react';
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/card';

const ExerciseNew = ({ form, onChange, onSubmit }) => (
  <div className="ExerciseNew_Lateral_Spaces row">
    <div className="col-sm ExerciseNew_Card_Space">
      <Card {...form} />
    </div>
    <div className="col-sm ExerciseNew_Form_Space">
      <ExerciseForm onSubmit={onSubmit} onChange={onChange} form={form} />
    </div>
  </div>
);

export default ExerciseNew;
