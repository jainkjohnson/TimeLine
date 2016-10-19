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
    return newState;
  }
});
export const getSearched = createReducer({}, {
  [types.GET_DETAILS](state, actions) {
    return actions.details;
  }
});
export const hideTab = createReducer(true, {
  [types.CONTROLLTAB](state, actions) {
    return actions.value;
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
  { key: 'Mylist' },
  { key: 'Details' }
]},{
  [types.NAVIGATION_FORWARD](state, actions) {
    console.log('state, action', state, actions);
    return NavigationStateUtils.jumpTo(state, actions.state.key);
  },
  [types.NAVIGATION_BACK](state, actions) {
    console.log('state, action', state, actions);
    return NavigationStateUtils.back(state);
  },
});
export const NavigatorParams = createReducer({}, {
  [types.NAVIGATION_FORWARD](state, actions) {
    return actions.state;
  }
});
