import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.chatLoad = this.chatLoad.bind(this);
    this.node = null;
    this.animation = null;
  }
  componentDidMount() {
    this.chatLoad();
    this.animation = new TimelineLite({ paused: true })
      .from(this.node, 0, {
        display: 'none',
      });
      // .from(this.node, 0.3, {})
      // .from(this.node, 0.3, {
      //   x: 400,
      //   visibility: 0,
      // });
  }
  componentDidUpdate() {
    this.chatLoad();
    console.log('chat did update');
    console.log('active', this.props.active);
    console.log('this name:', this.props.name);
    if (this.props.active === this.props.name) {
      console.log('should animate');
      this.animation.restart();
    } else {
      this.animation.reverse();
    }
  }
  chatLoad() {
    const chat = this.node;
    chat.addEventListener('load', () => {
      this.props.onChatLoad(chat, this.props.streamChatRef);
      this.animation.play();
    });
  }
  render() {
    // const style = {
    //   display: 'none',
    // };
    return (
      <iframe
        key={`chat-${this.props.name}`}
        ref={node => this.node = node}
        className='streamChat'
        frameBorder="0"
        scrolling="yes"
        width='400'
        id={`chat-${this.props.name}`}
        src={`https://www.twitch.tv/embed/${this.props.name}/chat`}
      />
    );
  }
}
