import React from 'react';
import './HeaderComponent.css';
const HeaderComponent = (props) => {
  return (
    <div className="header">

      <input className='newTask' onChange={props.onChange} onKeyPress={props.add} />
      <button onClick={props.add}>Add</button>
      <button onClick={props.selectAll}>SelectAll</button>
      <button onClick={props.deSelectAll}>DeSelectAll</button>
      <button onClick={props.deleteSelectedTasks}>Delete</button>
    </div>

  )
}
export default HeaderComponent;

