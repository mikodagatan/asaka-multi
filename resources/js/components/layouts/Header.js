import React, { Component } from 'react';
import {
  TweenMax,
  TimelineMax
} from 'gsap';
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
    const colors = {
      nav: '#f8f8ff',
      body: '#22282C',
      orange: '#FF7F50'
    };
    this.animation = this.animation.from(this.target[0], 0.7, {
      x: 200,
      opacity: 0 },
      0.1)
      .play();
    this.multiAnimation = new TimelineMax({ paused: true })
      .to(this.target[0], 0.3, {
      backgroundColor: colors.orange
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

  manageClasses() {
    let classes;
    if (this.props.multi) {
      classes = 'nav-link hidden';
    } else {
      classes = 'nav-link';
    }
    return classes;
  }

  useMultiStyle() {
    return `navbar navbar-expand-lg navbar-light bg-light
    ${(this.props.multi) ? 'multi-style' : ''}`;
  }

  render() {
    const colors = {
      nav: '#f8f8ff',
      body: '#22282C',
      orange: 'FF7F50'
    };

    const navbar = {
      backgroundColor: colors.nav,
      display: 'flex',
      width: '100%',
      height: '60px',
      margin: 'auto',
      alignItems: 'center',
      overflowY: 'hidden',
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
          style={navbar}
          ref={nav => this.target[0] = nav}
        >
          <a style={brand} href='/'>
            AsakaMulti
          </a>
          <NavLink href='/'>Home</NavLink>
          <NavLink
            href='/'
            onMultiClick={this.handleMultiClick}
          >Multi</NavLink>
          <NavLink href='/'>Manage</NavLink>
        </nav>
    );
  }
}
