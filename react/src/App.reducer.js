import { combineReducers } from 'redux'
import login from './Login/reducer'
import planet from './Planet/reducer'

export default combineReducers({
    login,
    planet
})