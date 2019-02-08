import './Card.css';
import React from 'react';

function Card(props) {
  console.log(props)
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={ () => props.onDeleteCard(props)} type='button'>Delete</button>
    </div>
    
  );
}

export default Card;
