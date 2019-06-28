import React, { Component } from 'react';

import './todo-list-item.css';

class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
    };
  }

  onLabelClick = () => {
    this.setState({ done: true });
  };
  actionClick = () => {
    this.setState({ clickBTN: 'done' });
  };

  render() {
    const { label, important = false } = this.props; //destructor props
    const { done } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          // onClick={this.actionClick}
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
