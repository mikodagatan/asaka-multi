import React, { Component } from 'react';
import styled, { css } from 'styled-components';
// import MultiButton from './MultiButton';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleMultiClick = this.handleMultiClick.bind(this);
  }

  useMultiStyle() {
    return `navbar navbar-expand-lg navbar-light bg-light
    ${(this.props.multi) ? 'multi-style' : ''}`;
  }

  handleMultiClick() {
    let multi;
    if (this.props.multi === false) {
      multi = true;
    } else {
      multi = false;
    }
    this.props.onClick(multi);
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

  render() {
    const Navbar = styled.nav`
      background-color: #F8F8FF;
      display: flex;
      width: 100%;
      height: 60px;
      margin: auto;
      align-items: center;
      overflow-y: hidden;
    `;
    const Link = styled.a`
      display: inline-block;
      float: left;
      font-family: 'Raleway';
      font-size: 10px;
      color: black;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 30px 15px 30px 15px;
      &:hover {
        cursor: pointer;
        text-decoration: none;
        color: white;
        background-color: #22282C;
      }
    `;
    const Brand = styled(Link)`
      font-size: 15px;
      padding: 30px;
      &:hover {
        color: black;
        background-color: #F8F8FF;
      }
    `;
    return (
      <Navbar>
        <Brand href='/'>AsakaMulti</Brand>
        <Link href='/'>Home</Link>
        <Link onClick={this.handleMultiClick} href='/'>Multi</Link>
        <Link href='/'>Manage</Link>
      </Navbar>
    );
  }
}
