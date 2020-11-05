import TestComp from './TestComponent'

import React, {useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';

import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import Colors from './src/constants/Colors'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './src/store/reducers/reducers'

import FormStackNavigator from './src/navigation/FormStackNavigator'
import {enableScreens} from 'react-native-screens'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import AWS from 'aws-sdk'

Amplify.configure(awsconfig)

enableScreens();

const store = createStore(rootReducer)

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
  // const [showExampleFonts, setShowExampleFonts] = useState(false)
  // const [questionsArray, setQuestionsArray] = useState(Data)

  const toggleExampleFontScreen = () => {
    setShowExampleFonts(!showExampleFonts)
  }

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
    // <TestComp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ocean.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledText: {
    fontFamily: 'tommy-bold',
    color: 'white',
    paddingVertical: 25
  },
  button: {
    backgroundColor: Colors.ocean.secondary,
  }
});
