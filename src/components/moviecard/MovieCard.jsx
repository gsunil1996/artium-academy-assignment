import React, { useContext } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { MovieContext } from "../../contexts/MovieContext";

const MovieCard = () => {
  const { allMovies } = useContext(MovieContext);
  return (
    <div>
      <Grid container spacing={2}>
        {allMovies?.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`} className={styles.link}>
              <Card sx={{ background: "#1E2832" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="200"
                    image={movie.Poster}
                    alt={movie.Title}
                    sx={{ objectFit: "initial" }}
                  />
                  <Box className={styles.titleBox}>
                    <Typography variant="h6" noWrap color="#fff">
                      {movie.Title}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieCard;
