import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import LandingScreen from '../screens/LandingScreen'
import EmailGatherScreen from '../screens/EmailGatherScreen'
import StoryCardHolderScreen from '../screens/StoryCardHolderScreen'
import QuestionRenderer from '../components/story/QuestionRenderer'
import PersonalityResultPage from '../screens/PersonalityResultPage'
import NewUserEmailSignUpScreen from '../screens/NewUserEmailSignUpScreen'
import TesterEndScreen from '../screens/TesterEndScreen'

const FormStackNavigator = createStackNavigator({
    Welcome: {
        screen: LandingScreen,
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
