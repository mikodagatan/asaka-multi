import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import { colors } from './variables';

export default class FrontUpdates extends Component {
  constructor(props) {
    super(props);
    this.scrollA = null;
    this.scroll = null;
  }
  componentDidMount() {
  }
  render() {
    const smallScreen = window.matchMedia('(max-width: 768px)');
    if (smallScreen.matches) {
    } else {
    }
    const styles = {
      donate: {
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.body,
        padding: '110px 50px 80px 50px',
      },
      header: {
        fontSize: 40,
        textAlign: 'center',
        width: '100%',
      },
      body: {
        fontSize: 13,
        width: '375px',
      },
      donateLink: {
        color: colors.orange,
        textDecoration: 'none',
      }
    };
    return (
      <div
        style={styles.donate}
      >
        <div
          style={styles.header}
        >
          Like it?
        </div>
        <div
          style={styles.body}
        >
          If you like this project and would like to support what we're doing, you can do so by <a style={styles.donateLink} href="https://streamlabs.com/phantasmaasaka">donating</a>!
          <br />
          It would greatly help us to maintain and improve this site!
        </div>
      </div>
    );
  }
}
