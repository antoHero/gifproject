import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../ui/Loader';
import SingleGif from './SingleGif';

const Details = () => {
  const params = useParams();
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const GIPHY_API = `https://api.giphy.com/v1/gifs/${params.gifId}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

  const getGif = async () => {
    setIsLoading(true);
    const response = await fetch(GIPHY_API);
    const data = await response.json();
    setGif(data.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getGif();
  }, [params.gifId]);

  return (
    <div>
      {!isLoading && gif === 0 && <h1 className="text-gray-500 text-xs font-light mt-2 text-center">Loading...</h1>}
      <div className="mt-8 px-8">
        <Link to="/" className="bg-indigo-700 text-white p-2 rounded-lg hover:bg-indigo-500">Go back</Link>
      </div>
      { isLoading ? <Loader /> : <SingleGif gif={gif} /> }
    </div>
  );
};

export default Details;
