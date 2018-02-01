import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
       <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}><Image source={ require('./pencil1.png')} style={{ width: 50, height:50, resizeMode: Image.resizeMode.contain,}} />Subhub<Image source={ require('./pencil2.png')} style={{ width: 50, height:50, resizeMode: Image.resizeMode.contain,}} /> </Text>
        </View>
        <Text style={styles.appIntro}>
          The hub for subs
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 50,
    color: 'white'
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    padding: 30,
    textAlign: 'center'
  }
})

