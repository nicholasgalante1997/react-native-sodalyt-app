import {combineReducers} from 'redux'
import answersReducer from './answers'
import cuDetailsReducer from './cuDetails'
import currentUserReducer from './currentUser'
import searchedTermReducer from './searchedTerm'

const rootReducer = combineReducers({
    answers: answersReducer,
    currentUser: currentUserReducer,
    search: searchedTermReducer,
    userDetails: cuDetailsReducer
})

export default rootReducer