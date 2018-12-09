import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    // this.chatLoad = this.chatLoad.bind(this);
    // this.headersExpand = this.headersExpand.bind(this);
    this.chatResize = this.chatResize.bind(this);

    this.node = null;
    this.animation = null;
  }
  componentDidMount() {
    this.animation = new TimelineLite({ paused: true });
  }
  componentDidUpdate() {
    // this.chatResize();
  }

  chatResize() {
    const chat = this.node;
    // const height = this.props.streamChatHeight;
    // console.log('chat: chatResize');

    chat.style.height = '100%';
  }
  render() {
    const styles = {
      active: {
        display: 'block',
        height: '100%'
      },
      normal: {
        display: 'none',
        height: '100%'
      }
    };
    return (
      <iframe
        key={`chat-${this.props.name}`}
        ref={node => this.node = node}
        style={(this.props.active === this.props.name) ? styles.active : styles.normal}
        className='streamChat'
        frameBorder="0"
        scrolling="yes"
        height='539'
        width='375'
        id={`chat-${this.props.name}`}
        src={`https://www.twitch.tv/embed/${this.props.name}/chat`}
      />
    );
  }
}
