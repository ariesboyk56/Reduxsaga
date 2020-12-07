import { withStyles } from '@material-ui/core';
import styles from './styles.js';
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard/index';
import theme from '../../commons/Theme/index.js';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App); 
