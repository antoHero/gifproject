import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GifList from '../gif-list/GifList';
// import Search from '../search/Search';
import Loader from '../ui/Loader';

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const GIPHY_API = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&offset=0&rating=Y&lang=en`;

  const getGifs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(GIPHY_API);
      const data = await response.json();
      setGifs(data.data);
    } catch (e) {
      setTimeout(() => 4000);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getGifs();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const results = await axios('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: search,
        },
      });
      setGifs(results.data.data);
    } catch (err) {
      setTimeout(() => 4000);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
          <h1 className=" font-bold text-3xl text-gray-900">Stunning React app for gifs</h1>
          <p className=" font-base text-base text-gray-600">high quality gifs for giphy api.</p>
        </div>
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
          <form className="">
            <div className="flex items-center border-b borber-b-2 border-indigo-500 py-2">
              <input onChange={handleSearchChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search gifs..." type="text" />
              <button onClick={handleSubmit} className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-300 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        {!isLoading && gifs.length === 0 && <h1 className="text-gray-500 text-xs font-light mt-2 text-center">No gifs found, enter a search term</h1>}
        { isLoading ? <Loader /> : <GifList gifs={gifs} /> }
      </div>
    </div>
  );
};
export default Home;
