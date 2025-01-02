import { AppBar, Box, Button, Toolbar, useTheme } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const pages = ["Home", "About", "Products", "Contact"];

function Navbar() {
  const theme = useTheme();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#091629" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          backgroundColor: "#f89826",
        }}
      >
        <marquee scrollamount={8}>
          <p style={{ color: "black", fontSize: "18px", fontWeight: "bolder" }}>
            🚀&nbsp; 🎇 Celebrate in Style !!&nbsp; 🎊 &nbsp;Special Festive
            Offers Await You !!&nbsp; 🛍️ &nbsp;Shop Today and Make Your
            Celebrations Brighter !! &nbsp;🌟
          </p>
        </marquee>
      </div>
      <Toolbar sx={{ backgroundColor: "#091629" }}>
        <a href="#home">
          <Box
            component="img"
            sx={{
              height: 80,
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
              sx={{
                my: 2,
                display: "block",
                fontWeight: 800,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: "black",
                },
              }}
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
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
