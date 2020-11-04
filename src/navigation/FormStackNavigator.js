import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Colors from '../constants/data'

import LandingScreen from '../screens/LandingScreen'
import EmailGatherScreen from '../screens/EmailGatherScreen'
import StoryCardHolderScreen from '../screens/StoryCardHolderScreen'
import QuestionRenderer from '../components/story/QuestionRenderer'

import NewUserEmailSignUpScreen from '../screens/NewUserEmailSignUpScreen';
import { Modal } from 'react-native';

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
    }
})

export default createAppContainer(FormStackNavigator)