import React from 'react';

const Card = ({ movie }) => {
  return (
    <div className='movieCard'>
      <h2>{movie.title}</h2>
      <h4>{movie.release_date}</h4>
    </div>
  );
};

export default Card;
