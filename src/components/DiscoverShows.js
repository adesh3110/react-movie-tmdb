import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularShows = () => {
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

  return (
    <div className='container mx-auto my-8'>
      <h3 className='text-2xl font-bold text-green-600 mb-4'>
        Popular TV Shows
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {shows
          .filter((e, index) => index <= 6)
          .map((show) => (
            <div key={show.id} className='bg-white p-4 rounded-lg shadow-md'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                alt={show.name}
                className='w-full h-64 object-cover rounded-lg mb-2'
              />
              <h4 className='text-gray-800 text-lg font-bold'>{show.name}</h4>
            </div>
          ))}
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white'>
          <div className='bg-gray-200 w-full h-full'>
            <div className='flex items-center justify-center h-full bg-gray-400 '>
              <Link
                to={"/trending-shows"}
                className='bg-gray-500 text-black-500 font-semibold py-3 px-6 rounded-full shadow-lg  hover:text-white transition duration-300 ease-in-out transform hover:scale-105'
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularShows;
