import React, { Component } from 'react';
// import { useMulti } from '/components/App';

export default class MultiButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let multi;
    if (this.props.multi === false) {
      multi = true;
    } else {
      multi = false;
    }
    this.props.onClick(multi);
  }
  render() {
    let label;
    if (!this.props.multi) {
      label = 'Use Multi';
    } else {
      label = 'Stop Multi';
    }
    return (
      <li className="nav-item">
        <a
          className="nav-link"
          id="multi"
          onClick={this.handleClick}
        >
          {label}<span className="sr-only">(current)</span>
        </a>
      </li>
    );
  }
}
