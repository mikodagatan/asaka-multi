import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

export default class NavLink extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.target = null;
    this.animate = null;
    this.show = null;
  }
  componentDidMount() {
    const caseMulti = this.props.multiButton;
    const caseManage = this.props.manageButton;

    let showDelay;
    if (caseMulti) {
      showDelay = 0;
    } else if (caseManage) {
      showDelay = 2;
    }

    this.animate = new TimelineMax({ paused: true })
      .to(this.target, 0.3, {
        color: 'white',
        backgroundColor: '#22282Cl',
        textDecoration: 'none',
      });
    this.show = new TimelineMax({ paused: true })
      .from(this.target, 0.3, {
        display: 'none',
      })
      .from(this.target, 0.3, {
        opacity: 0,
        x: 30,
        ease: Power3.easeOut,
      });

    if (!this.props.multi && this.props.multiButton) {
      this.show.play();
    }
  }
  componentDidUpdate() {
    console.log(this.props);
    const props = this.props;
    const case1 = !props.multi && props.multiButton;
    const case2 = props.multi &&
                  !props.manage &&
                  props.manageButton;

    if (case1 || case2) {
      this.show.play();
    } else {
      this.show.reverse();
    }
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
  handleClick() {
    const props = this.props;
    if (props.multiButton) {
      props.onMultiClick(props.multi);
    } else if (props.manageButton) {
      props.onManageClick(props.manage);
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
      textDecoration: 'none',
      cursor: 'pointer',
    };

    return (
      <a
        style={link}
        ref={a => this.target = a}
        data-hover='false'
        onClick={e => this.handleClick()}
        onMouseEnter={e => this.handleHover(e)}
        onMouseLeave={e => this.handleHover(e)}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }
}
