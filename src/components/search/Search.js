import React, {useState} from 'react';

const Search = ({ searchGif }) => {

	const [text, setText] = useState("");

	const submit = (e) => {
		e.preventDefault();

		searchGif(text)
	}

	return (
		<div>
			<div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
			
				<form onSubmit={submit} className="">
					<div className="flex items-center border-b borber-b-2 border-indigo-500 py-2">
						<input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search gifs..." type="text"/>
						<button className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-300 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
							Search
						</button>
					</div>
				</form>
				
			</div>
		</div>
	)
}

export default Search;