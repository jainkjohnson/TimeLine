import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Navigator } from 'react-native';
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
const {
  Card: NavigationCard,
  Transitioner: NavigationTransitioner,
} = NavigationExperimental;
const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;
import {
  Animated,
  StyleSheet,
  View,
  NavigationExperimental
} from 'react-native';
import TabBar from '../components/tabBar';
import Home from './Home'
import Details from './Details'
import Mylist from './myList'
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._render = this._render.bind(this);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationTransitioner
          navigationState={this.props.navigationState}
          render={this._render}
        />
        <View style={{
          flex: 1,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'red',
        }}>
          <TabBar />
        </View>
      </View>
    );
  }
  _render(transitionProps) {
    console.log('transitionProps', transitionProps);
    return (
      <View style={ { flex: 1 } }>
        <SceneContainer
          {...transitionProps}
          {...this.props}
        />
      </View>
    );
  }
}
class SceneContainer extends Component {

  render() {
    const style = [
      styles.scene,
      NavigationPagerStyleInterpolator.forHorizontal(this.props),
    ];
    let Scene = null;
    const { key: routeKey } = this.props.scene.route;
    if (routeKey === 'Home') { Scene = Home }
    if (routeKey === 'Details') { Scene = Details }
    if (routeKey === 'Mylist') { Scene = Mylist }
    console.log('Scene', routeKey);
    return (
      <Animated.View style={style}>
          <Scene {...this.props} style={style} />
      </Animated.View>
    )
  }
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
