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
import ApplicationTabs from './ApplicationTabs';
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._render = this._render.bind(this);
    this._renderScene = this._renderScene.bind(this);
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
    const scenes = transitionProps.scenes.map((scene) => {
      const sceneProps = {
        ...transitionProps,
        scene,
      };
      return this._renderScene(sceneProps);
    });
    return (
      <View style={ { flex: 1 } }>
        {scenes}
      </View>
    );
  }

  _renderScene(sceneProps) {
    return (
      <SceneContainer
        {...sceneProps}
        {...this.props}
        key={sceneProps.scene.key}
      />
    )
  }
}
class SceneContainer extends Component {

  render() {
    console.log('inside scene container', this.props);
    const style = [
      styles.scene,
      NavigationPagerStyleInterpolator.forHorizontal(this.props),
    ];
    let Scene = null;
    if (this.props.scene.route.key === 'Home') { Scene = Home }
    // if (this.props.scene.route.key === 'Details') { Scene = Details }
    if (this.props.scene.route.key === 'Mylist') { Scene = Mylist }
    console.log('Scene', this.props.scene.route.key);
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
