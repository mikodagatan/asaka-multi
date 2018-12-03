import React, { Component } from 'react';
import {
  TimelineMax
} from 'gsap';
import { colors } from './variables';
import NavLink from './elements/NavLink';
import CloseMulti from './elements/CloseMulti';
// import MultiButton from './MultiButton';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleMultiClick = this.handleMultiClick.bind(this);
    this.handleManageClick = this.handleManageClick.bind(this);
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

  componentDidUpdate() {
    if (this.props.multi) {
      this.multiAnimation.play();
    } else {
      this.multiAnimation.reverse();
    }
  }

  handleMultiClick() {
    this.props.onMultiChange();
    this.props.onManageChange();
  }

  handleManageClick() {
    const manage = !this.props.manage;
    this.props.onManageChange(manage);
  }

  handleChange() {
    const multi = this.props.multi;
    this.props.onMultiChange(multi);
  }

  showManage() {
    if (this.props.multi) {
      return (<NavLink>Manage</NavLink>);
    }
  }

  render() {
    const styles = {
      navbar: {
        backgroundColor: colors.nav,
        position: 'fixed',
        top: 0,
        display: 'flex',
        width: '100%',
        height: '60px',
        margin: 'auto',
        alignItems: 'center',
        overflowY: 'hidden',
        zIndex: 9,
      },
      brand: {
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
        },
      },
    };
    return (
      <nav
        id='header'
        style={styles.navbar}
        ref={nav => this.target[0] = nav}
      >
        <a style={styles.brand} href='/'>
          AsakaMulti
        </a>
        <NavLink
          manage={this.props.manage}
          manageButton='true'
          multi={this.props.multi}
          onManageClick={this.handleManageClick}
        >Manage</NavLink>
        <NavLink
          multi={this.props.multi}
          multiButton='true'
          onMultiClick={this.handleMultiClick}
        >Enter Multi Mode</NavLink>
        <CloseMulti
          multi={this.props.multi}
          onMultiClick={this.handleMultiClick}
        >Exit Multi Mode</CloseMulti>

      </nav>
    );
  }
}
