import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import Waypoint from 'react-waypoint';

import { colors } from './variables';

export default class FrontHow extends Component {
  constructor(props) {
    super(props);

    this.missionA = null;
    this.missionT = {
      div: null,
      header: null,
      body: null,
    };

    this.howA = null;
    this.howT = {
      div: null,
      header: null,
      body: null,
    };

    this.tipsA = null;
    this.tipsT = {
      div: null,
      header: null,
      body: null,
    };

    this.handleEnter = this.handleEnter.bind(this);
  }
  componentDidMount() {
    const smallScreen = window.matchMedia('(max-width: 768px)');
    let delay = [];
    if (!smallScreen.matches) {
      delay = [1.5, 2.5, 3.5];
      this.missionA = new TimelineLite({ paused: true })
        .delay(delay[0])
        .from(this.missionT.header, 0.5, {
          opacity: 0,
          x: -100,
        })
        .from(this.missionT.body, 0.5, {
          opacity: 0,
          x: -100,
        });
    } else {
      delay = [0, 1.5, 2.5];
    }


    this.howA = new TimelineLite({ paused: true })
      .delay(delay[1])
      .from(this.howT.header, 0.5, {
        opacity: 0,
        x: -100
      })
      .from(this.howT.body, 0.5, {
        opacity: 0,
        x: -100
      });

      this.tipsA = new TimelineLite({ paused: true })
        .delay(delay[2])
        .from(this.tipsT.header, 0.5, {
          opacity: 0,
          x: -100
        })
        .from(this.tipsT.body, 0.5, {
          opacity: 0,
          x: -100
        });
  }
  handleEnter() {
    console.log('waypoint enter');
    const smallScreen = window.matchMedia('(max-width: 768px)');
    if (smallScreen.matches) {
      this.howA.play();
      this.tipsA.play();
    } else {
      this.missionA.play();
      this.howA.play();
      this.tipsA.play();
    }
  }
  mission(styles) {
    const smallScreen = window.matchMedia('(max-width: 768px)');
    if (smallScreen.matches) {
      return null;
    } else {
      return (
        <div
          id='mission'
          ref={mission => this.missionT.div = mission}
          style={styles.mission}
        >
          <div
            ref={header => this.missionT.header = header}
            style={styles.missionH}
          >
            MY MISSION
          </div>
          <div
            ref={body => this.missionT.body = body}
          >
            Twitch is an amazing platform for streamers and viewers alike. We fell in love with so many amazing streamers and want to express our support by hanging out in their stream.
            <div className='break' />
            However, we sometimes need to tend to our responsibilities - our schoolworks, our jobs, our promises to keep, our time with our loved ones, and many more. We need to adult sometimes you know?
            <div className='break' />
            In order to continue support to our beloved streamers, we use multiple tabs with their streams. If we're supporting a few streamers, it doesn't take much of your time. But, this may grow to be more difficult since there's just so many amazing streamers out there who capture our hearts! Damnnnnnn you all for making me laugh!
            <div className='break' />
            You may have found many multi-stream websites out there and used them. I did so too and even fell in love with one! Unfortunately, there are many rules so that your support for them does actually get counted, and it's been hard for me to keep up even with the my favorite multi-stream website.
            <div className='break' />
            I made this so that I can make sure the views are counted while using a multi-streaming app. I made this so that I can do my responsibilities while giving support to these amazing individuals. I made this so that you can benefit from it too.
            <div className='break' />
            <div style={styles.missionRegards}>
              All the best,
              <br />
              Miko
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    const smallScreen = window.matchMedia('(max-width: 768px)');
    const fullHeight = 'calc(100% + 30px)';

    let height;
    let padding;
    let missionPadding;
    let width;
    let containerHeight;
    let fontSize;
    let headerSize;
    if (smallScreen.matches) {
      padding = 0;
      missionPadding = '70px 10px 5px 10px';
      width = '100%';
      height = 'auto';
      containerHeight = '100%';
      fontSize = 10;
      headerSize = 15;
    } else {
      padding = '110px 50px 80px 50px';
      missionPadding = '0 50px 0 50px';
      width = '50%';
      height = '100%';
      containerHeight = fullHeight;
      fontSize = 13;
      headerSize = 30;
    }
    const styles = {
      howContainer: {
        backgroundColor: colors.nav,
        color: 'black',
        width: '100%',
        height: containerHeight,
        padding,
        display: 'flex',
        flexWrap: 'wrap',
        fontSize,
      },
      mission: {
        height,
        width,
        padding: missionPadding,
      },
      missionH: {
        fontSize: headerSize,
        letterSpacing: 5,
      },
      missionRegards: {
        textAlign: 'right',
      },
      how: {
        height,
        width,
        padding: missionPadding,
      },
      howH: {
        fontSize: headerSize,
        letterSpacing: 5,

      }
    };

    return (
      <Waypoint onEnter={this.handleEnter}>
        <div
          id='howContainer'
          style={styles.howContainer}
        >
          {this.mission(styles)}
          <div
            id='how'
            ref={how => this.howT.div = how}
            style={styles.how}
          >
            <div
              ref={header => this.howT.header = header}
              style={styles.howH}
            >
              USAGE
            </div>
            <div ref={body => this.howT.body = body} >
              There are two ways to use this website:
              <div className='break' />
              <ol>
                <li>
                  Type on the address bar. For example:  'asakamulti.com/phantasmaasaka/rox_games/mister_bobbie'.
                </li>
                <li>
                  Click on 'Enter Multi Mode' and enter the streams you love and support.
                </li>
              </ol>
            </div>
            <div
              ref={header => this.tipsT.header = header}
              style={styles.howH}
            >
              TIPS
            </div>
            <div ref={body => this.tipsT.body = body} >
              To make your view count, these are the best convenient practices (as per my experiences):
              <div className='break' />
              <ul>
                <li>
                  Put this website on a separate window as the only tab.
                </li>
                <li>
                  The streams are set at the minimum volume to get counted with the least amount of noise.
                </li>
                <li>
                  If you need to mute, please mute the tab instead. (Right-click the tab)
                </li>
                <li>
                  No need to chat on the streams. But, it's still best to let them know you love them!
                </li>
                <li>
                  Write the streams you support on a notepad or Google Keep in the Usage #1 format. Copy then paste them on the address bar!
                </li>
                <li>
                  If you need to remove streams. Just click 'Manage' and click the 'X' button to the corresponding stream!
                </li>
                <li>
                  You can use your mobile phone for this website! Just a warning though, it will also get hot (twitch stuff). You may need to plug it to a charger too.
                </li>
                <li>
                  If you want to add a feature, feel free to message me on <a href='https://www.twitch.tv/phantasmaasaka'>Twitch!</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </Waypoint>
    );
  }
}
