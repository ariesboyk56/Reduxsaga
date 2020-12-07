import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  color: {
    primary: "#303F9F",
    secondary: "#757575",
    error: "#E64A19"
  },
  typography: {
    fontFamily: "Roboto"
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#512DA8",
    textColor: "#FFFFFF",
    border: "#CCCCCC"
  }
});

export default theme;
