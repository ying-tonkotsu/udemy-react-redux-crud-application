// 全リデューサーを総括する
import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({ count })