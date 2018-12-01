import React, { Component } from 'react';
import Multi from './Multi';
import Front from './Front';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main">
        <Front />
        <Multi
          multi={this.props.multi}
          manage={this.props.manage}
          closeManage={this.props.onManageChange}
        />
      </div>
    );
  }
}
