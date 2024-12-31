import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const pages = ["Home", "About", "Products", "Contact"];

function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <a href="#home">
            <Box
              component="img"
              sx={{
                height: 70,
              }}
              alt="Your logo."
              src={"assets/ADITYALOGO.png"}
            />
          </a>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLocaleLowerCase()}`}
                //onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", fontWeight: 800 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="nav-menus"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
