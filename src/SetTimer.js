/* eslint-disable lines-between-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable operator-assignment */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
import React from 'react';
// import './styles.css';

export default class ReacTimer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        count: 0,
        isCounting: false,
    };
    this.handleStart = () => {
        console.log('click_start');
        this.start();
      }
    this.handleStop = () => {
        console.log('click_stop');
        this.stop();
      }
      this.handleReset = () => {
        console.log('click_reset');
        this.reset();
      }
}
    componentDidMount() {

        this.start = ()=> {
            console.log('start');
            this.handleStart = setInterval(() => {
                this.setState({count: this.state.count + 1})
                console.log(this.state.count)  
            },1000)
            this.setState({isCounting: true})
        }

    }
    
    componentDidUpdate() {
        this.reset = ()=> {
            console.log('reset');
            this.setState({count: 0})
        }
    }

    componentWillUnmount() {
        this.stop = ()=> {
            console.log('stop');
            this.setState({isCounting: false})
            clearInterval(this.handleStart);
        }
    }

    render() {
        return (
            <div className="ReacTimer">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

}