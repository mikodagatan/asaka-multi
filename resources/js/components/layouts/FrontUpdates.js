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
      updates: {
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
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
      }
    };
    return (
      <div
        style={styles.updates}
      >
        <div
          style={styles.header}
        >
          FEATURE PLANS
        </div>
        <div
          style={styles.body}
        >
          <ul>
            <li>Stream Sizing</li>
            <li>Global Volume Adjustment</li>
            <li> 15-minutes of Fame
              <ul>
                <li>
                  Small streamers will get a chance to be included in your multi-stream for 15 minutes.
                </li>
                <li>
                  Can be turned off in the 'Manage' side menu.
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}
