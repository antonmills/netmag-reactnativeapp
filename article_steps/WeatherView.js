'use strict'

var React = require('react-native')

var {
	StyleSheet,
	View,
	Text,
	Image
} = React;


// the components class register
var WeatherView = React.createClass({

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
