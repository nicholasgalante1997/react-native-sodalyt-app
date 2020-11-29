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
            noPreference: false,
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
            showHourly: false,
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
        // CASE CULTURAL / RELIGIONS
        case 'TOGGLE_CULTURAL_RELIGION_NOPREF':
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    religion: {
                        ...state.cultural.religion,
                        noPreference: action.payload.value
                    }
                }
            }
        case 'TOGGLE_CULTURAL_RELIGION_CHRISTIANITY':
                return {
                        ...state,
                            cultural: {
                                ...state.cultural,
                                religion: {
                                    ...state.cultural.religion,
                                    christianity: action.payload.value
                            }
                        }
                }
        case 'TOGGLE_CULTURAL_RELIGION_JUDAISM':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            religion: {
                                ...state.cultural.religion,
                                judaism: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RELIGION_ISLAM':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            religion: {
                                ...state.cultural.religion,
                                islam: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RELIGION_OTHER':
        return {
                ...state,
                    cultural: {
                        ...state.cultural,
                        religion: {
                            ...state.cultural.religion,
                            other: action.payload.value
                    }
                }
        }

        // CASE CULTURAL / RACE 
        case 'TOGGLE_CULTURAL_RACE_HISPANIC':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            race: {
                                ...state.cultural.race,
                                hispanic: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RACE_WHITE':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            race: {
                                ...state.cultural.race,
                                white: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RACE_BLACK':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            race: {
                                ...state.cultural.race,
                                black: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RACE_ASIAN':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            race: {
                                ...state.cultural.race,
                                asian: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RACE_NATIVE_AMERICAN':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            race: {
                                ...state.cultural.race,
                                nativeAmerican: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RACE_PACIFIC_ISLANDER':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            race: {
                                ...state.cultural.race,
                                pacificIslander: action.payload.value
                        }
                    }
            }
        case 'TOGGLE_CULTURAL_RACE_ASIAN_SUB':
            return {
                    ...state,
                        cultural: {
                            ...state.cultural,
                            race: {
                                ...state.cultural.race,
                                asianSubcontinent: action.payload.value
                        }
                    }
            }
    
            // Cultural / LGBTQ
        case 'TOGGLE_CULTURAL_LGBTQ':
            return {
                ...state,
                cultural: {
                    ...state.cultural,
                    lgbtq: {
                        supportive: action.payload.value
                    }
                }
            }

        // END CULTURAL FILTERS
        // START SERVICE FILTERS

        // Service => Personal Trainer
        case 'TOGGLE_SERVICE_PERSONAL_TRAINER_TIP':
            return {
                ...state,
                service: {
                    ...state.service,
                    personalTrainer: {
                        ...state.service.personalTrainer,
                        traumaInformedPractitioner: action.payload.value
                    }
                }
            }

        // Service => Meeting Experience
        case 'TOGGLE_SERVICE_MEETING_EXP_VIRTUAL':
            return {
                ...state,
                service: {
                    ...state.service,
                    meetingExperience: {
                        ...state.service.meetingExperience,
                        virtual: action.payload.value
                    }
                }
            }
        case 'TOGGLE_SERVICE_MEETING_EXP_IN_PERSON':
        return {
            ...state,
            service: {
                ...state.service,
                meetingExperience: {
                    ...state.service.meetingExperience,
                    inPerson: action.payload.value
                }
            }
        }
        case 'TOGGLE_SERVICE_MEETING_EXP_EITHER':
        return {
            ...state,
            service: {
                ...state.service,
                meetingExperience: {
                    ...state.service.meetingExperience,
                    noPref: action.payload.value
                }
            }
        }

        // Service => Distance 
        case 'TOGGLE_SERVICE_DISTANCE_WITHIN_5':
            return {
                ...state,
                service:  {
                    ...state.service,
                    distance: {
                        ...state.service.distance,
                        within5Miles: action.payload.value
                    }
                }
            }
            case 'TOGGLE_SERVICE_DISTANCE_WITHIN_10':
                return {
                    ...state,
                    service:  {
                        ...state.service,
                        distance: {
                            ...state.service.distance,
                            within10Miles: action.payload.value
                        }
                    }
                }
            case 'TOGGLE_SERVICE_DISTANCE_WITHIN_20':
                    return {
                        ...state,
                        service:  {
                            ...state.service,
                            distance: {
                                ...state.service.distance,
                                within20Miles: action.payload.value
                            }
                        }
                    }
         case 'TOGGLE_SERVICE_DISTANCE_WITHIN_50':
            return {
                ...state,
                service:  {
                    ...state.service,
                    distance: {
                        ...state.service.distance,
                        within50Miles: action.payload.value
                    }
                }
            }

    // SERVICE => PRICING RANGE 
    case 'TOGGLE_SERVICE_PRICING_RANGE_SHOW_HOURLY':
        return {
            ...state,
            service:  {
                ...state.service,
                pricingRange: {
                    ...state.service.pricingRange,
                    showHourly: action.payload.value
                }
            }
        }

        case 'TOGGLE_SERVICE_PRICING_RANGE_PACKAGE_DEAL':
        return {
            ...state,
            service:  {
                ...state.service,
                pricingRange: {
                    ...state.service.pricingRange,
                    packageDeals: action.payload.value
                }
            }
        }

        case 'TOGGLE_SERVICE_PRICING_RANGE_INSTANT_QUOTE':
        return {
            ...state,
            service:  {
                ...state.service,
                pricingRange: {
                    ...state.service.pricingRange,
                    instantQuote: action.payload.value
                }
            }
        }
        
        case 'TOGGLE_SERVICE_PRICING_RANGE_SODALYT_DISCOUNT_AVAILABLE':
        return {
            ...state,
            service:  {
                ...state.service,
                pricingRange: {
                    ...state.service.pricingRange,
                    sodalytDiscount: action.payload.value
                }
            }
        }

      

        case 'TOGGLE_SERVICE_CRP':
        return {
            ...state,
            service:  {
                ...state.service,
               corporateSustainabilityPolicy: action.payload.value
            }
        }


        default: 
            return state;
    }
}

export default filterReducer