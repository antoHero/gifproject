import React, { useState, useEffect } from 'react';
import GifList from '../gif-list/GifList';
import Search from '../search/Search';
import type { RouteObject } from "react-router-dom";
import Loader from '../ui/Loader'
import { Outlet, Link, useRoutes, Routes, Route, useParams, Switch } from "react-router-dom";

const Home = () => {
	const [gifs, setGifs] = useState([]);
  	const [isLoading, setIsLoading] =  useState(false);
  	const [term, setTerm] = useState("");
  	const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&offset=0&rating=Y&lang=en&q=${term ? term : 'wow'}`

  	const getGifs = async () => {
    	setIsLoading(true)
    	const response = await fetch(GIPHY_API);
    	const data = await response.json();
    
    	// console.log(data.data)
    	setGifs(data.data);
    	setIsLoading(false);
  	}
  	
  	useEffect(() => {
    	getGifs();
  	}, [term]);

  	return (
    	<>
      		<div className="container mx-auto">
	      		<div class="hero-headline flex flex-col items-center justify-center pt-24 text-center">
	                <h1 class=" font-bold text-3xl text-gray-900">Stunning React app for gifs</h1>
	                <p class=" font-base text-base text-gray-600">high quality gifs for giphy api.</p>
	            </div>
        		<Search searchGif={(text) => setTerm(text)} />

        		{!isLoading && gifs.length === 0 && <h1 className="text-gray-500 text-xs font-light mt-2 text-center">No gifs found, enter a search term</h1>}

        		{isLoading ? <Loader /> : <GifList gifs={gifs} /> }

      		</div>

    	</>
    )
}

export default Home;