import {createAppContainer} from 'react-navigation'
// Takes object to create the stack of navigation 
import {createStackNavigator} from 'react-navigation-stack'
import LandingAndStoryStackNavigator from './LandingAndStoryStackNavigator'
import MainProfessionalTabNavigator from './MainProfessionalTabNavigator'
import MainTabNavigator from './MainTabNavigator'


const FullStackNavigator = createStackNavigator({
    LandingAndStory: {
        //Order matters, LandingAndStory is first and where the App takes me
        //LandingAndStoryStackNavigator is its own navigator
        screen: LandingAndStoryStackNavigator,
        //because we customize our own headers
        navigationOptions: {
            headerShown: false
        }
    },
    MainContent: {
        //May get to MainContent or MainProfessionalContent depending on what 
        //I do on LandingAndStoryStackNavigator
        //MainContenta nd MainProfessionalTabNavigator are TAB navigators, means they have bottom tabs, left right
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
