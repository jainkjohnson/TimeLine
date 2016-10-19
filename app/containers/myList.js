import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;
import { connect } from 'react-redux';
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'

export default class Mylist extends Component {
  render() {
    console.log('props in details');
    return (
      <View>
        <Text>
          My List
        </Text>
      </View>
    );
  }
}
