import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';


class TaskItem extends Component {
  render() {
    var { classes, task, status } = this.props;
    var { title, description } = task;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>{status.label}</Grid>
          </Grid>
          <p>{ description }</p>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
            <Icon fontSize="small">
              edit_icon
            </Icon>
          </Fab>
          <Fab color="primary" aria-label="Delete" className={classes.fab} size="small">
            <Icon fontSize="small">
              delete_icon
            </Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);