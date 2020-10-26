import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoading} from 'expo'
import * as Font from 'expo-font'

import ExampleFonts from './src/screens/ExampleFonts'
import MainButton from './src/components/custom/MainButton'
import Colors from './src/constants/Colors'

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


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)
  const [showExampleFonts, setShowExampleFonts] = useState(false)

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

  if (showExampleFonts) {
    return <ExampleFonts onPress={toggleExampleFontScreen} /> 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Open up App.js to start working on your app!</Text>
      <MainButton onPress={toggleExampleFontScreen}>Show Example Fonts</MainButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledText: {
    fontFamily: 'tommy-bold',
    color: 'white',
    paddingVertical: 25
  }
});