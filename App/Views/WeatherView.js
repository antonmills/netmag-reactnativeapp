'use strict'

var React = require('react-native')

var {
	StyleSheet,
	View,
	Text,
	Image
} = React;

// constants used for weather icons
var WEATHER_CLEAR = require("image!weather-clear");
var WEATHER_FEWCLOUDS = require("image!weather-fewclouds");
var WEATHER_SCATTEREDCLOUD = require("image!weather-scatteredcloud");
var WEATHER_BROKENCLOUDS = require("image!weather-brokenclouds");
var WEATHER_DRIZZLE = require("image!weather-drizzle");
var WEATHER_RAIN = require("image!weather-rain");
var WEATHER_THUNDERSTORM = require("image!weather-thunderstorm");
var WEATHER_SNOW = require("image!weather-snow");
var WEATHER_MIST = require("image!weather-mist");


var WeatherView = React.createClass({
	// the property types set
	propTypes: {
		weather: React.PropTypes.string,
		temperature: React.PropTypes.int,
		city: React.PropTypes.string,
		country: React.PropTypes.string
  },

	// the main render method
  render: function() {
		return (
			<View style={styles.centreContainer}>
				<Image source={WEATHER_FEWCLOUDS} style={styles.weatherIcon} />
				<Text style={styles.weatherText}>{this.props.temperature}&deg;</Text>
				<Text style={styles.weatherTextLight}>{this.props.city},</Text>
				<Text style={styles.weatherTextLight}>{this.props.country}</Text>
			</View>
    )
  }
});

var styles = StyleSheet.create({
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
	centreContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

module.exports = WeatherView;
