import React, { Component } from 'react';
import ManageForm from './ManageForm';
import MultiStream from './MultiStream';

export default class Multi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: [{ name: '' }]
    };
    this.addChannelField = this.addChannelField.bind(this);
    this.storeInput = this.storeInput.bind(this);
    this.removeStream = this.removeStream.bind(this);
  }

  addChannelField() {
    const newStreams = [...this.state.streams, { name: '' }];
    this.setState({
      streams: newStreams
    });
  }

  storeInput(index, target, addChannel = null) {
    console.log(target.value);
    this.setState({
      streams: this.state.streams.map((stream, sIndex) => (
            (index === sIndex) ? { name: target.value } : stream
      ))
    }, addChannel);
  }

  removeStream(name) {
    const { streams } = this.state;
    console.log(streams);

    const newArray = streams.filter((stream) => (stream.name !== name));
    this.setState({
      streams: newArray
    });
  }

  render() {
    return (
      <div id="multi">
        <ManageForm
          multi={this.props.multi}
          manage={this.props.manage}
          closeManage={this.props.closeManage}
          streams={this.state.streams}
          addChannel={this.addChannelField}
          storeInput={this.storeInput}
          removeStream={this.removeStream}
        />
        <MultiStream />

      </div>
    );
  }
}
