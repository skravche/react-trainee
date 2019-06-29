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
      query: '',
      filter: 'all', //on all off
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

  searchEvent = (items, query) => {
    if (query.length === 0) {
      return items;
    }
    return items.filter(items => {
      return items.label.indexOf(query) > -1; //
    });
  };
  onSearchChange = query => {
    this.setState({ query });
  };
  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'on':
        return items.filter(item => !item.done);
      case 'off':
        return items.filter(item => item.done);
      default:
        return items;
    }
  };
  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { todoData, query, filter } = this.state;
    const doneCount = todoData.filter(el => el.done).length; //filtered all elements where done: true!
    const toDoCount = todoData.length - doneCount;
    const itemsToShow = this.filter(this.searchEvent(todoData, query), filter);

    console.log(query);

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          onDeleted={this.deleteItemState}
          todos={itemsToShow}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddFrom addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
