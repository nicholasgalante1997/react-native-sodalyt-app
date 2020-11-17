import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

import LandingScreen from '../screens/LandingScreen'
import EmailGatherScreen from '../screens/EmailGatherScreen'
import StoryCardHolderScreen from '../screens/StoryCardHolderScreen'
import QuestionRenderer from '../components/story/QuestionRenderer'
import PersonalityResultPage from '../screens/PersonalityResultPage'
import NewUserEmailSignUpScreen from '../screens/NewUserEmailSignUpScreen'
import TesterEndScreen from '../screens/TesterEndScreen'
import VerticalCategoriesScreen from '../screens/VerticalCategoriesScreen'
import ProfileHomeScreen from '../screens/ProfileHomeScreen'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native'
import Colors from '../constants/Colors'

const ExploreContentNavigator = createStackNavigator({
        ServicesGeneralPage: {
            screen: VerticalCategoriesScreen
        }
})

const ProfileNavigator = createStackNavigator({
    ProfileHome: {
        screen: ProfileHomeScreen
    }
})

const TabScreenConfig = {
    Explore: {
        screen: ExploreContentNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='wpexplorer' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <FontAwesome 
                name='grav' 
                size={25} 
                color={tabInfo.tintColor} />
            } 
        }
    }
}

const ExploreTabsContentNavigator = Platform.OS === 'android' ?
createMaterialBottomTabNavigator(TabScreenConfig, {
    activeColor: Colors.ocean.primary,
    shifting: true
}) : createBottomTabNavigator(TabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'tommy-reg'
        },
        activeTintColor: Colors.ocean.primary,
        labelPosition: 'below-icon'
    }
}) 

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
    },
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
})

export default createAppContainer(FormStackNavigator)