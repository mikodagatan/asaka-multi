import React, { Component } from 'react';
import Multi from './Multi';
import Front from './Front';

export default class Main extends Component {
  deployFront() {
    return (<Front />);
  }
  deployMulti() {
    return (<Multi />);
  }
  render() {
    return (
      <div id="main">
        {(this.props.multi) ? this.deployMulti() : this.deployFront()}
      </div>
    );
  }
}
