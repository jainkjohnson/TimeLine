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

class Details extends Component {
  componentWillMount() {
    this.props.controllTab(true);
    this.props.getDetails(this.props.NavigatorParams.id);
  }
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>
          Details{this.props.getSearched.full_name}
        </Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    NavigatorParams: state.NavigatorParams,
    getSearched: state.getSearched
  };
}
export default connect(mapStateToProps)(Details);
