import React, { Component } from 'react';
import Stream from './Stream';

export default class MultiStream extends Component {
  componentDidMount() {
  }
  componentDidUpdate() {
    const case1 = (this.props.load === true);
    if (case1) {
      console.log('removing load state');
      this.props.changeLoad();
    }
  }
  render() {
    const { streams } = this.props;
    return (
      streams.map((stream, index) => (
        <div key={`stream-${index}`}>
          <Stream
            targetID={`stream-${index}`}
            index={index}
            muted='false'
            channel={stream.name}
            load={this.props.load}
          />
        </div>
      ))
    );
  }
}
