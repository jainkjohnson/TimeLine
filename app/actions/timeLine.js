import * as types from './types';
import Api from '../lib/api';

import ReactNative from 'react-native'
const { NavigationExperimental } =  ReactNative
const { jumpToIndex } = NavigationExperimental.StateUtils;

export function setTab(tabIndex) {
  return (dispatch, getState) => {
    const { tabs } = getState()
    dispatch(Object.assign({ type: types.SET_TAB }, jumpToIndex(tabs, tabIndex)));
  }
}

export function Searched(nameFromSearch) {
  return (dispatch, getState) => {
    const params = [
      `search=${nameFromSearch}`
    ].join('&')
    return Api.get(`/person?${params}`).then(resp => {
      console.log('resp', resp);
      dispatch(setSearchedPerson({ persons: resp }));
    });
  }
}
export function setSearchedPerson({ persons }) {
  console.log('perons', persons);
  return {
    type: types.SET_SEARCHED_PERSONS,
    persons
  }
}
export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function navigate(action) {
  return (dispatch, getState) => {
    dispatch(navigateForward(action))
  }
}

function navigateForward(state) {
  return {
    type: types.NAVIGATION_FORWARD,
    state
  }
}

export function navigateBack() {
  return (dispatch, getState) => {
    dispatch({
      type: types.NAVIGATION_BACK
    })
  }
}
