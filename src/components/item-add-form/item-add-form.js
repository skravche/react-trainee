import React, { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };

  onSubmitFrom = e => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    const { label } = this.state;
    return (
      <div>
        <form className="item-add-form d-flex" onSubmit={this.onSubmitFrom}>
          <input
            type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="Write tasks here..."
            value={label}
          />
          <button className="btn btn-outline-secondary">Add event</button>
        </form>
        {/* {console.log(JSON.stringify(label, undefined, 2))} */}
      </div>
    );
  }
}

export default ItemAddForm;
