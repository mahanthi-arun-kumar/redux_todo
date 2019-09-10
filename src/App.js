import React, { Component } from 'react';
import Header from './Person/HeaderComponent'
import ToDoTaskComponent from './Person/ToDoTaskComponent';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    // this.addTask = this.addTask.bind(this);
    // this.selectAll = this.selectAll.bind(this);
    // this.deSelectAll = this.deSelectAll.bind(this);
    // this.deleteSelectedTasks = this.deleteSelectedTasks.bind(this);
  }




  // addTask(event) {
  //   if (event.key === 'Enter') {
  //     if (event.target.value) {
  //       let task = {};
  //       task.id = Math.random();
  //       task.input = event.target.value;
  //       task.checkBoxStatus = false;
  //       const tasks = [...this.state.tasks, task];
  //       console.log(tasks);
  //       console.log(event.target.value);
  //       this.setState({
  //         tasks: tasks
  //       })
  //       event.target.value = "";
  //     }
  //   }
  // }
  // deleteTask(task) {
  //   const tasks = [...this.state.tasks];
  //   let taskIndex = tasks.indexOf(task);

  //   tasks.splice(taskIndex, 1);
  //   this.setState({ tasks: tasks });
  // }
  // onChangeEventHandler(event) {
  //   console.log(event.target.value);
  // }
  // duplicateTask(task) {
  //   const tasks = [...this.state.tasks];
  //   let taskIndex = tasks.indexOf(task);
  //   tasks.splice(taskIndex + 1, 0, task);
  //   this.setState({ tasks: tasks })
  // }
  // selectAll() {
  //   const tasks = this.state.tasks.map((task) => {
  //     let newTask = {};
  //     newTask.id = task.id;
  //     newTask.input = task.input;
  //     newTask.checkBoxStatus = true;
  //     return newTask;
  //   })

  //   this.setState({ tasks: tasks });
  // }
  // deSelectAll() {
  //   const tasks = this.state.tasks.map((task) => {
  //     let newTask = {};
  //     newTask.id = task.id;
  //     newTask.input = task.input;
  //     newTask.checkBoxStatus = false;
  //     return newTask;
  //   })
  //   this.setState({ tasks: tasks });

  //
  // deleteSelectedTasks() {
  //   const tasks = this.state.tasks.filter(task => task.checkBoxStatus !== true);

  //   this.setState({ tasks: tasks });
  // }
  render() {
    let ToDoListItem = null;
    console.log(this.props);
    ToDoListItem = (
      <div>
        {
          this.props.tasks.map((task) => {
            return <ToDoTaskComponent checkBoxStatus={task.checkBoxStatus} taskInput={task.input} onDelete={this.props.taskDeleted.bind(this, task)} onDuplicate={this.props.taskDuplicated.bind(this, task)}></ToDoTaskComponent>

          })
        }
      </div>);


    return (
      <div >
        <Header
          add={this.props.taskAdded} selectAll={this.props.tasksSelected} deSelectAll={this.props.tasksDeSelected} deleteSelectedTasks={this.props.tasksDeleted}
        />
        <div>{ToDoListItem}</div>
      </div>
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
const mapDispatchToProps = dispatch => {

  //console.log(task);
  return {
    taskAdded: (event) => dispatch({ type: actionTypes.ADD_TASK, input: event }),
    taskDeleted: (task) => dispatch({ type: actionTypes.DELETE_TASK, input: task }),
    taskDuplicated: (task) => dispatch({ type: actionTypes.DUPLICATE_TASK, input: task }),
    tasksSelected: () => dispatch({ type: actionTypes.SELECT_TASKS }),
    tasksDeSelected: () => dispatch({ type: actionTypes.DESELECT_TASKS }),
    tasksDeleted: () => dispatch({ type: actionTypes.DELETESELECTED_TASKS }),
    // checkBoxStatus: (task) => dispatch({ type: actionTypes.CHECKBOXSTATUS_TASK, input: task })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// unavle to add form in my app