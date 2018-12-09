import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import ReactPageScroller from 'react-page-scroller';

import { colors } from './variables';

import FrontSplash from './FrontSplash';
import FrontHow from './FrontHow';
import FrontUpdates from './FrontUpdates';
import FrontDonate from './FrontDonate';

export default class Front extends Component {
  constructor(props) {
    super(props);

    this.animation = null;
    this.div = null;
  }
  componentDidMount() {
    const width = window.innerWidth;

    this.animation = new TimelineLite({ pause: true })
      .from(this.div, 0.5, {})
      .from(this.div, 0.5, {
        x: -width,
        ease: Power3.easeOut,
      });
    this.animation.play();
  }

  componentWillUnmount() {
    this.animation.reverse();
  }

  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  render() {
    const styles = {
      front: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.orange,
        color: 'white',
      },
    };
    return (
      <div
        style={styles.front}
        id='front'
        ref={div => this.div = div}
      >
        <ReactPageScroller
          ref={c => this.reactPageScroller = c}
        >
          <FrontSplash />
          <FrontHow />
          <FrontUpdates />
          <FrontDonate />
        </ReactPageScroller>
      </div>
    );
  }
}
