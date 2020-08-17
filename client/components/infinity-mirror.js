import React from 'react'
import {connect} from 'react-redux'
import {LEDs, ColorPicker} from '../components'

const InfinityMirror = () => (
  <div>
    <h4>Change it up!</h4>
    <h6>Note: Changes will only carry over to LEDs if on the same network</h6>
    <ColorPicker />
    <LEDs />
  </div>
)

export default connect()(InfinityMirror)
