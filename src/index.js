import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'Raul',
  LastName: 'Palacios',
  avatar: 'https://s.gravatar.com/avatar/c02f20e05bd274bf4e18067a4196bd54?s=80'
};

function getName(user) {
  return `${user.firstName} ${user.LastName}`;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello {getName(user)}</h1>;
  }
  return <h1>Hello Strange</h1>;
}

const name = 'Jerson';
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
);
const container = document.getElementById('root');

// ReactDOM.render(___QUE____,__DONDE____);

ReactDOM.render(element, container);
