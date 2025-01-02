import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const pages = ["Home", "About", "Products", "Contact"];

function Navbar() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Function to handle drawer opening
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // Function to handle drawer closing
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#091629" }}>
        {/* Marquee */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "40px",
            backgroundColor: "#f89826",
          }}
        >
          <marquee scrollamount={8}>
            <p
              style={{ color: "black", fontSize: "18px", fontWeight: "bolder" }}
            >
              🚀&nbsp; 🎇 Celebrate in Style !!&nbsp; 🎊 &nbsp;Special Festive
              Offers Await You !!&nbsp; 🛍️ &nbsp;Shop Today and Make Your
              Celebrations Brighter !! &nbsp;🌟
            </p>
          </marquee>
        </div>

        {/* Toolbar */}
        <Toolbar sx={{ backgroundColor: "#091629" }}>
          {/* Logo */}
          <a href="#home">
            <Box
              component="img"
              sx={{ height: 70 }}
              alt="Your logo."
              src={"assets/ADITYALOGO.png"}
            />
          </a>

          {/* Menu Buttons for Larger Screens */}
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

          {/* Menu Icon for Smaller Screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label={drawerOpen ? "close drawer" : "open drawer"}
              onClick={handleDrawerOpen}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Component */}
      <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#091629",
            height: "100%",
            color: "white",
          }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              borderBottom: "1px solid #ffffff33",
            }}
          >
            <a href="#home">
              <Box
                component="img"
                sx={{ height: 50 }}
                alt="Your logo."
                src={"assets/ADITYALOGO.png"}
              />
            </a>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ color: "white" }}
              aria-label="Close drawer"
            >
              <CloseIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </Box>
          <List>
            {pages.map((page) => (
              <ListItem key={page} disablePadding>
                <ListItemButton href={`#${page.toLocaleLowerCase()}`}>
                  <ListItemText primary={page} sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
