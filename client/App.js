import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './RootStack';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});