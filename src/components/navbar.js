import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className='p-4'
      style={{
        backgroundColor: "rgb(95 66 126)",
      }}
    >
      <div className='container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex gap-8 items-center mb-4 md:mb-0'>
          <h1 className='text-white text-2xl font-bold'>
            <FontAwesomeIcon icon={faFilm} /> MovieTrending
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-end gap-8 items-center'>
          <div className='text-white'>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faTv} /> Home
            </Link>
          </div>
          <div className='text-white'>
            <Link to={"/trending-movies"}>
              <FontAwesomeIcon icon={faTv} /> Movies
            </Link>
          </div>
          <div className='text-white'>
            <Link to={"/trending-shows"}>
              <FontAwesomeIcon icon={faTv} /> Tv Shows
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
