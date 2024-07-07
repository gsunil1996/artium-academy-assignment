import axios from "axios";
import { API_KEY, API_URL } from "../../baseURL/baseUrl";
import {
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
} from "../../actionTypes/movieTypes";

export const fetchMovieById =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_MOVIE_DETAILS_REQUEST,
      });

      const { data } = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);

      dispatch({
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload: data || {},
      });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_DETAILS_FAILURE,
        payload: error && error.response.data.Error,
      });
      throw new Error(error.response.data.Error);
    }
  };
