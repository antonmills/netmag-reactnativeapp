'use strict'

var React = require('react-native')

var {
	StyleSheet,
	View,
	Text,
	Image
} = React;


// constants used for background colors
var BG_HOT  = "#fb9f4d";
var BG_WARM = "#fbd84d";
var BG_COLD = "#00abe6";


var WeatherView = React.createClass({
	// the property types to change
	propTypes: {
    temperature: React.PropTypes.number,
    weather: React.PropTypes.string
  },

	// the main render
  render: function() {
    var something;
    return (
			<View style={styles.centreContainer}>
				<Image source={require('image!weather-sun')} style={styles.weatherIcon} />
				<Text style={styles.weatherText}>20&deg;</Text>
				<Text style={styles.weatherTextLight}>Sydney,</Text>
				<Text style={styles.weatherTextLight}>Australia</Text>
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
