import React, { Component } from 'react';
import Multi from './Multi';
import Front from './Front';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.pageRender = this.pageRender.bind(this);
  }
  pageRender() {
    if (!this.props.multi) {
      return (<Front />);
    }
  }
  render() {
    const styles = {
      main: {
        height: 'calc(100% - 60px)',
        paddingTop: 30,
        paddingBottom: 30,
        overflowY: 'hidden',
      }
    };
    return (
      <div
        id="main"
        style={styles.main}
      >
        {this.pageRender()}
        <Multi
          multi={this.props.multi}
          manage={this.props.manage}
          closeManage={this.props.onManageChange}
        />
      </div>
    );
  }
}
