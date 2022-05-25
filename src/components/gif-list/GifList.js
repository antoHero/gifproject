import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../gifcard/Card';

const GifList = ({ gifs }) => (
  <div>
    <div className="grid grid-cols-3 gap-4">
      {
          gifs.map((gif) => (
            <div key={gif.id}>
              <Link to={`/details/${gif.id}`}>
                <Card key={gif.id} gif={gif} />
              </Link>
            </div>
          ))
        }
    </div>
  </div>
);

export default GifList;
