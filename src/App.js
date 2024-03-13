import React from "react";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import MovieDetail from "./pages/MovieDetail";
import TvShowDetail from "./pages/TvShowDetail";
import AllTrendingMovies from "./pages/AllTrendingMovies";
import AllPopularShows from "./pages/AllPopularShows";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='trending-movies' element={<AllTrendingMovies />} />
            <Route path='trending-shows' element={<AllPopularShows />} />
            <Route path='movie/:id' element={<MovieDetail />} />
            <Route path='tv-show/:id' element={<TvShowDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
