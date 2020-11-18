import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LandingAndStoryStackNavigator from './LandingAndStoryStackNavigator'
import MainDrawerNavigator from './MainDrawerNavigator'

const FullStackNavigator = createStackNavigator({
    LandingAndStory: {
        screen: LandingAndStoryStackNavigator,
        navigationOptions: {
            headerShown: false
        }
    },
    MainContent: {
        screen: MainDrawerNavigator,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(FullStackNavigator)
