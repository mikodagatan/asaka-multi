import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PathToRegexp from 'path-to-regexp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    this.setStreamsByUrl = this.setStreamsByUrl.bind(this);
    this.useMultiOnLoad = this.useMultiOnLoad.bind(this);
  }

  componentDidMount() {
    this.setStreamsByUrl();
    this.loadingAnimation();
  }

  setStreamsByUrl() {
    let path = window.location.pathname;
    if (path !== '/') {
      path = path.slice(1, path.length);
      this.loadingAnimation();
      this.useMulti();
    }
  }

  useMulti() {
    const multi = !this.state.multi;
    this.setState({
      multi,
      manage: multi
    });
  }

  useMultiOnLoad() {
    const multi = !this.state.multi;
    this.setState({
      multi,
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
  }

  render() {
    const path = '/:stream1/:stream2/:stream3';
    const re = PathToRegexp(path);

    return (
      <Router>
        <div id="app-container">
          <div id="App">
            <Header
              multi={this.state.multi}
              onMultiChange={this.useMulti}
              manage={this.state.manage}
              onManageChange={this.changeManage}
            />
            <Route exact path="/">
              <Main
                multi={this.state.multi}
                manage={this.state.manage}
                onManageChange={this.changeManage}
              />
            </Route>
            <Footer />
          </div>
          <Loading
            loadingScreen={this.state.loadingScreen}
            useMulti={this.useMultiOnLoad}
            changeManage={this.changeManage}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
