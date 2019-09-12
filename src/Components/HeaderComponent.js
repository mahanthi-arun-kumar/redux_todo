import React from 'react';
import './HeaderComponent.css';
class HeaderComponent extends React.Component {
  state = {
    input: '',
  };

  onChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  addTask = () => {
    this.props.addTask(this.state.input);
    this.setState({ input: '' });

  }

  render() {

    return (
      <div className="header">

        <input className='newTask' value={this.state.input} onChange={this.onChange} onKeyPress={this.handleKeyPress} />
        <button onClick={this.addTask}>Add</button>
        <button onClick={this.props.selectAllTasks}>SelectAll</button>
        <button onClick={this.props.deSelectAllTasks}>DeSelectAll</button>
        <button onClick={this.props.deleteSelectedTasks}>Delete</button>

      </div>

    )
  }
}
export default HeaderComponent;


