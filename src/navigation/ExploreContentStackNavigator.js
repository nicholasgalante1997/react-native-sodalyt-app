import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchResultScreen from '../screens/SearchResultScreen'
import Colors from '../constants/Colors';

const ExploreContentNavigator = createStackNavigator({
   SearchResultPage: {
       screen: SearchResultScreen,
       navigationOptions: {
           headerLeft: () => null,
           headerTitle: "Search Results",
           headerTintColor: Colors.ocean.primary,
           headerTitleStyle: {
               fontFamily: 'tommy-bold'
           }
       }
   }
})

export default createAppContainer(ExploreContentNavigator)