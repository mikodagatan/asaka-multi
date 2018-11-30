import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

export default class NavLink extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.target = null;
    this.animate = null;
  }
  componentDidMount() {
    this.animate = new TimelineMax({ paused: true })
      .to(this.target, 0.3, {
        color: 'white',
        backgroundColor: '#22282Cl',
        textDecoration: 'none'
      });
  }
  handleHover(e) {
    const { target } = e;
    const hovered = target.getAttribute('data-hover');
    if (hovered === 'false') {
      target.setAttribute('data-hover', 'true');
      this.animate.play();
    } else {
      target.setAttribute('data-hover', 'false');
      this.animate.reverse();
    }
  }
  handleClick(e, multi = null) {
    if (multi) {
      this.props.onMultiClick(multi);
    }
  }

  render() {
    const link = {
      display: 'inline-block',
      float: 'left',
      fontFamily: 'Raleway',
      fontSize: '10px',
      color: 'black',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '30px 15px 30px 15px',
      textDecoration: 'none'
    };

    return (
      <a
        style={link}
        ref={a => this.target = a}
        data-hover='false'
        onClick={e => this.handleClick(e, true)}
        onMouseEnter={e => this.handleHover(e)}
        onMouseLeave={e => this.handleHover(e)}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }
}
