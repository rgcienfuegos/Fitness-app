import React from 'react';
import './css/card.css';
import circlesImg from '../images/circles.png';
import emptyImg from '../images/empty.png';

const Card = ({ title, description, img, leftColor, rightColor }) => (
  <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor ||
            '#56CCf2'}, ${rightColor || '#2F80ED'})`
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img || emptyImg} alt="sport" className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info ">
              <h1>{title || 'Title'}</h1>
              <p>{description || 'Description Here'}</p>
            </div>
          </div>
        </div>
      </div>
)


export default Card;
