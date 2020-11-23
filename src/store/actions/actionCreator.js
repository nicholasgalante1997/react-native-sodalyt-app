import searchedTermReducer from "../reducers/searchedTerm"

// answers actions
export const addAnswer = answer => ({type: 'ADD_ANSWER', payload: {value: answer}})

export const setCurrentUser = currentUser => ({type: 'SET_CURRENT_USER', payload: {value: currentUser}})

export const resetAnswers = () => ({type: 'RESET_ANSWERS'})

export const setSearchedTerm = (searchedTerm) => ({type: 'SET_SEARCH_TERM', payload: {value: searchedTerm}})

export const setDetails = (detailsObj) => ({type: 'SET_DETAILS', payload: {value: detailsObj}})