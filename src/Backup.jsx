import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { Box, LinearProgress, Typography } from "@mui/material";

import styles from "./MoviesPage.module.css";
import MovieCard from "../../components/moviecard/MovieCard";
import SearchBar from "../../components/searchbar/SearchBar";
import { fetchMovies } from "../../contexts/actions/movieActions/fetchMovies";

const MoviesPage = () => {
  const { state, dispatch } = useContext(MovieContext);

  const { moviesData, isLoading, isSuccess, isError, error } = state;

  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState([]);

  // console.log("allMovies", allMovies)
  useEffect(() => {
    const payload = { searchQuery: "marvel", page: page };
    fetchMovies(payload)(dispatch);
  }, [page]);

  useEffect(() => {
    if (isSuccess) {
      setAllMovies((prevMovies) =>
        page === 1 ? moviesData.Search : [...prevMovies, ...moviesData.Search]
      );
    }
  }, [isSuccess]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <SearchBar />
      {isLoading ? (
        <Box className={styles.container}>
          <LinearProgress className={styles.progress} />
        </Box>
      ) : isError ? (
        <Box className={styles.error}>
          <Typography variant="h4">{error}</Typography>
        </Box>
      ) : isSuccess ? (
        <MovieCard allMovies={allMovies} />
      ) : null}
    </Box>
  );
};

export default MoviesPage;
