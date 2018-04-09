import React, { Component } from 'react';

class BankedDice extends Component {
  constructor() {
    super()

    }

  componentDidMount = () => {
  }

  render() {
    const {bankedDice} = this.props
    return (
        <div id="dice">
          <div id="banked-dice">
            {bankedDice.map((d, i) => {
              return (
                <img
                  width="50"
                  height="50"
                  src={`https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_${d.value}-256.png`}
                  key={`${i}-${d.value}`}
                  alt={d.value}>
                </img>
              )
            })}
          </div>
      </div>
    );
  }
}

export default BankedDice;