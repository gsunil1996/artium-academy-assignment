import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h5" gutterBottom className={styles.title}>
        Movie List
      </Typography>
      <Link to="/" className={styles.link}>
        <Typography variant="h6" gutterBottom className={styles.linkText}>
          Home
        </Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
