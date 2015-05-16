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
var BG_HOT  = "#fb9f4d";
var BG_WARM = "#fbd84d";
var BG_COLD = "#00abe6";

// View declaration
var WeatherView = require('./App/Views/WeatherView.js');

// to move to API
var REQUEST_URL = "http://api.openweathermap.org/data/2.5/find?units=metric&q=sydney,australia";

// create app
var reactnativeapp = React.createClass({

  // returns initial state variables with a default background color
  getInitialState: function() {
    return {
      weatherData: null,
      backgroundColour: "#000000"
    };
  },

  // when this component is mounted, load weather data from weather api
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {

        // set the background colour based on temperature
        var bg = "#00ff00";
        var temp = parseInt(responseData.list[0].main.temp);
        if(temp < 10) {
          bg: BG_COLD;
        } else if(temp >= 10 && temp < 18) {
          bg: BG_WARM;
        } else if(temp >= 18) {
          bg: BG_HOT;
        }

        // update the state with weatherData and a set backgroundColor
        this.setState({
          weatherData: responseData,
          backgroundColor: bg
        });
      })
      .done();
  },
  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Data
        </Text>
      </View>
    );
  },

  render: function() {

    // check if weather data is available
    // if not, render the loading view
    if (!this.state.weatherData) {
      return this.renderLoadingView();
    }

    // format text used in the state.weatherData variable as these
    // are passed to the WeatherView component
    var city = this.state.weatherData.list[0].name.toUpperCase();
    var country = this.state.weatherData.list[0].sys.country.toUpperCase();
    var temp = parseInt(this.state.weatherData.list[0].main.temp).toFixed(0);
    var weather = "sunny";

    // render
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
          <View>
            <Image source={require('image!hamburger')} style={styles.hamburger}/>
          </View>

          <WeatherView
                weather={weather}
                temperature={temp}
                city={city}
                country={country} />
      </View>
    );
  }
});

// this is the default stylesheet created for the app
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC"
  },
  containerSun: {
    flex: 1
  },
  hamburger: {
    width: 20,
    height: 15,
    alignSelf: "flex-end",
    marginRight: 15,
    marginTop: 30,
  },
  centreContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

AppRegistry.registerComponent('reactnativeapp', () => reactnativeapp);
