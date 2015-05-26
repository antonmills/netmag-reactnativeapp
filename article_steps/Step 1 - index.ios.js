/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

// this is our application class
var weatherapp = React.createClass({
  render: function() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('weatherapp', () => weatherapp);
