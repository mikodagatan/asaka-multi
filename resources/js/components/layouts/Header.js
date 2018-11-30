import React, { Component } from 'react';
import {
  TimelineMax
} from 'gsap';
import { colors } from './variables';
import NavLink from './elements/NavLink';
// import MultiButton from './MultiButton';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleMultiClick = this.handleMultiClick.bind(this);
    this.target = [];
    this.animation = new TimelineMax({ paused: true });
    this.multiAnimation = null;
  }

  componentDidMount() {
    this.animation = this.animation.from(this.target[0], 1, {
      x: 200,
      ease: Bounce.easeOut
    }).play();
    this.multiAnimation = new TimelineMax({ paused: true })
      .to(this.target[0], 0.3, {
        backgroundColor: colors.orange,
        height: 30,
      }).to(this.target[0], 0.3, {

      });
  }

  handleMultiClick() {
    let multi;
    if (this.props.multi === false) {
      multi = true;
      this.multiAnimation.play();
    } else {
      multi = false;
      this.multiAnimation.reverse();
    }
    this.props.onMultiChange(multi);
  }

  handleChange() {
    const multi = this.props.multi;
    this.props.onMultiChange(multi);
  }

  render() {
    const navbar = {
      backgroundColor: colors.nav,
      display: 'flex',
      width: '100%',
      height: '60px',
      margin: 'auto',
      alignItems: 'center',
      overflowY: 'hidden',
      zIndex: 10,
    };

    const brand = {
      display: 'inline-block',
      float: 'left',
      fontFamily: 'Raleway',
      fontSize: '15px',
      color: 'black',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '30px 15px 30px 15px',
      textDecoration: 'none',
      '&:hover': {
        cursor: 'pointer',
        color: 'black',
        backgroundColor: colors.nav
      }
    };

    return (
        <nav
          id='header'
          style={navbar}
          ref={nav => this.target[0] = nav}
        >
          <a style={brand} href='/'>
            AsakaMulti
          </a>
          <NavLink href='/'>Home</NavLink>
          <NavLink
            href='/'
            multi='true'
            onMultiClick={this.handleMultiClick}
          >Multi</NavLink>
          <NavLink href='/'>Manage</NavLink>
        </nav>
    );
  }
}
