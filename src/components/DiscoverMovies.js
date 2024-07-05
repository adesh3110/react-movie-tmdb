import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGFjMTJhY2UyOTA0ZjQ1YjAzZjY3NDc0M2IxZWY4MCIsInN1YiI6IjY1ZGQ3MzU3MjRiMzMzMDE2MmI2YjE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f9xnWlSu62DpzmK37hzxqFrmAAHTX_EvocGP3EqnqGM",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const truncateOverview = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className='container mx-auto my-8'>
      <h3 className='text-2xl font-bold text-indigo-600 mb-4'>
        Trending Movies
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {movies
          .filter((e, index) => index <= 6)
          .map((movie) => (
            <div
              key={movie.id}
              className='relative p-4 rounded-lg shadow-md group'
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className='w-full h-64 object-cover rounded-lg mb-2'
              />
              <div className='absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black to-transparent rounded-b-lg'></div>
              <h4 className='absolute bottom-2 left-4 text-white text-lg font-bold'>
                {movie.title}
              </h4>
              <div className='absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white text-center p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity'>
                <div className='flex flex-col mb-4'>
                  <div> {truncateOverview(movie.overview, 100)}</div>

                  <Link
                    to={`/movie/${movie.id}`}
                    className='bg-gray-500 text-black-500 font-semibold py-3 px-6 rounded-full shadow-lg  hover:text-white transition duration-300 ease-in-out transform hover:scale-105 w-1/2 mx-auto mt-4 '
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white'>
          <div className='bg-gray-200 w-full h-full'>
            <div className='flex items-center justify-center h-full bg-gradient-to-r from-black-200 to-black-300'>
              <Link
                to={"/trending-movies"}
                className='bg-gray-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:text-white transition duration-300 ease-in-out transform hover:scale-105'
              >
                Explore More..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
