import React, { Component } from 'react';
import { TimelineLite } from 'gsap';


export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false
    };

    this.aniTarget = null;
    this.enterAnimation = null;
    this.renderStream = this.renderStream.bind(this);
    this.streamUpdate = this.streamUpdate.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }

  componentDidMount() {
    console.log('Stream:', this.props.channel, 'is mounted');
    this.renderStream();
    this.enterAnimation = new TimelineLite({
      paused: true,
    });
  }

  shouldComponentUpdate() {
    const case1 = (this.props.load === true);
    console.log(this.props.channel, 'should update: ', case1);
    return (case1);
  }

  componentDidUpdate(prevProps, prevState) {
    this.streamUpdate(prevProps, prevState);
  }

  setAnimation(target) {
    this.enterAnimation = this.enterAnimation
      .from(target, 2, {
        visibility: 0,
        y: 30
      });
  }

  streamUpdate(prevProps, prevState) {
    console.log('stream updating');
    const case1 = (this.state.rendered === false);
    console.log(
      this.props.channel,
      ', rendered: ',
      prevState.rendered,
      'load: ',
      this.props.load,
      'case1:', case1
    );
    if (case1) {
      console.log('rendering stream:', this.props.channel, 'from streamUpdate');
      this.renderStream();
    }
  }

  renderStream() {
    console.log('Stream: renderStream');
    const p = this.props;
    let player;
    if (p.channel !== '') {
      player = new window.Twitch.Player(
        p.targetID, {
          channel: p.channel,
          width: p.width,
          height: p.height,
          muted: p.muted,
        });
      player.setVolume(0.01);
      if (player.getMuted() === true) {
        player.setMuted(false);
      }
      this.setState({
        rendered: true
      });
      // this.aniTarget = player;
      // this.setAnimation(this.aniTarget);
      // const case1 = this.aniTarget !== null;
      // console.log('video ready:', player);
      // player.addEventListener(window.Twitch.Player.VIDEO_READY, function () {
      //   this.enterAnimation.play();
      //   console.log('Stream Animation done!');
      // });
      console.log('Stream: stream rendered');
    }
  }
  render() {
    return (
      <div
        // ref={div => this.aniTarget = div}
        key={this.props.targetID}
        id={this.props.targetID}
        className="streamChannel"
      />
    );
  }
}
Stream.defaultProps = {
  width: 350,
  height: 196.875,
  targetID: 'twitch-embed',
  muted: false,
  channel: 'PhantasmaAsaka'
};
