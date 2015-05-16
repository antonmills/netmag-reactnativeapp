'use strict'

var React = require('react-native')

var {
	StyleSheet,
	View,
	Text,
	Image
} = React;


var WeatherView = React.createClass({
	// the property types to change
	propTypes: {
		weather: React.PropTypes.string,
		temperature: React.PropTypes.int,
		city: React.PropTypes.string,
		country: React.PropTypes.string
  },

	// the main render
  render: function() {
    var something;

		return (
			<View style={styles.centreContainer}>
				<Image source={require('image!weather-sun')} style={styles.weatherIcon} />
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
