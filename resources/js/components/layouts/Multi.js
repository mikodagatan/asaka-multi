import React, { Component } from 'react';
import ManageForm from './ManageForm';
import MultiStream from './MultiStream';
import ChatDiv from './ChatDiv';


export default class Multi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: [{ name: '' }],
      start: false,
      load: false,
      startWithURL: false,
    };
    this.addChannelField = this.addChannelField.bind(this);
    this.storeInput = this.storeInput.bind(this);
    this.removeStream = this.removeStream.bind(this);
    this.changeStart = this.changeStart.bind(this);
    this.changeLoad = this.changeLoad.bind(this);
    this.setStreamsByUrl = this.setStreamsByUrl.bind(this);
    this.setUrlByForm = this.setUrlByForm.bind(this);

    this.renderMultiStream = this.renderMultiStream.bind(this);
  }

  componentDidMount() {
    this.setStreamsByUrl();
  }
  componentDidUpdate() {
    this.setUrlByForm();
  }
  setUrlByForm() {
    const streams = this.state.streams;

    let url = streams.map(stream => stream.name)
      .filter((stream) => stream !== '')
      .join('/');

    url = `/${url}`;

    window.history.pushState('nothing', 'Title', url);
  }

  setStreamsByUrl() {
    let path = window.location.pathname;
    const startByURL = this.state.startByUrL;
    if (path !== '/' && !startByURL) {
      path = path.slice(1, path.length);
      const streams = path.split('/');
      const urlStreams = streams.map(stream => {
        const obj = {};
        obj.name = stream;
        return obj;
      });
      this.setState({
        streams: [...urlStreams, { name: '' }],
        load: true,
        startByURL: true,
      });
    }
  }

  addChannelField() {
    const newStreams = [...this.state.streams, { name: '' }];
    this.setState({
      streams: newStreams
    });
  }

  storeInput(index, target, addChannel = null) {
    this.setState({
      streams: this.state.streams.map((stream, sIndex) => (
            (index === sIndex) ? { name: target.value } : stream
      ))
    }, addChannel);
  }

  removeStream(name) {
    const { streams } = this.state;

    const newArray = streams.filter((stream) => (stream.name !== name));
    this.setState({
      streams: newArray
    });
  }

  changeLoad() {
    const load = !this.state.load;
    this.setState({
      load
    });
  }

  changeStart() {
    if (this.state.start === false) {
      this.setState({
        start: true,
        load: true
      });
    }
  }

  renderMultiStream() {
    return (
      <MultiStream
        multi={this.props.multi}
        manage={this.props.manage}
        streams={this.state.streams}
        start={this.state.start}
        load={this.state.load}
        changeLoad={this.changeLoad}
      />
    );
  }
  render() {
    return (
      <div
        id="multi"
      >
        <ManageForm
          multi={this.props.multi}
          manage={this.props.manage}
          closeManage={this.props.closeManage}
          streams={this.state.streams}
          addChannel={this.addChannelField}
          storeInput={this.storeInput}
          removeStream={this.removeStream}
          start={this.state.start}
          changeStart={this.changeStart}
          changeLoad={this.changeLoad}
        />
        {this.renderMultiStream()}
        <ChatDiv
          multi={this.props.multi}
          streams={this.state.streams}
        />
      </div>
    );
  }
}
