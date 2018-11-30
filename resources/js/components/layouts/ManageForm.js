import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { colors } from './variables';


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

    this.target = null;
    this.animation = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.animation = this.animation
      .from(this.target, 0.3, {
        x: -500,
        ease: Power3.easeOut,
        display: 'block',
        delay: 0.3
      });
  }

  componentDidUpdate() {
    if (this.props.multi) {
      this.animation.play();
    } else {
      this.animation.delay(0.3).reverse();
    }
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

  handleRemoveStream(name, e) {
    e.preventDefault();
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
    const style = {
      input: {
        border: `2px solid ${colors.body}`,
        borderRight: 'none',
        borderRadius: '20px 0 0 20px',
        outline: 'none',
        width: 200,
      },
      close: {
        width: 30,
        borderRadius: '0 5px 5px 0',
        border: 'none',
        padding: 6.5,
        fontSize: 10,
        backgroundColor: '#e3342f',
        color: 'white',
      }
    };
    return (
      this.state.streams.map((stream, index) => (
        <div key={`group-#${index}`} className="form-group">
          <input
            type="text"
            style={style.input}
            className="form-control-sm"
            placeholder="Channel Name"
            onChange={(e) => this.handleChange(index, e)}
            onKeyPress={this.handleKeyPress}
            value={stream.name}
          />
          <button
            style={style.close}
            id={`delete-${index}`}
            tabIndex="-1"
            onClick={(e) => this.handleRemoveStream(stream.name, e)}
          >
            X
          </button>
        </div>
      ))
    );
  }

  render() {
    const styles = {
      manageStyle: {
        height: '95vh',
        width: 300,
        backgroundColor: colors.nav,
        position: 'absolute',
        top: 30,
        padding: '2rem',
        marginBottom: 10,
        left: '-500',
      },
      manageHeader: {
        fontSize: 20
      },
      submit: {
        marginTop: 10,
        borderRadius: 5,
        '&:hover': {
          cursor: 'pointer',
        }
      }
    };
    return (
      <div
        id="manage"
        ref={manage => this.target = manage}
        style={styles.manageStyle}
      >
        <p style={styles.manageHeader}>Manage Streams</p>
        <form id="manage-form">
          {this.renderStreams()}
          <button
            style={styles.submit}
            type="button"
            onClick={this.handleSubmit}
            className="btn-primary"
          >
            Watch Streams
          </button>
        </form>
      </div>

    );
  }
}
