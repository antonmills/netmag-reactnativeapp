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

// component declaration
var WeatherView = require('./App/Views/WeatherView.js');


// constants used for background colors
var BG_HOT  = "#fb9f4d";
var BG_WARM = "#fbd84d";
var BG_COLD = "#00abe6";


// a constant for the request url for openweathermap.org, we post to this json url
// with lat and lon parameters to get the weather for that location
// see this as the format for parsing:
// http://api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=139
var REQUEST_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&";


// this is our application class
var weatherapp = React.createClass({

  // returns initial state variables
  // in this case we have weatherData which will hold the API response
  // and backgroundColor which is the state variable for the colour set by the temperature
  getInitialState: function() {
    return {
      weatherData: null,
      backgroundColor: "#FFFFFF"
    };
  },

  // this method is invoked automatically when the class (or module)
  // is mounted successfully. In this instance, we use it to query the
  // navigator to get the current geolocation latitude and longitude
  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
    location => {
      // this variable will contain the full url with the new lat and lon
      var formattedURL = REQUEST_URL + "lat=" + location.coords.latitude + "&lon=" + location.coords.longitude;

      // this will output the final URL to the Xcode output window
      console.log(formattedURL);

      // get the data from the API
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
        var bg;
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
  // note
  renderLoadingView: function() {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>
          Loading Weather Information
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

    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>

        <WeatherView />

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
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

AppRegistry.registerComponent('weatherapp', () => weatherapp);
