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
      multi: false,
      manage: false,
    };
    this.useMulti = this.useMulti.bind(this);
    this.changeManage = this.changeManage.bind(this);
  }

  useMulti() {
    const multi = !this.state.multi;
    this.setState({
      multi,
      manage: multi
    });
  }

  changeManage() {
    const manage = !this.state.manage;
    this.setState({
      manage
    });
  }

  render() {
    return (
        <div id="App">
          <Header
            multi={this.state.multi} onMultiChange={this.useMulti}
            manage={this.state.manage}
            onManageChange={this.changeManage}
          />
          <Main
            multi={this.state.multi}
            manage={this.state.manage}
            onManageChange={this.changeManage}
          />
          <Footer />
        </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
