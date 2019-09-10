import * as actionTypes from './actions';
const initialState = {
  tasks: []
};
export const reducer = (state = initialState, action) => {
  // if (action.input.key === 'Enter') {
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      if (action.input.key === 'Enter') {

        let task = {};
        task.id = Math.random();
        task.input = action.input.target.value;
        task.checkBoxStatus = false;
        let tasks = [...state.tasks, task];

        action.input.target.value = '';
        //console.log(tasks);
        return {
          ...state,
          tasks: tasks
        };

      }
    }
    case actionTypes.DELETE_TASK: {

      if (action.input.id) {
        console.log(action.input)
        let tasks = [...state.tasks];
        let taskIndex = tasks.indexOf(action.input);
        tasks.splice(taskIndex, 1);
        return {
          ...state,
          tasks: tasks
        };

      }
    }

    case actionTypes.DUPLICATE_TASK: {
      if (action.input.id) {
        let tasks = [...state.tasks];
        let taskIndex = tasks.indexOf(action.input);
        tasks.splice(taskIndex + 1, 0, action.input);
        return {
          ...state,
          tasks: tasks
        };
      }
    }


    case actionTypes.SELECT_TASKS: {
      if (action.input === undefined) {
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

