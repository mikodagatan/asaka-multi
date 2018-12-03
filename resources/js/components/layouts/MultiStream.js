import React, { Component } from 'react';

import Stream from './Stream';

export default class MultiStream extends Component {
  componentDidMount() {
  }
  componentDidUpdate() {
    const case1 = (this.props.load === true);
    if (case1) {
      console.log('changeload from multistream');
      this.props.changeLoad();
    }
  }
  render() {
    const { streams } = this.props;
    const lastStream = streams.length - 1;

    return (
      <div className="multiStream">
        {streams.map((stream, index) => (
            <Stream
              targetID={`stream-${index}`}
              key={`Stream-${index}`}
              index={index}
              muted='false'
              channel={stream.name}
              load={this.props.load}
              changeLoad={this.props.changeLoad}
              lastStream={lastStream}
            />
        ))}
      </div>
    );
  }
}
