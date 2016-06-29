'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
var Button = require('./Button');

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {styles.container}>
      <Text> some text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
module.exports = Main;
