const initialState = {
    cultural: {
        language: {
            spanish: false,
            chineseMandarin: false,
            french: false,
            arabic: false,
            hindi: false,
            portuguese: false,
            banglaBengali: false,
            russian: false,
            japanese: false,
            punjabi: false
        },
        religion: {
            noPreference: true,
            christianity: false,
            judaism: false,
            islam: false,
            other: false
        },
        race: {
            hispanic: false,
            white: false,
            black: false,
            asian: false,
            nativeAmerican: false,
            pacificIslander: false,
            asianSubcontinent: false
        },
        lgbtq: {
            supportive: false
        }
    },
    service: {
        personalTrainer: {
            traumaInformedPractitioner: false,
            ACSM: false,
            ACE: false,
            crossFit: false,
            NASM: false,
            NASM_CNC: false,
            ISSA: false,
            PN1: false,
            NESTA: false,
            AFPA: false,
            CSCS: false,
            NSCA_CPT: false,
            restorativeHolistic: false
        },
        meetingExperience: {
            virtual: false,
            inPerson: false,
            noPref: false
        },
        distance: {
            within5Miles: false,
            within10Miles: false,
            within20Miles: false,
            within50Miles: false
        },
        pricingRange: {
            hourly: {
                ceil: 500,
                floor: 25
            },
            packageDeals: false,
            instantQuote: false,
            sodalytDiscount: false
        },
        corporateSustainabilityPolicy: false
    }
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        // CULTURAL / LANGUAGE
        case "TOGGLE_CULTURAL_LANGUAGE_SPANISH": 
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    language: {
                        ...state.cultural.language,
                        spanish: action.payload.value 
                    }
                }
            }
        case 'TOGGLE_CULTURAL_LANGUAGE_CHINESE_MANDARIN':
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    language: {
                        ...state.cultural.language,
                        chineseMandarin: action.payload.value 
                    }
                }
            }
        case 'TOGGLE_CULTURAL_LANGUAGE_FRENCH':
                return {
                    ...state,
                    cultural: {
                        ...state.cultural,
                        language: {
                            ...state.cultural.language,
                            french: action.payload.value 
                        }
                    }
                }
            case 'TOGGLE_CULTURAL_LANGUAGE_ARABIC':
                    return {
                        ...state,
                        cultural: {
                            ...state.cultural,
                            language: {
                                ...state.cultural.language,
                                arabic: action.payload.value 
                            }
                        }
                    }
            case 'TOGGLE_CULTURAL_LANGUAGE_HINDI':
                    return {
                        ...state,
                        cultural: {
                            ...state.cultural,
                            language: {
                                ...state.cultural.language,
                                hindi: action.payload.value 
                            }
                        }
                    }
            case 'TOGGLE_CULTURAL_LANGUAGE_PORTUGUESE':
                return {
                    ...state,
                    cultural: {
                        ...state.cultural,
                        language: {
                            ...state.cultural.language,
                            portuguese: action.payload.value 
                        }
                    }
                }
        case 'TOGGLE_CULTURAL_LANGUAGE_BANGLA_BENGALI':
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    language: {
                        ...state.cultural.language,
                        banglaBengali: action.payload.value 
                    }
                }
            }
        case 'TOGGLE_CULTURAL_LANGUAGE_RUSSIAN':
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    language: {
                        ...state.cultural.language,
                        russian: action.payload.value 
                    }
                }
            }
        case 'TOGGLE_CULTURAL_LANGUAGE_JAPANESE':
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    language: {
                        ...state.cultural.language,
                        japanese: action.payload.value 
                    }
                }
            }
        case 'TOGGLE_CULTURAL_LANGUAGE_PUNJABI':
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    language: {
                        ...state.cultural.language,
                        punjabi: action.payload.value 
                    }
                }
            }
        default: 
            return state;
    }
}

export default filterReducer