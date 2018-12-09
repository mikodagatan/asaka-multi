import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

import { colors } from './variables';

export default class Front extends Component {
  constructor(props) {
    super(props);

    this.animation = null;
    this.div = null;
  }
  componentDidMount() {
    const width = window.innerWidth;

    this.animation = new TimelineLite({ pause: true })
      .from(this.div, 0.5, {
        x: -width,
      })
  }

  componentWillUnmount

  render() {

    const styles = {
      front: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.orange,
        color: 'white',
        fontSize: 50,
      }
    };
    return (
      <div
        style={styles.front}
        ref={div => this.div = div}
      >
        POTANGINA
      </div>
    );
  }
}
