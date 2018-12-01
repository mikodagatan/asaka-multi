import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

export default class CloseMulti extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.target = null;
    this.animate = null;
  }

  componentDidMount() {
    this.animate = new TimelineMax({ paused: true })
      .to(this.target, 0.3, {
        right: 30,
        visibility: 'visible',
        cursor: 'pointer',
        ease: Power3.easeOut,
        delay: 0.6,
      });
  }

  componentDidUpdate() {
    if (this.props.multi) {
      this.animate.play();
    } else {
      this.animate.reverse();
    }
  }

  handleClick() {
    this.animate.reverse();
    this.props.onMultiClick(this.props.multi);
  }

  render() {
    const style = {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: -200,
      lineHeight: 0.9,
      textTransform: 'uppercase',
      color: 'white',
      fontSize: 10,
      padding: 2.5,
      letterSpacing: 0.5,
      visibiliy: 'hidden',
      border: '2px solid white',
    };
    return (
      <a
        ref={a => this.target = a}
        style={style}
        data-hover='false'
        onClick={e => this.handleClick(e, this.props.multi)}
        onMouseEnter={e => this.handleHover(e)}
        onMouseLeave={e => this.handleHover(e)}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }
}
