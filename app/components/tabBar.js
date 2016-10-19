import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import Home from '../containers/Home';
import Details from '../containers/Details';

import ReactNative from 'react-native';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  Animated
} = ReactNative;
import React, { Component } from 'react';
class TabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bounceValue: 1.5
    }
  }

  onPress(index) {
    this.props.setTab(index);
  }
  
  componentDidUpdate() {
  }
  render() {
    return (
      <View>
      {
        this.props.hideTab ?
        <Animated.View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red', height: 50 }}>
          <TouchableHighlight onPress={ () =>
            this.props.navigate( { key: 'Home' })
           }
            style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Explore</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={ () =>
            this.props.navigate( { key: 'Mylist' })
           }
            style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
            <Text>My lists</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
            <Text>History</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Nearby</Text>
          </TouchableHighlight>
        </Animated.View> :
        <View />
      }
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    tabs: state.tabs,
    hideTab: state.hideTab
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
