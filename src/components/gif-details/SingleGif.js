import React from 'react';
import moment from "moment";
const SingleGif = ({ gif }) => {

	return (
		<>
			<div className="mx-auto overflow-hidden px-8 py-8">
		        <div className="flex mt-8 py-12 flex-col-reverse lg:flex-row w-full bg-white shadow rounded">
		        	<div className="w-full lg:w-1/2">
		            	<div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
		              		<div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
		                		<h4 className="text-base text-indigo-700 dark:text-indigo-600 tracking-normal leading-4">Posted at: {moment(gif.import_datetime).format("LTS")}</h4>
		                		<h4 className="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">Posted on: {moment(gif.import_datetime).format("MMM Do YYYY")}</h4>
		              		</div>
		              
		              		<h2 className="text-gray-800 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">{gif.title}</h2>
		                        
		              		<div className="flex lg:items-center items-start flex-col lg:flex-row">
		                		<div className="flex items-center">
		                  			<div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
		                    			<img className="w-full h-full overflow-hidden object-cover rounded-full" src="{gif.user.profile_url}" alt="avatar" />
		                  			</div>
		                  			<p className="text-gray-600 text-xs font-normal ml-1">{gif.user?.display_name}</p>
		                		</div>
		              		</div>
		            	</div>
		          	</div>
		          	<div className="relative w-full h-full lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
		            	<img className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none" src={gif.images?.fixed_height.url} alt={gif.user?.username} />
		          	</div>
		        </div>
		     </div>
		</>
	)

}

export default SingleGif;