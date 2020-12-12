// answers actions
export const addAnswer = answer => ({type: 'ADD_ANSWER', payload: {value: answer}})
export const resetAnswers = () => ({type: 'RESET_ANSWERS'})

// currentUser Information
export const setCurrentUser = currentUser => ({type: 'SET_CURRENT_USER', payload: {value: currentUser}})
// currentUser Customer Information
export const setCustomerDetails = (detailsObj) => ({type: 'SET_DETAILS', payload: {value: detailsObj}})
// currentUser Professional  Information
export const setProfessionalDetails = detailsObj => ({type: 'SET_PROF_DETAILS', payload: {detailsObj}})

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

// Service => Personal Trainer
export const toggleServicePersonalTrainerTraumaIPValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_TIP', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerACSMValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_ACSM', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerACEValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_ACE', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerCrossfitValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_CROSSFIT', payload: {value: booleanValue}})
export const toggleServicePersonalNASMValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_NASM', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerNASMCNCValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_NASMCNC', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerISSAValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_ISSA', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerPN1Value = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_PN1', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerNESTAValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_NESTA', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerAFPAValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_AFPA', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerCSCSValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_CSCS', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerNSCACPTValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_NSCACPT', payload: {value: booleanValue}})
export const toggleServicePersonalTrainerRestorativeHolisticValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_PERSONAL_TRAINER_RESTORATIVE', payload: {value: booleanValue}})

// Service => Meeting Experience
export const toggleServiceMeetingExpVirtualValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_MEETING_EXP_VIRTUAL', payload: {value: booleanValue}})
export const toggleServiceMeetingExpInPersonValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_MEETING_EXP_IN_PERSON', payload: {value: booleanValue}})
export const toggleServiceMeetingExpEitherValue = (booleanValue) => ({type: 'TOGGLE_SERVICE_MEETING_EXP_EITHER', payload: {value: booleanValue}})

// Service => Distance/Location
// Need to set up permissions and location
export const toggleServiceDistanceWithin5Miles = (booleanValue) => ({type: 'TOGGLE_SERVICE_DISTANCE_WITHIN_5', payload: {value: booleanValue}})
export const toggleServiceDistanceWithin10Miles = (booleanValue) => ({type: 'TOGGLE_SERVICE_DISTANCE_WITHIN_10', payload: {value: booleanValue}})
export const toggleServiceDistanceWithin20Miles = (booleanValue) => ({type: 'TOGGLE_SERVICE_DISTANCE_WITHIN_20', payload: {value: booleanValue}})
export const toggleServiceDistanceWithin50Miles = (booleanValue) => ({type: 'TOGGLE_SERVICE_DISTANCE_WITHIN_50', payload: {value: booleanValue}})

// Service => Pricing Range
export const toggleServicePricingRangeShowHourly = (booleanValue) => ({type: 'TOGGLE_SERVICE_PRICING_RANGE_SHOW_HOURLY', payload: {value: booleanValue}})
export const toggleServicePricingRangePackageDeal = (booleanValue) => ({type: 'TOGGLE_SERVICE_PRICING_RANGE_PACKAGE_DEAL', payload: {value: booleanValue}})
export const toggleServicePricingRangeInstantQuoteAvailable = (booleanValue) => ({type: 'TOGGLE_SERVICE_PRICING_RANGE_INSTANT_QUOTE', payload: {value: booleanValue}})
export const toggleServicePricingRangeSodalytDiscountAvailable = (booleanValue) => ({type: 'TOGGLE_SERVICE_PRICING_RANGE_SODALYT_DISCOUNT_AVAILABLE', payload: {value: booleanValue}})
export const setServicePricingRangeNewHourlyFloorValue = (minVal) => ({type: 'SET_HOURLY_FLOOR', payload: {value: minVal}})
export const setServicePricingRangeNewHourlyCeilValue = (maxVal) => ({type: 'SET_HOURLY_CEIL', payload: {value: maxVal}})

// Service => Corporate Sustainability
export const toggleServiceCorporateSustainabilityPolicy = (booleanValue) => ({type: 'TOGGLE_SERVICE_CRP', payload: {value: booleanValue}})

// ASSIGN AWS RESPONSE TO REDUX STATE 
export const setSearchedExpertsResponse = (awsRespArray) => ({type: 'SET_SEARCHED_EXPERTS_RESPONSE', payload: {value: awsRespArray}})

// REVIEWS FOR PROFESSIONALS
export const setReviews = (reviews) => ({type: 'SET_REVIEWS', payload: {value: reviews}})
export const addReview = (review) => ({type: 'ADD_REVIEW', payload: {value: review}})

// NEW PROFESSIONAL INFO STORAGE 
export const setNewProfInfo = (info) => ({type: 'SET_INFO', payload: {value: info}})
export const addToProfInfo = (info) => ({type: 'ADD_INFO', payload: {value: info}})