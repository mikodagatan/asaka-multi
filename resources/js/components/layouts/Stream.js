import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false
    };

    this.renderStream = this.renderStream.bind(this);
    this.streamUpdate = this.streamUpdate.bind(this);
  }

  componentDidMount() {
    this.renderStream();
    this.enterAnimation = new TimelineLite({
      paused: true,
    });
  }

  shouldComponentUpdate() {
    const case1 = (this.props.load === true);
    return (case1);
  }

  componentDidUpdate(prevProps, prevState) {
    this.streamUpdate(prevProps, prevState);
  }

  streamUpdate() {
    const case1 = (this.state.rendered === false);
    if (case1) {
      this.renderStream();
    }
  }

  renderStream() {
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
    }
  }
  render() {
    return (
      <div
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
