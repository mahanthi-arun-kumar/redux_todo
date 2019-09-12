import React from 'react';
import './ToDoTaskComponent.css'
const ToDoTaskComponent = (props) => {


  return (
    <li className="listItem">
      <input type="checkbox" onChange={props.onCheckBoxStatusChange} checked={props.checkBoxStatus} />
      <label className="listItemLabel" >{props.taskInput}</label>
      <button className="delete" onClick={props.onDelete}>Delete</button>
      <button className="duplicate" onClick={props.onDuplicate}>Duplicate</button>
    </li>

  )


}
export default ToDoTaskComponent;
