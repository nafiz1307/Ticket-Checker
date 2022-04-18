import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="white"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Ticket Checker
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/enroll">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Enroll
              </Button>
            </Link>
            <Link to="/resell">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Resell
              </Button>
            </Link>

            <Link to="/invalidate">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Invalidate
              </Button>
            </Link>

            <Link to="/view-all">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                All Ticket
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
