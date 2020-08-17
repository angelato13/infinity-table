import React from 'react'
import {connect} from 'react-redux'
import {TwitterPicker} from 'react-color'
import {updateColor} from '../store/colorPicker'

class ColorPicker extends React.Component {
  handleChangeComplete = color => {
    this.props.updateColor(color.hex)
  }

  render() {
    const color = this.props.color

    return (
      <div>
        <h5>Select a color:</h5>
        <div className="led" style={{background: color}} />
        <TwitterPicker
          color={color}
          onChangeComplete={this.handleChangeComplete}
          colors={[
            '#EB144C',
            '#FF6900',
            '#FCB900',
            '#00D084',
            '#0693E3',
            '#9900EF',
            '#100000'
          ]}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    color: state.colorPicker
  }
}

const mapDispatch = dispatch => {
  return {
    updateColor: color => dispatch(updateColor(color))
  }
}

export default connect(mapState, mapDispatch)(ColorPicker)
