'use strict'

var React = require('react-native')

var {
	StyleSheet,
	View,
	Text,
	Image
} = React;

// the array of weather icons corresponding to their
// openweathermap equivalent code. you can see the weather icons at
// http://openweathermap.org/weather-conditions
var weatherIconArray = [];
weatherIconArray["01n"] = require("image!weather-clear");
weatherIconArray["01d"] = require("image!weather-clear");
weatherIconArray["02n"] = require("image!weather-fewclouds");
weatherIconArray["02d"] = require("image!weather-fewclouds");
weatherIconArray["03n"] = require("image!weather-scatteredcloud");
weatherIconArray["03d"] = require("image!weather-scatteredcloud");
weatherIconArray["04n"] = require("image!weather-brokenclouds");
weatherIconArray["04d"] = require("image!weather-brokenclouds");
weatherIconArray["09n"] = require("image!weather-drizzle");
weatherIconArray["09d"] = require("image!weather-drizzle");
weatherIconArray["10n"] = require("image!weather-rain");
weatherIconArray["10d"] = require("image!weather-rain");
weatherIconArray["11n"] = require("image!weather-thunderstorm");
weatherIconArray["11d"] = require("image!weather-thunderstorm");
weatherIconArray["13n"] = require("image!weather-snow");
weatherIconArray["13d"] = require("image!weather-snow");
weatherIconArray["50n"] = require("image!weather-mist");
weatherIconArray["50d"] = require("image!weather-mist");


// the components class register
var WeatherView = React.createClass({

	// the state variables that will be used but
	// also declaration of the propTypes the variables
	// are expected to be
	propTypes: {
		weather: React.PropTypes.string,
		temperature: React.PropTypes.int,
		city: React.PropTypes.string,
		country: React.PropTypes.string
  },

	// the views render method
	render: function() {
		return (
			<View style={styles.centreContainer}>
				<Text>TEST</Text>
			</View>
    )
  }
});

// the components Styles
var styles = StyleSheet.create({
	centreContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// this components export name is WeatherView
module.exports = WeatherView;
