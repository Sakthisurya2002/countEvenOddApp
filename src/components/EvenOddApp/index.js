import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    Math.ceil(Math.random() * 100)
  }

  onClicking = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="main-heading">Count {count}</h1>
          <p className="sub-heading">Count is {displayText}</p>
          <button type="button" className="button" onClick={this.onClicking}>
            Increment
          </button>
          <p>*Increase by Random Number Between 1 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
