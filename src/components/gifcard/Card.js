import React from 'react';

const Card = ({ gif }) => (

  <div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={gif.images.fixed_height.url} className="w-full" alt="" />
    </div>
  </div>
);

export default Card;
