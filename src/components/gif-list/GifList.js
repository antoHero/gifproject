import React from 'react';
import Card from '../gifcard/Card';
import { Link } from "react-router-dom";

const GifList = ({ gifs }) => {

	return (
		<div>

		<div className="grid grid-cols-3 gap-4">
        {gifs.map((gif, index) => (
        	<div key={gif.id}>
        		<Link to={`/details/${gif.id}`} >
          		<Card key={gif.id} gif={gif} />
          	</Link>
          </div>
        ))}

        </div>

		</div>
	)
}

export default GifList;