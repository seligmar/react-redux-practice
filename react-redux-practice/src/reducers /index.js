import { combineReducers } from 'redux'
import AppReducer from './AppReducer'
import eachPaintingReducer from './eachPaintingReducer'

export default combineReducers({
  AppReducer: AppReducer,
  eachPaintingReducer: eachPaintingReducer
})
