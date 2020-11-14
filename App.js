import TestComp from './TestComponent'
import CustomAlert from './src/components/custom/CustomDevelopmentAlert'

import React, {useState} from 'react';

import {AppLoading} from 'expo'
import * as Font from 'expo-font'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './src/store/reducers/reducers'

import FormStackNavigator from './src/navigation/FormStackNavigator'
import {enableScreens} from 'react-native-screens'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import AWS from 'aws-sdk'

// AWS Configuration
Amplify.configure(awsconfig)

// Screen Optimization
enableScreens();

// Redux Store
const store = createStore(rootReducer)

// Custom Fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "tommy-bold": require('./src/constants/fonts/Made_Tommy_Bold.otf'),
    "tommy-bold-outline": require('./src/constants/fonts/Made_Tommy_Bold_Outline.otf'),
    "tommy-black": require('./src/constants/fonts/Made_Tommy_Black.otf'),
    "tommy-black-outline": require('./src/constants/fonts/Made_Tommy_Black_Outline.otf'),
    "tommy-extra-bold": require('./src/constants/fonts/Made_Tommy_Extra_Bold.otf'),
    "tommy-extra-bold-outline": require('./src/constants/fonts/Made_Tommy_Extra_Bold_Outline.otf'),
    "tommy-light": require('./src/constants/fonts/Made_Tommy_Light.otf'),
    "tommy-light-outline": require('./src/constants/fonts/Made_Tommy_Light_Outline.otf'),
    "tommy-medium": require('./src/constants/fonts/Made_Tommy_Medium.otf'),
    "tommy-medium-outline": require('./src/constants/fonts/Made_Tommy_Medium_Outline.otf'),
    "tommy-reg": require('./src/constants/fonts/Made_Tommy_Regular.otf'),
    "tommy-reg-outline": require('./src/constants/fonts/Made_Tommy_Regular_Outline.otf'),
    "tommy-thin": require('./src/constants/fonts/Made_Tommy_Thin.otf'),
    "tommy-thin-outline": require('./src/constants/fonts/Made_Tommy_Thin_Outline.otf')
  })
}

export default function App(props) {

  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={err => console.log(err)} 
    />
  }

  return (
    <Provider store={store}>
      <FormStackNavigator />
    </Provider>
    // <CustomAlert />
  );
}

