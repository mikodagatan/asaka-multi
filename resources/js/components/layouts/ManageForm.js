import React, { Component } from 'react';
// import AddChannel from './AddChannel';
export default class ManageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streams: [{ name: '' }]
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRemoveStream = this.handleRemoveStream.bind(this);
    this.storeInput = this.storeInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  addChannelField() {
    const newStreams = [...this.state.streams, { name: '' }];


    this.setState({
      streams: newStreams
    });
  }

  storeInput(index, e) {
    this.setState({
      streams: this.state.streams.map((stream, sIndex) => (
            (index === sIndex) ? { name: e.target.value } : stream
      ))
    });
  }

  handleChange(index, e) {
    const { target, key } = e;

    this.storeInput(index, e);

    if (key === 'Enter') {
      e.preventDefault();
    }

    const fieldAmount = this.state.streams.length;
    const add = (a, b) => a + b;
    const fieldsFilled = this.state.streams.map((stream) => (
      (stream.name.length === 0) ? 0 : 1
    )).reduce(add);

    const rule1 = target.value.length === 4;
    const rule2 = index + 1 >= fieldsFilled;
    const rule3 = fieldsFilled >= fieldAmount;

    if (rule1 && rule2 && rule3) {
      this.addChannelField();
    }
  }

  handleSumbit(e) {
    e.preventDefault();
    // const streams = this.state;
  }

  handleRemoveStream(name) {
    const { streams } = this.state;
    const newArray = streams.filter((stream) => (stream.name !== name));

    this.setState({
      streams: newArray
    });
  }

  handleKeyPress(e) {
    const fieldAmount = this.state.streams.length;
    const add = (a, b) => a + b;
    const fieldsFilled = this.state.streams.map((stream) => (
      (stream.name.length === 0) ? 0 : 1
    )).reduce(add);

    const enterPressed = e.key === 'Enter';
    const rule2 = fieldsFilled >= fieldAmount;
    if (enterPressed) {
      e.preventDefault();
      if (rule2) {
        this.addChannelField();
      }
    }
  }

  renderStreams() {
    return (
      this.state.streams.map((stream, index) => (
        <div key={`group-#${index}`} className="form-group">
          <input
            type="text"
            className="form-control-sm"
            placeholder="Channel Name"
            onChange={(e) => this.handleChange(index, e)}
            onKeyPress={this.handleKeyPress}
            value={stream.name}
          />
          <button
            className="btn-danger"
            id={`delete-${index}`}
            tabIndex="-1"
            onClick={() => this.handleRemoveStream(stream.name)}
          >
            x
          </button>
        </div>
      ))
    );
  }

  render() {
    const styles = {
      manageStyle: {
        height: 500,
        width: 300,
        backgroundColor: 'white'
      }
    };
    const { manageStyle } = styles;
    return (
      <div id="manage" style={manageStyle}>
        <form id="manage-form">
          {this.renderStreams()}
          <button
            type="button"
            onClick={this.handleSubmit}
            className="btn-primary"
          >
            Continue
          </button>
        </form>
      </div>

    );
  }
}
