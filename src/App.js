import React, { Component, PureComponent } from 'react';
import Header from './Components/HeaderComponent'
import ToDoTaskComponent from './Components/ToDoTaskComponent';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions'
class App extends PureComponent {

  render() {
    console.log(this.props);
    let ToDoListItem = (
      <React.Fragment>
        {
          this.props.tasks.map((task) => {
            return <ToDoTaskComponent key={task.id} checkBoxStatus={task.checkBoxStatus} taskInput={task.input} onDelete={this.props.taskDeleted.bind(this, task)} onDuplicate={this.props.taskDuplicated.bind(this, task)} onCheckBoxStatusChange={this.props.taskUpdated.bind(this, task)} ></ToDoTaskComponent>

          })
        }
      </React.Fragment>);


    return (
      <React.Fragment >
        <Header
          addTask={this.props.taskAdded} selectAllTasks={this.props.tasksSelected} deSelectAllTasks={this.props.tasksDeSelected} deleteSelectedTasks={this.props.tasksDeleted}
        />
        <div>{ToDoListItem}</div>
      </React.Fragment>
    )


  }
}

const mapStateToProps = state => {
  console.log("kannu");
  console.log(state);
  return {
    tasks: state.tasks
  }
}
const mapDispatchToProps = dispatch => { //called evreytime whenever state changes in the store

  //console.log(task);
  return {
    taskAdded: (taskName) => dispatch({ type: actionTypes.ADD_TASK, input: taskName }),
    taskDeleted: (task) => dispatch({ type: actionTypes.DELETE_TASK, input: task }),
    taskDuplicated: (task) => dispatch({ type: actionTypes.DUPLICATE_TASK, input: task }),
    taskUpdated: (task) => dispatch({ type: actionTypes.UPDATE_TASK, input: task }),
    tasksSelected: () => dispatch({ type: actionTypes.SELECT_TASKS }),
    tasksDeSelected: () => dispatch({ type: actionTypes.DESELECT_TASKS }),
    tasksDeleted: () => dispatch({ type: actionTypes.DELETESELECTED_TASKS }),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// unavle to add form in my app