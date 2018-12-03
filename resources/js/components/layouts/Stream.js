import React, { Component } from 'react';
import { styles } from './styles/MultiStreamS';


export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false
    };
    this.renderStream = this.renderStream.bind(this);
  }
  componentDidMount() {
  }
  componentDidUpdate(prevProps, prevState) {
    const case1 = (prevState.rendered === false);
    const case2 = (this.props.load === true);
    if (case1 && case2) {
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
          muted: p.muted
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
