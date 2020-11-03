import {combineReducers} from 'redux'
import answersReducer from './answers'
import currentUserReducer from './currentUser'

const rootReducer = combineReducers({
    answers: answersReducer,
    currentUser: currentUserReducer
})

export default rootReducer