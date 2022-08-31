import {Component} from 'react'
import './index.css'

export default class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onEatMango = () => {
    this.setState(previousFruitCounterState => {
      let {mangoCount} = previousFruitCounterState
      mangoCount += 1

      return {mangoCount}
    })
  }

  onEatBanana = () =>
    this.setState(previousFruitCounterState => ({
      bananaCount: previousFruitCounterState.bananaCount + 1,
    }))

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="fruit-counter-bg-container">
        <div className="fruit-counter-content-container">
          <h1 className="fruit-counter-header">
            Bob ate <span className="fruit-counter-text">{mangoCount}</span>{' '}
            mangoes <span className="fruit-counter-text">{bananaCount}</span>{' '}
            bananas
          </h1>

          <div className="eat-fruits-container">
            <div className="eat-fruits-container-item">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="eat-fruit-button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>

            <div className="eat-fruits-container-item">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="eat-fruit-button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
