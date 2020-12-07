import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

class TaskBoard extends Component {
    render() {
    const { classes } = this.props;
    return (
      <div className={classes.board}>
        <div className={classes.shape}>ReactJS</div>
        <div className={classes.shape}>AngularJS</div>
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);