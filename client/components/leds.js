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
    const len = ledStrip.length
    const topLen = len * 0.3
    const sideLen = len * 0.5 - topLen

    return (
      <div className="content-container">
        <button
          type="button"
          onClick={() => this.handleButtonUpdateAll(colorPicker)}
        >
          Change All
        </button>
        {/* <button type="button"> Marquee </button>
        <button type="button"> Rainbow </button> */}
        <div className="break" />
        <div className="break" />
        <div className="top">
          {ledStrip.map((led, i) => {
            if (i < topLen)
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
        <div className="break" />
        <div className="side">
          <div className="leftside">
            {ledStrip.map((led, i) => {
              if (i >= 2 * topLen + sideLen && i < len)
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
          <div className="spacer" />
          <div className="rightside">
            {ledStrip.map((led, i) => {
              if (i >= topLen && i < topLen + sideLen)
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
        </div>
        <div className="break" />
        <div className="bottom">
          {ledStrip.map((led, i) => {
            if (i >= topLen + sideLen && i < 2 * topLen + sideLen)
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
