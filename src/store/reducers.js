import * as actionTypes from './actions';
const initialState = {
  tasks: []
};
export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_TASK: {
      console.log(action.input);
      let task = {};
      task.id = Math.random();
      task.input = action.input;
      task.checkBoxStatus = false;
      let tasks = [...state.tasks, task];


      return {
        ...state,
        tasks: tasks
      };

    }

    case actionTypes.DELETE_TASK: {


      console.log(action.input)
      let tasks = [...state.tasks];
      let taskIndex = tasks.indexOf(action.input);
      tasks.splice(taskIndex, 1);
      return {
        ...state,
        tasks: tasks
      };


    }

    case actionTypes.DUPLICATE_TASK: {

      console.log(action.input);
      let tasks = [...state.tasks];
      let taskIndex = tasks.indexOf(action.input);
      tasks.splice(taskIndex + 1, 0, action.input);
      return {
        ...state,
        tasks: tasks
      };

    }

    case actionTypes.UPDATE_TASK: {

      const tasks = [...state.tasks];
      let taskIndex = tasks.indexOf(action.input);
      console.log(tasks[taskIndex].id);
      tasks[taskIndex].checkBoxStatus = !(action.input.checkBoxStatus);

      return {
        ...state,
        tasks: tasks
      };

    }



    case actionTypes.SELECT_TASKS: {

      let tasks = state.tasks.map((task) => {
        let newTask = {};
        newTask.id = task.id;
        newTask.input = task.input;
        newTask.checkBoxStatus = true;
        return newTask;
      })

      return {
        ...state,
        tasks: tasks
      };


    }

    case actionTypes.DESELECT_TASKS: {
      let tasks = state.tasks.map((task) => {
        let newTask = {};
        newTask.id = task.id;
        newTask.input = task.input;
        newTask.checkBoxStatus = false;
        return newTask;
      })

      return {
        ...state,
        tasks: tasks
      };
    }
    case actionTypes.DELETESELECTED_TASKS: {

      let tasks = state.tasks.filter(task => task.checkBoxStatus !== true);
      return {
        ...state,
        tasks: tasks
      };
    }
    default:
      return state;
  }


}

