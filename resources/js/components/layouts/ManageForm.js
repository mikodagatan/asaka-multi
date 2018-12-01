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
    this.handleClose = this.handleClose.bind(this);

    this.target = null;
    this.animation = new TimelineMax({ paused: true });
    this.closeTarget = {
      label: null,
      close: null,
    };
    this.closeHoverA = {
      label: null,
      close: null
    };
  }

  componentDidMount() {
    this.animation = this.animation
      .from(this.target, 0.3, {
        x: -500,
        ease: Power3.easeOut,
        display: 'block',
        delay: 0.2
      });
    this.closeHoverA.label = new TimelineMax({ paused: true })
      .to(this.closeTarget.label, 0.7, {
        width: 20,
      });
    this.closeHoverA.close = new TimelineMax({ paused: true })
      .to(this.closeTarget.close, 0.7, {
        width: 400,
      });
  }

  componentDidUpdate() {
    if (this.props.manage) {
      this.animation.play();
    } else {
      this.animation.reverse();
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
  handleCloseHover() {
    this.closeHoverA.close.play();
    this.closeHoverA.label.play();
  }
  handleCloseHoverR() {
    this.closeHoverA.close.reverse();
    this.closeHoverA.label.reverse();
  }
  handleClose() {
    this.props.closeManage();
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
        width: 250,
      },
      close: {
        width: 30,
        borderRadius: '0 5px 5px 0',
        border: 'none',
        padding: 6.5,
        fontSize: 10,
        backgroundColor: colors.red,
        color: 'white',
        cursor: 'pointer',
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
        marginBottom: 10,
        left: '-500',
        overflowY: 'scroll',
        textAlign: 'center',
      },
      manageHeader: {
        display: 'flex',
        width: 300,
        height: 70,
      },
      manageLabel: {
        backgroundColor: colors.orange,
        fontSize: 14,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: 'white',
        width: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      closeManage: {
        display: 'flex',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: 2.5,
        backgroundColor: colors.red,
        cursor: 'pointer',
        overflowX: 'hidden',
      },
      manageForm: {
        padding: '1rem',
      },
      submit: {
        marginTop: 10,
        padding: '5px 20px 5px 20px',
        borderRadius: 5,
        outline: 'none',
        cursor: 'pointer'
      }
    };
    return (
      <div
        id="manage"
        ref={manage => this.target = manage}
        style={styles.manageStyle}
      >
        <div id="manageHeader" style={styles.manageHeader}>
          <div
            ref={label => this.closeTarget.label = label}
            id="manageLabel"
            style={styles.manageLabel}
          >
            Manage Streams
          </div>
          <div
            ref={close => this.closeTarget.close = close}
            id="closeManage"
            style={styles.closeManage}
            onClick={this.handleClose}
            onMouseEnter={e => this.handleCloseHover(e)}
            onMouseLeave={e => this.handleCloseHoverR(e)}
          >
            Close
          </div>
        </div>

        <form
          id="manage-form"
          style={styles.manageForm}
        >
          {this.renderStreams()}
          <button
            style={styles.submit}
            type="button"
            onClick={this.handleSubmit}
            className="btn-primary"
          >
            Watch
          </button>
        </form>
      </div>

    );
  }
}
