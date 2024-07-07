import {
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_Movies_FAILURE,
  GET_Movies_REQUEST,
  GET_Movies_SUCCESS,
} from "../actionTypes/movieTypes";

export const movieInitialState = {
  // fetchMovies
  moviesData: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",

  // fetchMovieById
  movieDetailData: {},
  movieDetailIsLoading: false,
  movieDetailIsSuccess: false,
  movieDetailIsError: false,
  movieDetailError: "",
};

export const movieReducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case GET_Movies_REQUEST:
      return {
        ...state,
        moviesData: {},
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: false,
      };
    case GET_Movies_SUCCESS:
      return {
        ...state,
        moviesData: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: false,
      };
    case GET_Movies_FAILURE:
      return {
        ...state,
        moviesData: {},
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload,
      };
    case GET_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        movieDetailData: {},
        movieDetailIsLoading: true,
        movieDetailIsSuccess: false,
        movieDetailIsError: false,
        movieDetailError: false,
      };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetailData: action.payload,
        movieDetailIsLoading: false,
        movieDetailIsSuccess: true,
        movieDetailIsError: false,
        movieDetailError: false,
      };
    case GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        movieDetailData: {},
        movieDetailIsLoading: true,
        movieDetailIsSuccess: false,
        movieDetailIsError: false,
        movieDetailError: false,
      };
    default:
      return state;
  }
};
