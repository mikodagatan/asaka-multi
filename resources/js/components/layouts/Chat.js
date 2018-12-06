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
      // .to(this.node, 0, {
      //   display: 'block',
      // });
      // .from(this.node, 0.3, {})
      // .from(this.node, 0.3, {
      //   x: 400,
      //   visibility: 0,
      // });
  }
  componentDidUpdate(prev) {
    // const case1 = (prev.streamChatHeight !== this.props.streamChatHeight);
    const case2 = (prev.streamHeadersHeight !== this.props.streamHeadersHeight);
    // const case3 = (prev.name !== this.props.name);

    if (case2) {
      console.log('props received for', this.props.name,
      'streamHeadersHeight:',
      this.props.streamHeadersHeight);

      this.chatResize();
    }
  }
  // chatLoad() {
  //   const chat = this.node;
  //   chat.addEventListener('load', () => {
  //     this.chatResize();
  //   });
  // }
  // headersExpand() {
  //   const streamHeaders = this.props.streamHeaders;
  //   streamHeaders.addEventListener('resize', () => {
  //     this.chatResize();
  //   });
  // }
  chatResize() {
    const chat = this.node;
    const height = this.props.streamChatHeight;

    chat.style.height = `${height}px`;
  }
  render() {
    const styles = {
      active: {
        display: 'block',
      },
      normal: {
        display: 'none',
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
        width='400'
        id={`chat-${this.props.name}`}
        src={`https://www.twitch.tv/embed/${this.props.name}/chat`}
      />
    );
  }
}
