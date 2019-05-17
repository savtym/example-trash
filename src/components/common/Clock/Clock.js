import React, { Component } from 'react';

import Styles from './Clock.module.scss';

class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={Styles.clock}>
        <h2>Hello, world!</h2>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;