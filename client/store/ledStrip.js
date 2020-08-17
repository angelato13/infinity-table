/**
 * ACTION TYPES
 */
const UPDATE_STRIP = 'UPDATE_STRIP'
const UPDATE_SINGLELED = 'UPDATE_SINGLELED'

/**
 * INITIAL STATE
 */
function createDefaultStrip(n, color) {
  const strip = []
  for (let i = 0; i < n; i++) {
    strip.push(color)
  }
  return strip
}

const defaultLEDStrip = createDefaultStrip(10, '#000000')

/**
 * ACTION CREATORS
 */
export const updateStrip = color => ({type: UPDATE_STRIP, color})
export const updateSingleLED = (color, led) => ({
  type: UPDATE_SINGLELED,
  color,
  led
})

/**
 * REDUCER
 */
export default function(state = defaultLEDStrip, action) {
  const newState = [...state]
  switch (action.type) {
    case UPDATE_STRIP:
      return newState.map(() => action.color)
    case UPDATE_SINGLELED:
      newState[action.led] = action.color
      return newState
    default:
      return state
  }
}
