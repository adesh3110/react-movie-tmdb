import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPopularShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/tv", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGFjMTJhY2UyOTA0ZjQ1YjAzZjY3NDc0M2IxZWY4MCIsInN1YiI6IjY1ZGQ3MzU3MjRiMzMzMDE2MmI2YjE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f9xnWlSu62DpzmK37hzxqFrmAAHTX_EvocGP3EqnqGM",
      },
    })
      .then((response) => response.json())
      .then((data) => setShows(data.results));
  }, []);

  const truncateOverview = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className='container mx-auto my-8'>
      <h3 className='text-2xl font-bold text-green-600 mb-4'>
        Popular TV Shows
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {shows.map((show) => (
          <div
            key={show.id}
            className='relative bg-white p-4 rounded-lg shadow-md group'
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
              alt={show.name}
              className='w-full h-64 object-cover rounded-lg mb-2'
            />
            <h4 className='text-gray-800 text-lg font-bold'>{show.name}</h4>
            <div className='absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white text-center p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity'>
              <div className='flex flex-col mb-4'>
                <div> {truncateOverview(show.overview, 100)}</div>

                <Link
                  to={`/tv-show/${show.id}`}
                  className='bg-gray-500 text-black-500 font-semibold py-3 px-6 rounded-full shadow-lg  hover:text-white transition duration-300 ease-in-out transform hover:scale-105 w-1/2 mx-auto mt-4 '
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPopularShows;
