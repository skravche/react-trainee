import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddFrom from '../item-add-form';

import './app.css';

class App extends Component {
  maxID = 100;

  constructor() {
    super();
    this.state = {
      todoData: [
        this.createToDoItem('Event #1'),
        this.createToDoItem('Event #2'),
        this.createToDoItem('Event #3'),
        this.createToDoItem('Event #4'),
      ],
    };
  }
  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxID++,
    };
  }

  deleteItemState = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];
      return {
        todoData: newData,
      };
    });
  };
  addItem = text => {
    const newItem = this.createToDoItem(text);
    this.setState(({ todoData }) => {
      const newDataEvent = [...todoData, newItem];
      return {
        todoData: newDataEvent,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);

    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  //taken props done && important from 'todo-lost-item'
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'done') };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'important') };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done).length; //filtered all elements where done: true!
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          onDeleted={this.deleteItemState}
          todos={todoData}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddFrom addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
