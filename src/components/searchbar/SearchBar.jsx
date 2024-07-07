import React, { useContext, useState, useMemo } from "react";
import { TextField, Autocomplete, CircularProgress } from "@mui/material";
import { MovieContext } from "../../contexts/MovieContext";
import { fetchMovies } from "../../contexts/actions/movieActions/fetchMovies";
import debounce from "lodash/debounce";

const SearchBar = () => {
  const { state, dispatch, setAllMovies } = useContext(MovieContext);
  const { moviesData, loading } = state;

  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    console.log("searchvalue", value);
    const payload = {
      searchQuery: value === "" ? "marvel" : value,
      page: 1,
    };
    fetchMovies(payload)(dispatch).then((response) => {
      if (response && response.success && response.data.Search) {
        setAllMovies(response.data.Search);
      } else {
        setAllMovies([]);
      }
    });
  };

  const debouncedHandleSearch = useMemo(() => debounce(handleSearch, 300), []);

  const handleChange = (value) => {
    setSearchText(value);
    // debouncedHandleSearch(value);
    debouncedHandleSearch(value)
  };

  return (
    <div>
      <Autocomplete
        fullWidth
        freeSolo
        options={moviesData?.Search ? moviesData?.Search?.map((movie) => movie?.Title) : []}
        loading={loading}
        value={searchText}
        onInputChange={(event, newInputValue) => {
          handleChange(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search..."
            sx={{ mb: 2, background: "#fff", borderRadius: "10px" }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
