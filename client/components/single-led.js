import React from 'react'
import {connect} from 'react-redux'
import {reverseSingleLED} from '../store/singleLed'
import axios from 'axios'

class SingleLED extends React.Component {
  handleClick(boolean) {
    this.props.reverseSingleLED(boolean)
    if (boolean) {
      axios.get('http://192.168.1.212:8085//?GPLED2OFF')
    } else {
      axios.get('http://192.168.1.212:8085//?GPLED2ON')
    }
  }

  render() {
    let singleLed = this.props.singleLed

    return (
      <div className="content-container">
        <button type="button" onClick={() => this.handleClick(singleLed)}>
          Turn LED ON / OFF
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleLed: state.singleLed
  }
}

const mapDispatch = dispatch => {
  return {
    reverseSingleLED: boolean => dispatch(reverseSingleLED(boolean))
  }
}

export default connect(mapState, mapDispatch)(SingleLED)
