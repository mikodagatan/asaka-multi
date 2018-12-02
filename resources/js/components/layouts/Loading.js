import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import { colors } from './variables';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.loadAnimation = this.loadAnimation.bind(this);
    this.loadBase = this.loadBase.bind(this);
    this.twitchMultiply = this.twitchMultiply.bind(this);
    this.loadClose = this.loadClose.bind(this);

    this.loadT = {
      container: null,
      icon: [],
      textBlock: null,
      aniText: null
    };
    this.loadA = null;
  }


  componentDidMount() {
    this.loadAnimation();
    this.loadBase();
    this.twitchMultiply();
    this.loadClose();
  }
  componentDidUpdate(prev) {
    const current = this.props;
    const rule1 = (prev.loadingScreen === false);
    const rule2 = (current.loadingScreen === true);

    console.log(prev);
    console.log(current);
    if (rule1 && rule2) {
      console.log('Now Loading');
      this.loadA.play();
    }
  }
  loadAnimation() {
    const c = this.loadT.container;
    const i = this.loadT.icon;

    this.loadA = new TimelineMax({ paused: true })
      .to(c, 0, {
        position: 'fixed',
        overflow: 'hidden',
        cursor: 'default',
        zIndex: 11,
        border: '0',
        display: 'flex',
        top: '50%',
        left: -100,
        width: 150,
        height: 150,
        margin: '-87.5px 0 0 -87.5px',
        backgroundColor: colors.orange,
        borderRadius: '100%',
      }, 'init')
      .to(i, 0, {
        position: 'fixed',
        zIndex: 15,
        display: 'flex',
        top: '50%',
        left: -100,
        scale: 1.5,
        margin: '-37.5px 0 0 -37.5px',
      }, 'init');
  }
  loadBase() {
    const c = this.loadT.container;
    const i = this.loadT.icon;
    const block = this.loadT.textBlock;
    const text = this.loadT.aniText;
    this.loadA = this.loadA
    .to(c, 0.5, {
      left: '50%',
    }, 'move')
    .to(i, 0.5, {
      left: '50%',
    }, 'move')
    .to(c, 2, {
      scale: '100',
      ease: Power0.easeNone,
    }, 'grow')
    .to(i, 1, {
      repeat: 1,
      rotation: '+=360',
      ease: Power0.easeNone
    }, 'grow')
    .to(block, 0, {
      display: 'flex',
      position: 'fixed',
      top: '50%',
      left: '50%',
      margin: '-50px 0 0 -250',
      zIndex: 14,
    })
    .to(text, 0, {
      display: 'flex',
      position: 'fixed',
      zIndex: 13,
      top: '50%',
      left: '50%',
      color: 'white',
      margin: '-150px 0 0 -250px'
    })
    .to(i, 0.5, {})
    .to(text, 0.5, {
      top: '42.5%',
    }, 'showText')
    .to(i, 0.5, {
      top: '57.5%'
    }, 'showText')
    .to(block, 0.5, {
      top: '57.5%',
      height: 10
    }, 'showText')
    .to(i, 0.5, {
    });
  }
  twitchMultiply() {
    const i = this.loadT.icon;
    this.loadA = this.loadA
      .to(i, 0.5, {
        rotationX: 30,
        rotationY: 30
      })
      .add(TweenMax.to(i[0], 0.5, {
        left: '30%',
        repeat: 1,
        yoyo: true,
        ease: Power3.easeOut
      }), 'multiply')
      .add(TweenMax.to(i[1], 0.5, {
        left: '40%',
        repeat: 1,
        yoyo: true,
        ease: Power3.easeOut
      }), 'multiply')
      .add(TweenMax.to(i[3], 0.5, {
        left: '60%',
        repeat: 1,
        yoyo: true,
        ease: Power3.easeOut
      }), 'multiply')
      .add(TweenMax.to(i[4], 0.5, {
        left: '70%',
        repeat: 1,
        yoyo: true,
        ease: Power3.easeOut
      }), 'multiply');
  }
  loadClose() {
    const c = this.loadT.container;
    const i = this.loadT.icon;
    const block = this.loadT.textBlock;
    const text = this.loadT.aniText;

    this.loadA = this.loadA
      .to(block, 0.5, {
        display: 'none'
      })
      .to(c, 0, {
        borderRadius: 0,
        scale: 10,
      })
      .to(c, 0.5, {
        left: 3000
      }, 'exit-right')
      .to(i, 0.5, {
        left: 3000
      }, 'exit-right')
      .to(text, 0.5, {
        left: 3000
      }, 'exit-right');
  }
  twitchIcons() {
    const styles = {
      twitchIcon: {
        height: 50,
        width: 50,
        display: 'none',
      },
    };
    return (
      [0, 1, 2, 3, 4].map((number, index) => (
        <img
          id={`twitch-icon-${index}`}
          key={`twitch-icon-${index}`}
          ref={icon => this.loadT.icon[index] = icon}
          style={styles.twitchIcon}
          src="/../img/twitch_PNG33.png"
          alt={`twitch-icon-${index}`}
        />
      ))
    );
  }
  render() {
    const styles = {
      watchAnimation: {
        display: 'none',
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textBlock: {
        height: 100,
        width: 500,
        backgroundColor: colors.orange,
        display: 'none',
      },
      aniText: {
        color: 'white',
        fontSize: '50px',
        display: 'none',
        textTransform: 'uppercase',
        letterSpacing: 15,
        height: 300,
        width: 500,
        justifyContent: 'center',
        alignItems: 'center',
      }
    };
    return (
      <div>
        <div
          id='watch-animation'
          style={styles.watchAnimation}
          ref={watch => this.loadT.container = watch}
        />
        {this.twitchIcons()}
        <div
          id='text-block'
          ref={block => this.loadT.textBlock = block}
          style={styles.textBlock}
        />
        <div
          id='ani-text'
          ref={text => this.loadT.aniText = text}
          style={styles.aniText}
        >
          <div>
          Asakamulti
          </div>
        </div>
      </div>
    );
  }
}
