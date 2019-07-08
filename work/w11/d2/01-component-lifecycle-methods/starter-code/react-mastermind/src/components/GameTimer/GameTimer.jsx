import React, { Component } from 'react';
import styles from './GameTimer.module.css';

function formatTime(seconds) {
  let min = Math.floor(seconds / 60).toString().padStart(2, '0')
  let sec = (seconds % 60).toString().padStart(2, '0')
  return `${min}:${sec}`
}

class GameTimer extends Component {

  handleTick = () => {
    this.props.handleTimerUpdate();
  }

  componentDidMount() {
    this.timerId = setInterval(this.handleTick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  render() {
    return (
       <div className={`${styles.GameTimer} flex-h`}>
      {formatTime(this.props.elapsedTime)}
      
    </div>
    )
  }

  }

  export default GameTimer;
