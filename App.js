import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Login from './components/Login';
import {colors} from './utils/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Login/>			
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: colors.basic.purple,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
