import {combineReducers} from 'redux'
import answersReducer from './answers'
import cuDetailsReducer from './cuDetails'
import currentUserReducer from './currentUser'
import searchedTermReducer from './searchedTerm'
import filtersReducer from './filters'
import searchedExpertsReducer from './searchedExperts'

const rootReducer = combineReducers({
    answers: answersReducer,
    currentUser: currentUserReducer,
    search: searchedTermReducer,
    expertArray: searchedExpertsReducer,
    userDetails: cuDetailsReducer,
    filters: filtersReducer
})

export default rootReducer