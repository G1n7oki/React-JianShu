import * as types from './types'
import { fromJS } from 'immutable'

const states = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
})

export default (state = states, action) => {
  switch (action.type) {
    case types.QUERY_FOCUS :
      return state.set('focused', true)
    case types.QUERY_BLUR :
      return state.set('focused', false)
    case types.APPLY_LIST :
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case types.MOUSE_ENTER :
      return state.set('mouseIn', true)
    case types.MOUSE_LEAVE :
      return state.set('mouseIn', false)
    case types.CHANGE_PAGE :
      return state.set('page', action.page)
    default :
      return state
  }
}
