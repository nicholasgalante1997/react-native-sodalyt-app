import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Colors from '../constants/Colors'

import LandingScreen from '../screens/LandingScreen'
import EmailGatherScreen from '../screens/EmailGatherScreen'
import StoryCardHolderScreen from '../screens/StoryCardHolderScreen'
import QuestionRenderer from '../components/story/QuestionRenderer'
import PersonalityResultPage from '../screens/PersonalityResultPage'
import NewUserEmailSignUpScreen from '../screens/NewUserEmailSignUpScreen'
import TesterEndScreen from '../screens/TesterEndScreen'
import LandingCUSearchScreen from '../screens/LandingCUSearchScreen'
import ReturningUserScreen from '../screens/ReturningUserScreen'
import WhySodalytScreen from '../screens/WhySodalytScreen'
import ProfessionalSurveyScreenOne from '../screens/ProfessionalSurveyScreenOne'
import ProfessionalSurveyScreenTwo from '../screens/ProfessionalSurveyScreenTwo';
import ProfessionalSurveyScreenThree from '../screens/ProfessionalSurveyScreenThree';

const FormStackNavigator = createStackNavigator({
    Welcome: {
        screen: LandingScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    LandingSearchScreen: {
        screen: LandingCUSearchScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Email: {
        screen: EmailGatherScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    WhySodalyt: {
        screen: WhySodalytScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    ProfessionalSurveyScreenOne: {
        screen: ProfessionalSurveyScreenOne,
        navigationOptions: {
            // automatically sets to headerLeft is a back button. Removing that here.
            headerLeft: () => null,
            headerTitle: "Company Registration",
            headerTitleStyle: {
                fontFamily: 'tommy-bold',
                color: Colors.ocean.primary
            }
        }
    },
    ProfessionalSurveyScreenTwo: {
        screen: ProfessionalSurveyScreenTwo,
        navigationOptions: {
            headerTitle: "Company Information",
            headerBackTitleVisible: false,
            headerTitleStyle: {
                fontFamily: 'tommy-bold',
                color: Colors.ocean.primary
            }
        }
    },
    ProfessionalSurveyScreenThree: {
        screen: ProfessionalSurveyScreenThree,
        navigationOptions: {
            headerTitle: "Culture Information",
            headerBackTitleVisible: false,
            headerTitleStyle: {
                fontFamily: 'tommy-bold',
                color: Colors.ocean.primary
            }
        }
    },
    ReturningUserScreen: {
        screen: ReturningUserScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    StoryCardPage: {
        screen: StoryCardHolderScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    NewUserEmailSignUp: {
        screen: NewUserEmailSignUpScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    QuestionRenderer: {
        screen: QuestionRenderer,
        navigationOptions: {
            headerShown: false,
        }
    },
    PersonalityResultPage: {
        screen: PersonalityResultPage,
        navigationOptions: {
            headerShown: false
        }
    },
    TesterEndScreen: {
        screen: TesterEndScreen,
        navigationOptions: {
            headerShown: false 
        }
    }
})

export default createAppContainer(FormStackNavigator)
/* 
ExploreDynamicContent: {
    screen: ExploreTabsContentNavigator,
    navigationOptions: {
        headerBackTitleVisible: false,
        headerTitle: 'Services',
        headerLeftContainerStyle: {
            marginLeft: 20
        },
        headerLeft: () => {
            return <Ionicons name="ios-menu" color="black" size={24} />
        }
    }
}
*/
