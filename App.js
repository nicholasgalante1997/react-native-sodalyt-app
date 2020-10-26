import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoading} from 'expo'
import * as Font from 'expo-font'

const fetchFonts = () => {
  return Font.loadAsync({
    "tommy-bold": require('./src/constants/fonts/Made_Tommy_Bold.otf')
  })
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={err => console.log(err)} 
    />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledText: {
    fontFamily: 'tommy-bold'
  }
});
