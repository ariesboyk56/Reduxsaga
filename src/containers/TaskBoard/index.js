import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import React, { Component } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { STATUSES } from "../../constants/index";
import styles from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from '../../actions/task';



const listTask = [
  {
    id: 1,
    title: "Read Book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play game",
    description: "",
    status: 2,
  },
  {
    id: 3,
    title: "swim",
    description: "with friends",
    status: 1,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  componentDidMount(){
    const {taskActions} = this.props;
    const {fitchListTask} = taskActions;
    fitchListTask();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  openForm = () => {
    this.setState({
      open: true,
    });
  };
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList key={status.value} tasks={taskFiltered} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.board}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fitchListTask: PropTypes.func
  })
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return{
    taskActions: bindActionCreators(taskActions, dispatch)
  }
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
