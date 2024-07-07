import axios from "axios";
import {
  GET_Movies_FAILURE,
  GET_Movies_REQUEST,
  GET_Movies_SUCCESS,
} from "../../actionTypes/movieTypes";
import { API_KEY, API_URL } from "../../baseURL/baseUrl";

export const fetchMovies =
  ({ searchQuery, page }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_Movies_REQUEST,
      });

      const { data } = await axios.get(
        `${API_URL}?apikey=${API_KEY}&s=${searchQuery}&page=${page}`
      );

      dispatch({
        type: GET_Movies_SUCCESS,
        payload: data || {},
      });
    } catch (error) {
      dispatch({
        type: GET_Movies_FAILURE,
        payload: error && error.response.data.Error,
      });
      throw new Error(error.response.data.Error);
    }
  };
