import { View, Text, TabBarIOS, TabBarItemIOS, TouchableHighlight} from 'react-native';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import Home from '../Home';
import Details from '../Details';

class ApplicationTabs extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  onPress(index) {
  }

  renderScene(component, index) {
    this.props.setTab(index);
    return (
      <View style={ { flex: 1 } }>
        { React.createElement(component, this.props) }
      </View>
    );
  }

  render() {
    console.log('this.props.tabs.index', this.props.tabs.index);
    if (this.props.tabs.index === 0) {

    }
    console.log('this.props123', this.props);
    return (
      <View style={{ flexDirection: 'row', backgroundColor: 'red', position: 'absolute', top: 500 }}>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red', height: 50 }}>
        <TouchableHighlight
          onPress={ () => this.renderScene(Home, 0) }
          style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
          <Text>My lists</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ () => this.onPress(1) }
          style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
          <Text>My lists</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
          <Text>History</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Nearby</Text>
        </TouchableHighlight>
        </View>
      </View>
    );

  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
