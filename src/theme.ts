import { createTheme, responsiveFontSizes } from "@mui/material";
import { grey, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ae542e',//'#31475b',//deepOrange[900],
    },
    secondary: {
      main: purple.A200,
    },
    background: {
      default: grey[900]
    }
  },
});

theme = responsiveFontSizes(theme);

export { theme };