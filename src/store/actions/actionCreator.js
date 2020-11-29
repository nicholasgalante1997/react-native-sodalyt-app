// answers actions
export const addAnswer = answer => ({type: 'ADD_ANSWER', payload: {value: answer}})
export const resetAnswers = () => ({type: 'RESET_ANSWERS'})

// currentUser Information
export const setCurrentUser = currentUser => ({type: 'SET_CURRENT_USER', payload: {value: currentUser}})
export const setDetails = (detailsObj) => ({type: 'SET_DETAILS', payload: {value: detailsObj}})

// SearchActions
export const setSearchedTerm = (searchedTerm) => ({type: 'SET_SEARCH_TERM', payload: {value: searchedTerm}})

// FilterActions 
// Cultural => Language
export const toggleCulturalLanguageSpanishValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_SPANISH', payload: {value: booleanValue}})
export const toggleCulturalLanguageChineseMandarinValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_CHINESE_MANDARIN', payload: {value: booleanValue}})
export const toggleCulturalLanguageFrenchValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_FRENCH', payload: {value: booleanValue}})
export const toggleCulturalLanguageArabicValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_ARABIC', payload: {value: booleanValue}})
export const toggleCulturalLanguageHindiValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_HINDI', payload: {value: booleanValue}})
export const toggleCulturalLanguagePortugueseValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_PORTUGUESE', payload: {value: booleanValue}})
export const toggleCulturalLanguageBanglaBengaliValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_BANGLA_BENGALI', payload: {value: booleanValue}})
export const toggleCulturalLanguageRussianValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_RUSSIAN', payload: {value: booleanValue}})
export const toggleCulturalLanguageJapaneseValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_JAPANESE', payload: {value: booleanValue}})
export const toggleCulturalLanguagePunjabiValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LANGUAGE_PUNJABI', payload: {value: booleanValue}})

// Cultural => Religion
export const toggleCulturalReligionNoPrefValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RELIGION_NOPREF', payload: {value: booleanValue}})
export const toggleCulturalReligionChristianityValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RELIGION_CHRISTIANITY', payload: {value: booleanValue}})
export const toggleCulturalReligionJudaismValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RELIGION_JUDAISM', payload: {value: booleanValue}})
export const toggleCulturalReligionIslamValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RELIGION_ISLAM', payload: {value: booleanValue}})
export const toggleCulturalReligionOtherValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RELIGION_OTHER', payload: {value: booleanValue}})

// Cultural => Race 
export const toggleCulturalRaceHispanicValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RACE_HISPANIC', payload: {value: booleanValue}})
export const toggleCulturalRaceWhiteValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RACE_WHITE', payload: {value: booleanValue}})
export const toggleCulturalRaceBlackValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RACE_BLACK', payload: {value: booleanValue}})
export const toggleCulturalRaceAsianValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RACE_ASIAN', payload: {value: booleanValue}})
export const toggleCulturalRaceNativeAmericanValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RACE_NATIVE_AMERICAN', payload: {value: booleanValue}})
export const toggleCulturalRacePacificIslanderValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RACE_PACIFIC_ISLANDER', payload: {value: booleanValue}})
export const toggleCulturalRaceAsianSubValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_RACE_ASIAN_SUB', payload: {value: booleanValue}})

// Cultural => LGBTQ 
export const toggleCulturalLGBTQSupportiveValue = (booleanValue) => ({type: 'TOGGLE_CULTURAL_LGBTQ', payload: {value: booleanValue}})

