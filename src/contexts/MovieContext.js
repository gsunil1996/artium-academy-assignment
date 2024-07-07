import React, { createContext, useReducer, useState } from "react";
import { movieInitialState, movieReducer } from "./reducers/movieReducer";

// Create context with initial state as default value
export const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, movieInitialState);
  const [allMovies, setAllMovies] = useState([]);
  return (
    <MovieContext.Provider value={{ state, dispatch, allMovies, setAllMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
