import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "animate.css";

export default function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(
    () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGFjMTJhY2UyOTA0ZjQ1YjAzZjY3NDc0M2IxZWY4MCIsInN1YiI6IjY1ZGQ3MzU3MjRiMzMzMDE2MmI2YjE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f9xnWlSu62DpzmK37hzxqFrmAAHTX_EvocGP3EqnqGM",
        },
      })
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .then(() => setLoading(false));
    },
    // eslint-disable-next-line
    []
  );

  //   fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGFjMTJhY2UyOTA0ZjQ1YjAzZjY3NDc0M2IxZWY4MCIsInN1YiI6IjY1ZGQ3MzU3MjRiMzMzMDE2MmI2YjE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f9xnWlSu62DpzmK37hzxqFrmAAHTX_EvocGP3EqnqGM",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setMovie(data));

  console.log(movie);

  return (
    <div
      className={"bg-gray-100 flex items-center justify-center py-8"}
      style={{
        minHeight: "75vh",
      }}
    >
      {loading ? (
        <div className='loading'>
          <div className='max-w-4xl w-96 mx-auto flex gap-2'>
            <div className='skeleton h-96 w-full md:w-1/2'></div>
            <div className='skeleton h-96 w-full md:w-1/2'></div>
          </div>
        </div>
      ) : (
        <div className='max-w-4xl rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 md:h-1/2'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className='w-full h-full object-cover '
            />
          </div>
          <div className='w-full md:w-1/2 p-8 flex flex-col justify-between bg-gray-200'>
            <div>
              <h1 className='text-3xl font-bold mb-8 animate__animated animate__zoomInDown'>
                {movie.title}
              </h1>
              <p className='text-lg text-gray-700 mb-2'>
                <span className='font-semibold'>Genres:</span>{" "}
                {movie.genres &&
                  movie.genres.map((genre, index) => (
                    <span
                      key={index}
                      className='mr-2 inline-block bg-gray-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700'
                    >
                      {genre.name}
                    </span>
                  ))}
              </p>
              <p className='text-lg text-gray-700 mb-2'>
                <span className='font-semibold'>Release Date:</span>{" "}
                {movie.release_date}
              </p>
              <p className='text-lg text-gray-700 mb-2'>
                <span className='font-semibold'>Run Time:</span> {movie.runtime}{" "}
                minutes
              </p>
              <p className='text-lg text-gray-700 mb-2'>
                <span className='font-semibold'>Tagline:</span> {movie.tagline}
              </p>
              <p className='text-lg text-gray-700 mb-2'>
                <span className='font-semibold'>Vote Average:</span>{" "}
                {movie.vote_average}
              </p>
              <p className='text-lg text-gray-700 mb-2'>
                <span className='font-semibold'>Overview:</span>{" "}
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
