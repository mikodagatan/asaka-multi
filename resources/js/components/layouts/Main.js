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
    let padding;
    if (this.props.multi) {
      padding = 30;
    } else {
      padding = 0;
    }
    const styles = {
      main: {
        minHeight: '100%',
        paddingTop: padding,
        paddingBottom: padding
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
          chat={this.props.chat}
          closeManage={this.props.onManageChange}
          closeChat={this.props.onChatChange}
        />
      </div>
    );
  }
}
