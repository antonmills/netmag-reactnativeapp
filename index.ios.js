/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;

// constants used for background colors
var BG_HOT  = "#fbd84d";
var BG_WARM = "";
var BG_COLD = "#00abe6";

// to move to API
var REQUEST_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
var DUMMY_DATA = { "coord":{"lon":151.21,"lat":-33.87},"sys":{"message":0.6,"country":"Australia","sunrise":1430944454,"sunset":1430982554},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"base":"stations","main":{"temp":284.702,"temp_min":284.702,"temp_max":284.702,"pressure":1026.23,"sea_level":1032.61,"grnd_level":1026.23,"humidity":98},"wind":{"speed":3.15,"deg":247.003},"clouds":{"all":0},"dt":1431034577,"id":2147714,"name":"Sydney","cod":200}


var reactnativeapp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
          <View>
            <Image source={require('image!hamburger')} style={styles.hamburger}/>
          </View>

          <View style={styles.centreContainer}>
            <Image source={require('image!weather-sun')} style={styles.weatherIcon} />
            <Text style={styles.weatherText}>20&deg;</Text>
            <Text style={styles.weatherTextLight}>SYDNEY,</Text>
            <Text style={styles.weatherTextLight}>AUSTRALIA</Text>
          </View>

          <View style={styles.copyrightContainer}>
            <Text style={styles.copyright}>Powered by openweathermap.org</Text>
          </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_HOT
  },
  hamburger: {
    marginTop: 30,
    alignSelf: "flex-end",
    marginRight: 15,
    width: 20,
    height: 15
  },
  centreContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -30,
    marginTop: 30,
    width: 375,
    height: 400,
  },
  weatherIcon: {
    width: 132,
    height: 132,
  },
  weatherText: {
    fontSize: 62,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  weatherTextLight: {
    fontSize: 32,
    fontWeight: "100",
    color: "#FFFFFF"
  },
  copyrightContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  copyright: {
    fontSize: 14,
    color: "#FFFFFF"
  }
});

AppRegistry.registerComponent('reactnativeapp', () => reactnativeapp);
