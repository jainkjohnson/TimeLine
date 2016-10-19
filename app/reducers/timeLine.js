import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar} = ReactNative;

const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

export const searchedPersons = createReducer({}, {
  [types.SET_SEARCHED_PERSONS](state, actions) {
    let newState={};
    actions.persons.forEach( (person) => {
      newState[person.id] = person
    })
    console.log('newState', newState);
    return newState;
  }
});
export const counter = createReducer(0, {
  [types.SET_SEARCHED_PERSONS](state, actions) {
    return actions.persons.length;
  },
  [types.INCREMENT](state, actions) {
    return state + 1;
  }
});
export const navigationState = createReducer({ index: 0, routes: [
  { key: 'Home' },
  { key: 'Mylist'}
]},{
  [types.NAVIGATION_FORWARD](state, actions) {
    return NavigationStateUtils.forward(state);
  },
  [types.NAVIGATION_BACK](state, actions) {
    return NavigationStateUtils.back(state);
  },
});
export const NavigatorParams = createReducer({}, {
  [types.NAVIGATION_FORWARD](state, actions) {
    return actions.state;
  }
});
