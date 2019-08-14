import * as types from './types'
import { fromJS } from 'immutable'
import axios from 'axios'

// 当前JS引用的方法写在这里
const applyList = (data) => ({
  type: types.APPLY_LIST,
  data: fromJS(data)
})

// 需要暴露的方法写在这里
export const queryFocus = () => ({
  type: types.QUERY_FOCUS
})

export const queryBlur = () => ({
  type: types.QUERY_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data.data
      dispatch(applyList(data))
    }).catch(() => {
      console.log('error')
    })
  }
}
