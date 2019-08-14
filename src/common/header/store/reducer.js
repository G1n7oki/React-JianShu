import * as types from './types'
import { fromJS } from 'immutable'

const states = fromJS({
  focused: false,
  list: []
})

export default (state = states, action) => {
  if (action.type === types.QUERY_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === types.QUERY_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === types.APPLY_LIST) {
    return state.set('list', action.data)
  }
  return state
}
