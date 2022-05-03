/* eslint-disable eqeqeq */
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { min: 1, max: 10 }
  }

  increment = () => {
    if(this.state.min < this.state.max){
      this.setState((prevState) => ({ min: prevState.min + 1 }))
    }
  }

  increment2 = () => {
    if(this.state.min != 1){
      this.setState((prevState) => ({ min: prevState.min - 1 }))
    }
  }

  render() {
    return (
      <><div>
        <button type="button" onClick={this.increment}>
          Прибавить +
        </button>
      </div>
      <span>{this.state.min}</span>
      <div>
          <button type="button" onClick={this.increment2}>
            Отнять -
          </button>
        </div></>
    )
  }


}
