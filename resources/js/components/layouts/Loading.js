import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import { colors } from './variables';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.loadAnimation = this.loadAnimation.bind(this);
    this.loadStart = this.loadStart.bind(this);
    this.loadBase = this.loadBase.bind(this);
    this.twitchMultiply = this.twitchMultiply.bind(this);
    this.loadClose = this.loadClose.bind(this);
    this.completeAnimation = this.completeAnimation.bind(this);

    this.loadT = {
      container: null,
      icon: [],
      textBlock: null,
      aniText: null,
      viewBlock: null,
    };
    this.loadA = null;
  }


  componentDidMount() {
    this.loadAnimation();
  }
  componentDidUpdate(prev) {
    const current = this.props;
    const rule1 = (prev.loadingScreen === false);
    const rule2 = (current.loadingScreen === true);

    if (rule1 && rule2) {
      this.loadA.play();
    }
  }
  completeAnimation() {
    this.props.useMulti();
  }
  loadAnimation() {
    this.loadStart();
    this.loadBase();
    this.twitchMultiply();
    this.loadClose();
  }
  loadStart() {
    const c = this.loadT.container;
    const i = this.loadT.icon;
    const vBlock = this.loadT.viewBlock;


    this.loadA = new TimelineMax({
      paused: true
    })
      .to(c, 0, {
        position: 'fixed',
        overflow: 'hidden',
        cursor: 'default',
        zIndex: 11,
        border: '0',
        display: 'flex',
        top: '50%',
        left: '50%',
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
        left: '50%',
        scale: 1.5,
        margin: '-37.5px 0 0 -37.5px',
      }, 'init')
      .to(vBlock, 0, {
        height: '100vh',
        width: '100vw',
        zIndex: 10,
        position: 'fixed',
        top: 0,
        backgroundColor: colors.body
      });
  }
  loadBase() {
    const c = this.loadT.container;
    const i = this.loadT.icon;
    const block = this.loadT.textBlock;
    const text = this.loadT.aniText;
    this.loadA = this.loadA

    .to(c, 1, {
      // left: '50%',
      // ease: Power3.easeOut,
    }, 'move')
    .to(i, 1, {
      // left: '50%',
      // ease: Power3.easeOut,
    }, 'move')
    .to(c, 2, {
      scale: '20',
      ease: Power0.easeNone,
    }, 'grow')
    .to(i, 2, {
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
    const block = this.loadT.textBlock;

    const smallScreen = window.matchMedia('(max-width: 768px)');
    this.loadA = this.loadA
      .to(block, 0, {
        zIndex: 1,
      })
      .to(i, 0, {
        backgroundColor: colors.orange,
        zIndex: 12,
      })
      .to(i[2], 0, {
        zIndex: 30,
      })
      .to(i[0], 0, {
        zIndex: 11,
      })
      .to(i[4], 0, {
        zIndex: 11,
      });
    if (smallScreen.matches) {
      this.loadA = this.loadA
        .to(i, 0.5, {
          rotationX: 30,
          rotationY: 30,
        })
        .add(TweenMax.to(i[0], 0.5, {
          top: '10%',
          repeat: 1,
          yoyo: true,
          ease: Power3.easeOut
        }), 'multiply')
        .add(TweenMax.to(i[1], 0.5, {
          top: '30%',
          repeat: 1,
          yoyo: true,
          ease: Power3.easeOut
        }), 'multiply')
        .add(TweenMax.to(i[3], 0.5, {
          top: '70%',
          repeat: 1,
          yoyo: true,
          ease: Power3.easeOut
        }), 'multiply')
        .add(TweenMax.to(i[4], 0.5, {
          top: '90%',
          repeat: 1,
          yoyo: true,
          ease: Power3.easeOut
        }), 'multiply');
    } else {
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
  }
  loadClose() {
    const c = this.loadT.container;
    const i = this.loadT.icon;
    const block = this.loadT.textBlock;
    const text = this.loadT.aniText;
    const vBlock = this.loadT.viewBlock;
    this.loadA = this.loadA
      .to(block, 1, {
        display: 'none'
      })
      .to(c, 0, {
        borderRadius: 0,
        scale: 10,
      })
      .to(c, 2, {
        left: 3000
      }, 'exit-right')
      .to(i, 2, {
        left: 3000
      }, 'exit-right')
      .to(text, 2, {
        left: 3000
      }, 'exit-right')
      .to(vBlock, 2, {
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
          className="aniText"
        >
          <div>
          Asakamulti
          </div>
        </div>
        <div
          id='view-block'
          ref={viewBlock => this.loadT.viewBlock = viewBlock}
          styles={styles.viewBlock}
        />
      </div>
    );
  }
}
