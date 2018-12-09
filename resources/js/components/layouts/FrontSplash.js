import React, { Component } from 'react';
import { TweenMax } from 'gsap';

export default class FrontSplash extends Component {
  constructor(props) {
    super(props);
    this.scrollA = null;
    this.scroll = null;
  }
  componentDidMount() {
    this.scrollA = TweenMax
      .from(this.scroll, 1, {
        opacity: 0,
        repeat: -1,
        ease: Power1.easeOut,
        yoyo: true,
      });
  }
  render() {
    const smallScreen = window.matchMedia('(max-width: 768px)');
    let fontSize;
    let welcomeSize;
    let padding;
    let welcomePadding;
    if (smallScreen.matches) {
      fontSize = 26;
      welcomeSize = 10;
      padding = 0;
      welcomePadding = '0 0 0 15px';
    } else {
      fontSize = 54;
      welcomeSize = 14;
      padding = '110px 50px 80px 50px';
      welcomePadding = '0 0 0 15px';
    }
    const styles = {
      splash: {
        height: '100%',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        textTransform: 'uppercase',
        padding,
      },
      welcome: {
        letterSpacing: 3,
        fontSize: welcomeSize,
        width: '100%',
        textAlign: 'center'
      },
      welcomeHeader: {
        letterSpacing: 20,
        fontSize,
        width: '100%',
        textAlign: 'center',
        padding: welcomePadding,
      },
      scroll: {
        position: 'absolute',
        top: '90%',
        letterSpacing: 3,
      },
    };
    return (
      <div
        style={styles.splash}
      >
        <div
          style={styles.welcomeHeader}
        >
          Asakamulti
        </div>
        <div
          style={styles.welcome}
        >
          A Twitch Multi-Stream <br />
          To Support the streamers you love
        </div>
        <div
          style={styles.scroll}
          ref={scroll => this.scroll = scroll}
        >
          Scroll Down
        </div>
      </div>
    );
  }
}
