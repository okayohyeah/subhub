import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
       <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}><img src={logo} className="App-logo" alt="logo" /> Subhub <img src={logo} className="App-logo" alt="logo" /></Text>
        </View>
        <Text style={styles.appIntro}>
          The center for subs
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
    fontSize: 100,
    color: 'white'
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center'
  }
})

