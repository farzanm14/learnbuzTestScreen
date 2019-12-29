
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, } from 'react-native';
import MainScreen from './app/screens/MainScreen'
import primary from './app/assets/colors/primary';


console.disableYellowBox = true;
export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" />
        {/* the app will start by display main screen */}
        <MainScreen /> 
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, backgroundColor: primary.blue_background
  }
});


