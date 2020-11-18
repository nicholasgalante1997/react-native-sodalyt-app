import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import FilterStackNavigator from './FilterStackNavigator'
import Colors from '../constants/Colors'

const MainDrawerNavigator = createDrawerNavigator(
{
    Explore: MainTabNavigator,
    Filter: FilterStackNavigator
}, 
{
    contentOptions: {
        activeTintColor: Colors.ocean.primary
    }
}
)

export default createAppContainer(MainDrawerNavigator)