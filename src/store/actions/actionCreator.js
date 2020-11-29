// answers actions
export const addAnswer = answer => ({type: 'ADD_ANSWER', payload: {value: answer}})
export const resetAnswers = () => ({type: 'RESET_ANSWERS'})

// currentUser Information
export const setCurrentUser = currentUser => ({type: 'SET_CURRENT_USER', payload: {value: currentUser}})
export const setDetails = (detailsObj) => ({type: 'SET_DETAILS', payload: {value: detailsObj}})

// SearchActions
export const setSearchedTerm = (searchedTerm) => ({type: 'SET_SEARCH_TERM', payload: {value: searchedTerm}})

// FilterActions 
export const toggleCulturalLanguageSpanishValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_SPANISH', payload: {value: booleanValue}})