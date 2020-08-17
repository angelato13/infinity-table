/**
 * ACTION TYPES
 */
const UPDATE_COLORPICKER = 'UPDATE_COLORPICKER'

/**
 * INITIAL STATE
 */
const defaultColorPicker = '#100000'

/**
 * ACTION CREATORS
 */
export const updateColor = color => ({type: UPDATE_COLORPICKER, color})

/**
 * REDUCER
 */
export default function(state = defaultColorPicker, action) {
  switch (action.type) {
    case UPDATE_COLORPICKER:
      return action.color
    default:
      return state
  }
}
