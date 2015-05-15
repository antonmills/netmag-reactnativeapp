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

// View declaration
var WeatherView = require('./App/Views/WeatherView.js');

// to move to API
var REQUEST_URL = "http://api.openweathermap.org/data/2.5/find?units=metric&q=sydney,australia";
var DUMMY_DATA = {"message":"accurate","cod":"200","count":1,"list":[{"id":2147714,"name":"Sydney","coord":{"lon":151.207,"lat":-33.8696},"main":{"temp":12.37,"temp_min":12.37,"temp_max":12.37,"pressure":1021.27,"sea_level":1027.6,"grnd_level":1021.27,"humidity":99},"dt":1431187260,"wind":{"speed":3.16,"deg":305.001},"sys":{"country":"Australia"},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}]}]};


var reactnativeapp = React.createClass({
  // getInitialState: function() {
  //   return {
  //     weatherData: null,
  //   };
  // },
  // componentDidMount: function() {
  //   this.fetchData();
  // },
  // fetchData: function() {
  //   fetch(REQUEST_URL)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         weatherData: responseData,
  //       });
  //     })
  //     .done();
  // },
  // renderLoadingView: function() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>
  //         Loading Data
  //       </Text>
  //     </View>
  //   );
  // },
  render: function() {

    // check if weather data is available
    // if not, render the loading view
    // if (!this.state.weatherData) {
    //   return this.renderLoadingView();
    // }

    // format text used
    var city = DUMMY_DATA.list[0].name.toUpperCase();
    var country = DUMMY_DATA.list[0].sys.country.toUpperCase();
    var temp = parseInt(DUMMY_DATA.list[0].main.temp).toFixed(0);





    // render
    return (
      <View style={styles.container}>
          <View>
            <Image source={require('image!hamburger')} style={styles.hamburger}/>
          </View>

          <WeatherView
              options={
                {
                  temperature: temp,
                  weather: "sunny"
                }
              } />
          // <View style={styles.centreContainer}>
          //   <Image source={require('image!weather-sun')} style={styles.weatherIcon} />
          //   <Text style={styles.weatherText}>{temp}&deg;</Text>
          //   <Text style={styles.weatherTextLight}>{city},</Text>
          //   <Text style={styles.weatherTextLight}>{country}</Text>
          // </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  containerSun: {
    flex: 1,
    backgroundColor: "#ffffff"
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
