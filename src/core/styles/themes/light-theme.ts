import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[100],
    },
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[800],
    },
    error: {
      main: red[50],
    }
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1", },
          style: {},
        }
      ]
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4a148c',
        }
      }
    }
  }
});

export default lightTheme;
