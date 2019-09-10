import React from 'react';
//import * as actionTypes from './actions';
import './ToDoTaskComponent.css'
const ToDoTaskComponent = (props) => {

  if (props.checkBoxStatus) {
    return (
      <li className="listItem">
        <input type="checkbox" checked />
        <label className="listItemLabel" >{props.taskInput}</label>
        <button className="delete" onClick={props.onDelete}>Delete</button>
        <button className="duplicate" onClick={props.onDuplicate}>Duplicate</button>
      </li>

    )
  }
  else {
    return (
      <li className="listItem">
        <input type="checkbox" />
        <label className="listItemLabel" >{props.taskInput}</label>
        <button className="delete" onClick={props.onDelete}>Delete</button>
        <button className="duplicate" onClick={props.onDuplicate}>Duplicate</button>
      </li>

    )
  }
}
export default ToDoTaskComponent;

// listItem.className = "listItem";
// let checkBox = document.createElement("input");
// let label = document.createElement("label");
// label.className = "listItemLabel";
// let deleteButton = document.createElement("button");
// deleteButton.innerText = "Delete";
// deleteButton.className = "delete";
// let duplicateButton = document.createElement("button");
// duplicateButton.innerText = "Duplicate";
// duplicateButton.className = "duplicate"