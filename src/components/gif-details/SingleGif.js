import React from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';

const SingleGif = ({ gif }) => (
  <>
    <div className="dark:bg-gray-300 mt-10">
      <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
        <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
          <div className="md:mt-3">
            <p className="text-white dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">{gif.title}</p>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-y-6">
            <div>
              <p className="text-white dark:text-white text-sm lg:text-base font-medium leading-none">
                Author:
                {' '}
                <span className="font-semibold md:font-medium">{gif.user?.display_name}</span>
              </p>
            </div>
            <div>
              <p className="text-white dark:text-white text-sm lg:text-base font-medium leading-none">
                Date Posted:
                {' '}
                <span className="font-semibold md:font-medium">
                  {moment(gif.import_datetime).format('LTS')}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
          <img className="w-full" src={gif.images?.fixed_height.url} alt={gif.user?.username} />
        </div>
      </div>
    </div>
  </>
);

export default SingleGif;
