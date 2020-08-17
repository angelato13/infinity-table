/**
 * ACTION TYPES
 */
const REVERSE_SINGLELED = 'REVERSE_SINGLELED'

/**
 * INITIAL STATE
 */
// false is off
const defaultLED = false

/**
 * ACTION CREATORS
 */
export const reverseSingleLED = boolean => ({type: REVERSE_SINGLELED, boolean})

/**
 * REDUCER
 */
export default function(state = defaultLED, action) {
  switch (action.type) {
    case REVERSE_SINGLELED:
      return !action.boolean
    default:
      return state
  }
}
