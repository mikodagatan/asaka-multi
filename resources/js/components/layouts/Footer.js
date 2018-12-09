import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const img = "url('/../img/GlitchIcon_White_24px.png')";
    const style = {
      footer: {
        height: 30,
        width: '100%',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#696969',
        zIndex: 10
      },
      link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 10,
        padding: '0 0.5rem 0 0',
        display: 'flex',
        alignItems: 'center',
      },
      img: {
        backgroundImage: img,
        backgroundSize: '12px 12px',
        height: 12,
        width: 12,
        marginRight: 3,
      }
    };
    return (
      <div style={style.footer}id="footer">

        <a style={style.link}href="http://www.twitch.tv/phantasmaasaka" className="asaka-link">
          <div style={style.img} />
          PhantasmaAsaka
        </a>
      </div>
    );
  }
}
