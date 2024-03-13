import React from "react";
import "animate.css";
import Testimonials from "../components/Testimonials";
import TrendingMovies from "../components/DiscoverMovies";
import PopularShows from "../components/DiscoverShows";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 h-96'>
        <div className='bg-black bg-opacity-50 h-full flex items-center justify-center'>
          <div>
            <h2 className='text-white text-4xl font-bold animate__animated animate__zoomIn'>
              Discover Trending :{" "}
              <TypeAnimation
                sequence={[
                  "Movies",
                  1000,
                  "TV Shows",
                  2000,

                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper='span'
                cursor={true}
                repeat={Infinity}
                className=''
              />
            </h2>
          </div>
          <div></div>
        </div>
      </div>
      <TrendingMovies />
      <PopularShows />
      <Testimonials />
    </>
  );
};

export default HomePage;
