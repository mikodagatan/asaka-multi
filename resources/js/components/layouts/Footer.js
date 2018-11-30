import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const style = {
      footer: {
        height: 25,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#696969'
      },
      link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 10,
        padding: '0 0.5rem 0 0'
      }
    }
    return (
      <div style={style.footer}id="footer">
        <a style={style.link}href="http://www.twitch.tv/phantasmaasaka" className="asaka-link">t.tv/PhantasmaAsaka</a>
      </div>
    );
  }
}
