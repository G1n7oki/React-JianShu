import * as types from './types'
import { fromJS } from 'immutable'
import axios from 'axios'

// 当前JS引用的方法写在这里
const applyList = (data) => ({
  type: types.APPLY_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

// 需要暴露的方法写在这里
export const queryFocus = () => ({
  type: types.QUERY_FOCUS
})

export const queryBlur = () => ({
  type: types.QUERY_BLUR
})

export const mouseEnter = () => ({
  type: types.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: types.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: types.CHANGE_PAGE,
  page
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
