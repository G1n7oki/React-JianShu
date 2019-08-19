import { fromJS } from 'immutable'
import * as type from './types'

const states = fromJS({
  topicList: [],
  articleList: []
})

export default (state = states, action) => {
  switch (action.type) {
    case type.CHANGE_HOME_DATA :
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
      })
    default :
      return state
  }
}
