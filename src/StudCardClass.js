import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { current: 1 }
  }

  increment = () => {
    this.setState((prevState) => ({ current: prevState.current + 1 }))
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.increment}>
          Жми +
        </button>
        <span>{this.state.current}</span>
      </div>
    )
  }
}

