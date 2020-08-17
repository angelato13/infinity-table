import React from 'react'
import {connect} from 'react-redux'
import {updateSingleLED, updateStrip} from '../store/ledStrip'

class LEDs extends React.Component {
  handleClick(color, led) {
    this.props.updateSingleLED(color, led)
  }

  handleButtonUpdateAll(color) {
    this.props.updateStrip(color)
  }

  render() {
    const ledStrip = this.props.ledStrip
    const colorPicker = this.props.colorPicker

    return (
      <div className="content-container">
        <button
          type="button"
          onClick={() => this.handleButtonUpdateAll(colorPicker)}
        >
          Change All
        </button>
        <div className="break" />
        {ledStrip.map((led, i) => {
          return (
            <div
              key={i}
              className="led"
              style={{background: led}}
              onClick={() => this.handleClick(colorPicker, i)}
            >
              {' '}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    ledStrip: state.ledStrip,
    colorPicker: state.colorPicker
  }
}

const mapDispatch = dispatch => {
  return {
    updateSingleLED: (color, led) => dispatch(updateSingleLED(color, led)),
    updateStrip: color => dispatch(updateStrip(color))
  }
}

export default connect(mapState, mapDispatch)(LEDs)
