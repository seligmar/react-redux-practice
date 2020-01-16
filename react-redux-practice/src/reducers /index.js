import { combineReducers } from 'redux'
import AppReducer from './AppReducer'

// good practice to include this combine reducers function in the event more reducers
// are needed

export default combineReducers({ AppReducer: AppReducer })
