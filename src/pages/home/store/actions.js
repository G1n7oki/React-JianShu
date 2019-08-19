import axios from 'axios'
import * as type from './types'

const changeHomeData = (result) => ({
  type: type.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res =>{
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}
