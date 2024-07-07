import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { useParams } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  LinearProgress,
  Container,
} from "@mui/material";
import styles from "./MovieDetailPage.module.css";
import { fetchMovieById } from "../../contexts/actions/movieActions/fetchMovieById";

const MovieDetailPage = () => {
  const { state, dispatch } = useContext(MovieContext);
  const { id } = useParams();
  const {
    movieDetailData,
    movieDetailIsLoading,
    movieDetailIsError,
    movieDetailError,
  } = state;

  useEffect(() => {
    const payload = { id };
    fetchMovieById(payload)(dispatch);
  }, [id]);

  if (movieDetailIsLoading)
    return (
      <Box className={styles.loadingContainer}>
        <LinearProgress style={{ width: "100%" }} />
      </Box>
    );

  if (movieDetailIsError)
    return (
      <Container className={styles.errorContainer}>
        <Typography variant="h6" color="error">
          {movieDetailError}
        </Typography>
      </Container>
    );

  return (
    <Box className={styles.container}>
      <Box className={styles.imageContainer}>
        <img src={movieDetailData?.Poster} alt={movieDetailData?.Title} />
      </Box>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        className={styles.title}
      >
        {movieDetailData?.Title} ({movieDetailData?.Year})
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className={styles.sectionTitle}>
            Genre
          </Typography>
          <Typography variant="body1" className={styles.sectionContent}>
            {movieDetailData?.Genre}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className={styles.sectionTitle}>
            Running Time
          </Typography>
          <Typography variant="body1" className={styles.sectionContent}>
            {movieDetailData?.Runtime}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className={styles.sectionTitle}>
            Rating
          </Typography>
          <Typography variant="body1" className={styles.sectionContent}>
            {movieDetailData?.imdbRating}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" className={styles.sectionTitle}>
          Plot
        </Typography>
        <Typography variant="body2" className={styles.sectionContent}>
          {movieDetailData?.Plot}
        </Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" className={styles.sectionTitle}>
          Actors
        </Typography>
        <Typography variant="body2" className={styles.sectionContent}>
          {movieDetailData?.Actors}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieDetailPage;
