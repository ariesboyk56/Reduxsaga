import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem';


class TaskList extends Component {
  render() {
    const { classes, status, tasks } = this.props;

    return (
      <Grid item md={4} xs={12}>
        {/* {status.label} */}
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map(task => {
            return (
              <TaskItem key={task.id} task={task} status={status} />
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);