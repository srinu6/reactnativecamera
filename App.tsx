/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CameraComponent from './CameraComponent';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>This is Camera test application</Text>
      </View>
      <View>
        <CameraComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  headerContainer: {
    backgroundColor: 'yellow',
    padding: 12,
  },
  headerText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  cameraCont: {
    marginTop: 80,
    width: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
