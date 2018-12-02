import React, { Component } from 'react';

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
    const style = {
      color: 'white',
    };
    return (
      <div style={style}>
        <div id={this.props.targetID} />
      </div>
    );
  }
}
Stream.defaultProps = {
  width: 355,
  height: 199.6875,
  targetID: 'twitch-embed',
  muted: false,
  channel: 'PhantasmaAsaka'
};
