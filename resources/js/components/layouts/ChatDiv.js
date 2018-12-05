import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { colors } from './variables';
import { styles } from './styles/ChatDivS';

export default class ChatDiv extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.streamHeaders = this.streamHeaders.bind(this);

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
    // ChatForm Animation

    this.animation = this.animation
      .from(this.target, 0.3, {
        x: 500,
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
        width: 400,
        ease: Power3.easeOut
      });
  }

  componentDidUpdate() {
    if (this.props.chat) {
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
    this.props.closeChat();
  }

  streamHeaders() {
    const streams = this.props.streams.filter((stream) => stream.name !== '');

    return (
      streams.map((stream) => (
        <div
          style={styles.streamHead}
        >
          {stream.name}
        </div>
      ))
    );
  }

  streamChat() {
    const streams = this.props.streams.filter((stream) => stream.name !== '');
    // const chatHeight = document.getElementById('chatBody').offsetHeight();

    return (
      streams.map((stream) => (
        <div>
          <iframe
            key={`chat-${stream.name}`}
            className='streamChat'
            frameBorder="0"
            scrolling="yes"
            id={`chat-${stream.name}`}
            src={`https://www.twitch.tv/embed/${stream.name}/chat`}
          />
        </div>
      ))
    );
  }

  resizeChat() {
    const chatHeight = document.getElementById('chatBody').height();

  }

  render() {
    return (
      <div
        id="chatDiv"
        ref={chat => this.target = chat}
        style={styles.ChatDiv}
      >
        <div id="chatHeader" style={styles.chatHeader}>
          <div
            ref={label => this.closeTarget.label = label}
            id="chatLabel"
            style={styles.chatLabel}
          >
            Stream Chat
          </div>
          <div
            ref={close => this.closeTarget.close = close}
            id="closeChat"
            style={styles.closeChat}
            onClick={this.handleClose}
            onMouseEnter={e => this.handleCloseHover(e)}
            onMouseLeave={e => this.handleCloseHoverR(e)}
          >
            Close
          </div>
        </div>
        <div
          id='chatBody'
          style={styles.chatBody}
        >
          <div
            id='streamHeaders'
            style={styles.streamHeaders}
          >
            {this.streamHeaders()}
          </div>
          <div
            id='streamChat'
            style={styles.streamChat}
          >
            {this.streamChat()}
          </div>

        </div>
      </div>

    );
  }
}
