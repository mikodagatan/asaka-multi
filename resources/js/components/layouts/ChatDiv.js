import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { colors } from './variables';
import { styles } from './styles/ChatDivS';

import Chat from './Chat';


export default class ChatDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
      streamHeadersHeight: null,
    };

    this.handleClose = this.handleClose.bind(this);
    this.streamHeaders = this.streamHeaders.bind(this);
    this.streamChat = this.streamChat.bind(this);
    this.setActive = this.setActive.bind(this);
    this.handleStreamHeaderResize = this.handleStreamHeaderResize.bind(this);

    this.streamBodyRef = null;
    this.streamChatRef = null;
    this.streamHeadersRef = null;
    this.streamButton = [];
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
      .from(this.target, 1, {
        ease: Power3.easeOut,
      });
    // Close Animation

    this.closeHoverA.label = new TimelineMax({ paused: true })
      .to(this.closeTarget.label, 0.25, {
        color: colors.body,
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active === null) {
      this.setState({
        active: this.props.streams[0].name
      });
    }

    const streamHeadersHeight = this
      .streamHeadersRef
      .offsetHeight;
    if (prevState.streamHeadersHeight !== streamHeadersHeight) {
      this.handleStreamHeaderResize();
      this.setState({
        streamHeadersHeight
      });
    }
  }

  setActive(name, e) {
    console.log(e);
    this.setState({
      active: name
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
    this.props.closeChat();
  }

  handleStreamHeaderResize() {
    const streamHeaders = this.streamHeadersRef;
    const streamChat = this.streamChatRef;
    const streamBody = this.streamBodyRef;
    const height = streamBody.offsetHeight - streamHeaders.offsetHeight;
    streamChat.style.height = `${height}px`;
  }

  streamHeaders() {
    const streams = this.props.streams.filter((stream) => stream.name !== '');
    return (
      streams.map((stream) => (
        <div
          style={(this.state.active === stream.name) ? styles.streamHeadActive : styles.streamHead}
          key={`streamChatButton-${stream.name}`}
          onClick={(e) => this.setActive(stream.name, e)}
        >
          {stream.name}
        </div>
      ))
    );
  }

  streamChat() {
    const streams = this.props.streams.filter((stream) => stream.name !== '');

    return (
      streams.map((stream) => (
        <Chat
          key={`streamChatComp-${stream.name}`}
          name={stream.name}
          streamChatHeight={this.streamChatRef.offsetHeight}
          streamHeadersHeight={this.state.streamHeadersHeight}
          active={this.state.active}
        />
      ))
    );
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
            {`${this.state.active}`}
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
          ref={s => this.streamBodyRef = s}
        >
          <div
            id='streamHeaders'
            ref={s => this.streamHeadersRef = s}
            style={styles.streamHeaders}
          >
            {this.streamHeaders()}
          </div>
          <div
            id='streamChat'
            ref={s => this.streamChatRef = s}
            style={styles.streamChat}
          >
            {this.streamChat()}
          </div>

        </div>
      </div>

    );
  }
}
