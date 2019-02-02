import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

import ManageForm from './ManageForm';
import MultiStream from './MultiStream';
import ChatDiv from './ChatDiv';


export default class Multi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: [{ name: '' }],
      start: false,
      load: false,
      startWithURL: false,
    };
    this.addChannelField = this.addChannelField.bind(this);
    this.storeInput = this.storeInput.bind(this);
    this.removeStream = this.removeStream.bind(this);
    this.changeStart = this.changeStart.bind(this);
    this.changeLoad = this.changeLoad.bind(this);
    this.setStreamsByUrl = this.setStreamsByUrl.bind(this);
    this.setUrlByForm = this.setUrlByForm.bind(this);
    this.initAnimation = this.initAnimation.bind(this);
    this.playAnimation = this.playAnimation.bind(this);
    this.changeAnimation = this.changeAnimation.bind(this);
    this.initPageAnimation = this.initPageAnimation.bind(this);
    this.playPageAnimation = this.playPageAnimation.bind(this);

    this.renderMultiStream = this.renderMultiStream.bind(this);

    this.multiTarget = null;
    this.moveAnimation = null;
    this.pageAnimation = null;
  }

  componentDidMount() {
    this.setStreamsByUrl();
    this.initAnimation();
    this.initPageAnimation();
  }

  componentDidUpdate() {
    this.setUrlByForm();
    window.addEventListener('resize', this.changeAnimation);
    this.playAnimation();
    this.playPageAnimation();
  }

  setUrlByForm() {
    const streams = this.state.streams;

    let url = streams.map(stream => stream.name)
      .filter((stream) => stream !== '')
      .join('/');

    url = `/${url}`;

    window.history.replaceState('nothing', 'Title', url);
  }

  setStreamsByUrl() {
    let path = window.location.pathname;
    const startByURL = this.state.startByUrL;
    if (path !== '/' && !startByURL) {
      path = path.slice(1, path.length);
      const streams = path.split('/');
      const urlStreams = streams.map(stream => {
        const obj = {};
        obj.name = stream;
        return obj;
      });
      this.setState({
        streams: [...urlStreams, { name: '' }],
        load: true,
        startByURL: true,
      });
    }
  }

  initAnimation() {
    const smallScreen = window.matchMedia('(max-width: 768px)');
    let width;
    if (smallScreen.matches) {
      width = window.innerWidth;
    } else {
      width = window.innerWidth - 375;
    }

    this.moveAnimation = new TimelineMax({ paused: true })
      .to(this.multiTarget, 0.5, {
        x: 0,
        width,
        ease: Power4.easeOut
      });
  }

  initPageAnimation() {
    this.pageAnimation = new TimelineMax({ paused: true })
      .to(this.multiTarget, 0.3, {
        x: 0,
        width: 0,
        minHeight: 0,
        overflow: 'hidden',
        ease: Power4.easeOut
      });
  }

  changeAnimation() {
    console.log('change animation');
    const smallScreen = window.matchMedia('(max-width: 768px)');
    let width;
    if (smallScreen.matches) {
      width = window.innerWidth;
    } else {
      width = window.innerWidth - 375;
    }

    // important if window is resized at animation.play
    this.multiTarget.style.width = '100%';
    this.moveAnimation = this.moveAnimation
      .clear()
      .to(this.multiTarget, 0.5, {
        x: 0,
        width,
        ease: Power4.easeOut
      })
      .pause(0);
  }

  playAnimation() {
    if (this.props.chat === true) {
      this.moveAnimation.play();
    } else {
      this.moveAnimation.reverse();
    }
  }
// should work
  playPageAnimation() {
    console.log('play page animation');
    if (this.props.multi === false) {
      // this.moveAnimation.pause(0);
      this.pageAnimation.play();
    } else {
      this.pageAnimation.reverse();
    }
  }

  addChannelField() {
    const newStreams = [...this.state.streams, { name: '' }];
    this.setState({
      streams: newStreams
    });
  }

  storeInput(index, target, addChannel = null) {
    this.setState({
      streams: this.state.streams.map((stream, sIndex) => (
            (index === sIndex) ? { name: target.value } : stream
      ))
    }, addChannel);
  }

  removeStream(name) {
    const { streams } = this.state;

    const newArray = streams.filter((stream) => (stream.name !== name));
    this.setState({
      streams: newArray
    });
  }

  changeLoad() {
    const load = !this.state.load;
    this.setState({
      load
    });
  }

  changeStart() {
    if (this.state.start === false) {
      this.setState({
        start: true,
        load: true
      });
    }
  }

  renderMultiStream() {
    return (
      <MultiStream
        multi={this.props.multi}
        manage={this.props.manage}
        streams={this.state.streams}
        start={this.state.start}
        load={this.state.load}
        changeLoad={this.changeLoad}
      />
    );
  }
  render() {
    const styles = {
      multi: {
        width: '100%',
        minHeight: '100%',
        // position: 'fixed',
        top: 30,
      }
    };
    return (
      <React.Fragment>
        <ManageForm
          multi={this.props.multi}
          manage={this.props.manage}
          closeManage={this.props.closeManage}
          streams={this.state.streams}
          addChannel={this.addChannelField}
          storeInput={this.storeInput}
          removeStream={this.removeStream}
          start={this.state.start}
          changeStart={this.changeStart}
          changeLoad={this.changeLoad}
        />
        <div
          id="multi"
          ref={multi => this.multiTarget = multi}
          style={styles.multi}
        >
          {this.renderMultiStream()}
        </div>
        <ChatDiv
          multi={this.props.multi}
          streams={this.state.streams}
          chat={this.props.chat}
          closeChat={this.props.closeChat}
        />
      </React.Fragment>
    );
  }
}
