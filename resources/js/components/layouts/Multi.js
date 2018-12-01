import React, { Component } from 'react';
import ManageForm from './ManageForm';

export default class Multi extends Component {
  render() {
    return (
      <div id="multi">

        <ManageForm
          multi={this.props.multi}
          manage={this.props.manage}
          closeManage={this.props.closeManage}
        />
      </div>
    );
  }
}
