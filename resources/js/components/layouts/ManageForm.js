import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { colors } from './variables';
import { styles } from './styles/ManageFormS';

export default class ManageForm extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRemoveStream = this.handleRemoveStream.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleWatch = this.handleWatch.bind(this);
    this.watchButton = this.watchButton.bind(this);

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
    // ManageForm Animation

    this.animation = this.animation
      .from(this.target, 0.3, {
        x: -500,
        ease: Power3.easeOut,
        display: 'block',
        delay: 0.2
      });

    // Close Animation

    this.closeHoverA.label = new TimelineMax({ paused: true })
      .to(this.closeTarget.label, 0.25, {
        color: colors.orange,
        ease: Power4.easeOut
      }, 'together')
      .to(this.closeTarget.label, 0.7, {
        width: 0,
        ease: Power3.easeOut
      }, 'together')
      ;
    this.closeHoverA.close = new TimelineMax({ paused: true })
      .to(this.closeTarget.close, 0.7, {
        width: 300,
        ease: Power3.easeOut
      });
  }

  componentDidUpdate() {
    if (this.props.manage) {
      this.animation.play();
      // document.getElementById('watch')
        // .setAttribute('data-clicked', 'false');
    } else {
      this.animation.reverse();
    }
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

    if (key === 'Enter') {
      e.preventDefault();
    }

    const fieldAmount = this.props.streams.length;
    const add = (a, b) => a + b;
    const fieldsFilled = this.props.streams.map((stream) => (
      (stream.name.length === 0) ? 0 : 1
    )).reduce(add);

    const rule1 = target.value.length === 4;
    const rule2 = index + 1 >= fieldsFilled;
    const rule3 = fieldsFilled >= fieldAmount;

    let addChannel = null;

    if (rule1 && rule2 && rule3) {
      addChannel = this.props.addChannel;
    }

    this.props.storeInput(index, target, addChannel);
  }

  handleRemoveStream(name, e) {
    e.preventDefault();
    const length = this.props.streams.length;
    if (length > 1) {
      this.props.removeStream(name);
    }
  }

  handleKeyPress(e) {
    const enterPressed = e.key === 'Enter';
    if (enterPressed) {
      e.preventDefault();
      this.handleWatch(e);
    }
  }

  handleWatch(e) {
    e.preventDefault();
    this.props.closeManage();
    const { target } = e;
    if (this.props.start === false) {
      this.props.changeStart();
      this.props.setLoadScreen();
    } else {
      this.props.changeLoad();
    }
    if (target.getAttribute('data-clicked') === false) {
      target.setAttribute('data-clicked', 'true');
    }
  }
  watchButton() {
    return (
      <button
        id='watch'
        style={styles.submit}
        onClick={this.handleWatch}
        data-clicked='false'
        className="btn-primary"
      >
        Watch
      </button>
    );
  }

  renderStreamFields() {
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
      this.props.streams.map((stream, index) => (
        <div
          key={`group-${index}`}
          className="form-group"
        >
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
          {this.renderStreamFields()}


        </form>
      </div>

    );
  }
}
