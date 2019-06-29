import React, { Component } from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'on', label: 'On' },
    { name: 'off', label: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const btnActive = filter === name;
      const classBtn = btnActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${classBtn}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;
