import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LandingAndStoryStackNavigator from './LandingAndStoryStackNavigator'
import MainProfessionalTabNavigator from './MainProfessionalTabNavigator'
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
    },
    MainProfessionalContent: {
        screen: MainProfessionalTabNavigator,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(FullStackNavigator)
