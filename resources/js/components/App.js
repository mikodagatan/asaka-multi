import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { ApolloClient } from 'apollo-boost';
// import { ApolloProvider, Query } from 'react-apollo';
// import gql from 'graphql-tag';

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import Loading from './layouts/Loading';

// Functions

// const client = new ApolloClient();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      multi: false,
      manage: false,
      loadingScreen: false,
    };
    this.useMulti = this.useMulti.bind(this);
    this.changeManage = this.changeManage.bind(this);
    this.loadingAnimation = this.loadingAnimation.bind(this);
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

  loadingAnimation() {
    this.setState({
      loadingScreen: true
    });
    console.log('loading: true');
  }

  render() {
    return (
      <div id="app-container">
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
            setLoadScreen={this.loadingAnimation}
          />
          <Footer />
        </div>
        <Loading
          loadingScreen={this.state.loadingScreen}
        />
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
