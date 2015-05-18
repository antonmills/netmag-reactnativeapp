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
var REQUEST_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&";//lat=35&lon=139";

// create app
var reactnativeapp = React.createClass({

  // returns initial state variables with a default background color
  getInitialState: function() {
    return {
      weatherData: null,
      backgroundColour: null,
      initialPosition: 'unknown'
    };
  },

  // when this component is mounted, load weather data from weather api
  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
    location => {
      var formattedURL = REQUEST_URL + "lat=" + location.coords.latitude + "&lon=" + location.coords.longitude;
      //console.log(formattedURL);
      this.fetchData(formattedURL);
    },
    error => {
      console.log(error);
    });
  },

  // fetchdata takes the formattedURL, gets the json data and
  // sets the apps backgroundColor based on the temperature of
  // the location
  fetchData: function(url) {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {

        // set the background colour of the app based on temperature
        var bg = "#CCCCCC";
        var temp = parseInt(responseData.main.temp);
        if(temp < 14) {
          bg = BG_COLD;
        } else if(temp >= 14 && temp < 25) {
          bg = BG_WARM;
        } else if(temp >= 25) {
          bg = BG_HOT;
        }

        // update the state with weatherData and a set backgroundColor
        this.setState({
          weatherData: responseData,
          backgroundColor: bg
        });
      })
      .done();
  },

  // the loading view is a temporary view used while waiting
  // for the api to return data
  renderLoadingView: function() {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>
          Loading Weather Information
        </Text>
      </View>
    );
  },

  // the apps render method renders the WeatherView component and sets it's data
  render: function() {

    // check if weather data is available
    // if not, render the loading view
    if (!this.state.weatherData) {
      return this.renderLoadingView();
    }

    // format text used in the state.weatherData variable as these
    // are passed to the WeatherView component
    var city = this.state.weatherData.name.toUpperCase();
    var country = this.state.weatherData.sys.country.toUpperCase();
    var temp = parseInt(this.state.weatherData.main.temp).toFixed(0);
    var weather = this.state.weatherData.weather[0].icon.toString();

    // render
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>

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
    backgroundColor: "#FF1234"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 32,
    fontWeight: "100",
    color: "#666666",
    textAlign: "center"
  }
});

AppRegistry.registerComponent('reactnativeapp', () => reactnativeapp);
