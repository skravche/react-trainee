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
        { label: 'Event #1', important: false, id: 1 },
        { label: 'Event #2', important: true, id: 2 },
        { label: 'Event #3', important: false, id: 3 },
        { label: 'Event #4', important: true, id: 4 },
        { label: 'Event #5', important: false, id: 5 },
      ],
    };
  }

  deleteItemState = id => {
    console.log(id);
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

  //taken props done && important from 'todo-lost-item'
  onToggleImportant = id => {
    console.log('toggleImportant', id);
  };
  onToggleDone = id => {
    console.log('toggleDone', id);
  };

  addItem = text => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxID++,
    };
    this.setState(({ todoData }) => {
      const newDataEvent = [...todoData, newItem];
      return {
        todoData: newDataEvent,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
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
