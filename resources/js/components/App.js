import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
      chat: false,
      loadingScreen: false,
    };
    this.useMulti = this.useMulti.bind(this);
    this.changeManage = this.changeManage.bind(this);
    this.loadingAnimation = this.loadingAnimation.bind(this);
    this.setStreamsByUrl = this.setStreamsByUrl.bind(this);
    this.useMultiOnLoad = this.useMultiOnLoad.bind(this);
    this.changeChat = this.changeChat.bind(this);
  }

  componentDidMount() {
    this.setStreamsByUrl();
    this.loadingAnimation();
    this.bodyHeight();
  }

  setStreamsByUrl() {
    let path = window.location.pathname;
    if (path !== '/') {
      path = path.slice(1, path.length);
      this.loadingAnimation();
      this.useMulti();
    }
  }

  bodyHeight() {
    // const headerH = document
    //   .getElementById('header')
    //   .offsetHeight();
    // const footerH = document
    //   .getElementById('footer')
    //   .offsetHeight();
    // const bodyH = window.offsetHeight() - (headerH + footerH);
    // document.getElementById('main').style.height = bodyH;
  }

  useMulti() {
    const multi = !this.state.multi;
    const smallScreen = window.matchMedia('(max-width: 768px)');
    let chat;
    if (smallScreen.matches) {
      chat = false;
    } else {
      chat = multi;
    }

    this.setState({
      multi,
      manage: multi,
      chat
    });
  }

  useMultiOnLoad() {
    const smallScreen = window.matchMedia('(max-width: 768px)');
    let chat;
    if (smallScreen.matches) {
      chat = false;
    } else {
      chat = true;
    }

    const multi = !this.state.multi;
    this.setState({
      multi,
      chat
    });
  }

  changeManage() {
    const manage = !this.state.manage;

    const smallScreen = window.matchMedia('(max-width: 768px)');
    let chat;
    if (smallScreen.matches) {
      chat = false;
    } else {
      chat = this.state.chat;
    }
    this.setState({
      manage,
      chat
    });
  }

  changeChat() {
    const chat = !this.state.chat;
    const smallScreen = window.matchMedia('(max-width: 768px)');
    let manage;
    if (smallScreen.matches) {
      manage = false;
    } else {
      manage = this.state.manage;
    }

    this.setState({
      manage,
      chat
    });
  }

  loadingAnimation() {
    this.setState({
      // loadingScreen: true
    });
  }

  render() {
    return (
      <Router>
        <div id="app-container">
          <div id="App">
            <Header
              multi={this.state.multi}
              onMultiChange={this.useMulti}
              manage={this.state.manage}
              onManageChange={this.changeManage}
              chat={this.state.chat}
              onChatChange={this.changeChat}
            />
            <Route exact path="/">
              <Main
                multi={this.state.multi}
                manage={this.state.manage}
                onManageChange={this.changeManage}
                chat={this.state.chat}
                onChatChange={this.changeChat}
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
