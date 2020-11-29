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
        // cultural cases
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
        default: 
            return state;
    }
}

export default filterReducer