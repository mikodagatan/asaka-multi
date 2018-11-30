import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-boost';
// import { ApolloProvider, Query } from 'react-apollo';
// import gql from 'graphql-tag';

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

// Functions

// const client = new ApolloClient();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      multi: false
    };
    this.useMulti = this.useMulti.bind(this);
  }

  useMulti() {
    if (!this.state.multi) {
      this.setState({
        multi: true
      });
    } else {
      this.setState({
        multi: false
      });
    }
    console.log('App-multi: ', this.state.multi);
  }

  render() {
    return (
        <div id="App">
          <Header multi={this.state.multi} onMultiChange={this.useMulti} />
          <Main multi={this.state.multi} />
          <Footer />
        </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
