import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LandingAndStoryStackNavigator from './LandingAndStoryStackNavigator'

import MainTabNavigator from './MainTabNavigator'

const FullStackNavigator = createStackNavigator({
    LandingAndStory: {
        screen: LandingAndStoryStackNavigator,
        navigationOptions: {
            headerShown: false
        }
    },
    MainContent: {
        screen: MainTabNavigator,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(FullStackNavigator)
