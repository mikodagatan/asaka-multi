import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
