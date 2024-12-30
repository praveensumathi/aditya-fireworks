import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f89826",
      light: " #faba6b",
    },
    secondary: {
      main: "#f89826",
      light: "#f5938a",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
