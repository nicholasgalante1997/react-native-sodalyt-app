import {combineReducers} from 'redux'
import answersReducer from './answers'
import currentUserReducer from './currentUser'
import searchedTermReducer from './searchedTerm'

const rootReducer = combineReducers({
    answers: answersReducer,
    currentUser: currentUserReducer,
    search: searchedTermReducer
})

export default rootReducer