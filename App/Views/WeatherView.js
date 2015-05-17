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

		// switch the icon to the correct constant
		// you can see the weather icons at
		// http://openweathermap.org/weather-conditions
		switch(this.props.weather) {
			case "01d" || "01n":
			this.props.weather = WEATHER_CLEAR;
			break;

			case "02d" || "02n":
			this.props.weather = WEATHER_FEWCLOUDS;
			break;

			case "03d" || "03n":
			this.props.weather = WEATHER_SCATTEREDCLOUD;
			break;

			case "04d" || "04n":
			this.props.weather = WEATHER_BROKENCLOUDS;
			break;

			case "09d" || "09n":
			this.props.weather = WEATHER_DRIZZLE;
			break;

			case "10d" || "10n":
			this.props.weather = WEATHER_RAIN;
			break;

			case "11d" || "11n":
			this.props.weather = WEATHER_THUNDERSTORM;
			break;

			case "13d" || "13n":
			this.props.weather = WEATHER_SNOW;
			break;

			case "50d" || "50n":
			this.props.weather = WEATHER_MIST;
			break;

			default:
			this.props.weather = WEATHER_CLEAR;
			break;
		}

		return (
			<View style={styles.centreContainer}>
				<Image source={this.props.weather} style={styles.weatherIcon} />
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
