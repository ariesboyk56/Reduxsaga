import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import TaskBoard from "../TaskBoard/index";
import theme from "../../commons/Theme/index.js";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
