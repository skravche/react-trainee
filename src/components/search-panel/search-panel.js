import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }
  onQueryChange = e => {
    const query = e.target.value;
    this.setState({ query });
    this.props.onSearchChange(query);
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search task..."
          onChange={this.onQueryChange}
          value={query}
        />
      </div>
    );
  }
}

export default SearchPanel;
