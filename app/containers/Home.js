import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import styles from './styles';
import TabBar from '../components/tabBar';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      searching: false,
      offset: 0
    }
  }
  onPress() {
    this.setState({ searching: true });
    this.props.Searched(this.state.textInput).then(() => {
      this.setState({ searching: false });
    });
  }
  person() {
    return Object.keys(this.props.searchedPersons).map(key => this.props.searchedPersons[key]);
  }
  handleScroll(event: Object) {
    console.log('High', event.nativeEvent.contentOffset.y);
    let currentOffset = event.nativeEvent.contentOffset.y;
    if (currentOffset > this.state.offset) {
      this.props.controllTab(false);
    } else {
      this.props.controllTab(true);
    }
    this.setState({ offset: currentOffset });

  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.search}>
          <TextInput style={styles.searchInput}
            placeholder='type name'
            onChangeText={ (textInput) => this.setState({ textInput }) }
            value={this.state.textInput}
          />
          <TouchableHighlight onPress={ () => this.onPress()} style={styles.searchButton}>
          <Text>Search</Text>
          </TouchableHighlight>
        </View>
        <ScrollView
          style={styles.scrollSection}
          onScroll={this.handleScroll.bind(this)}
        >
          {
            !this.state.searching && this.person().map((person) => {
              return (
                <View key={person.id}>
                  <TouchableHighlight onPress={ () =>
                    this.props.navigate( { key: 'Details', id: person.id })
                   }>
                    <Image
                    source={{ uri: `http://182.72.164.150:8008/${person.photo_url}`}}
                    style={styles.resultImage}
                    />
                  </TouchableHighlight>
                  <Text style={styles.name}>
                    {person.full_name}
                  </Text>
                </View>
              );
            })
          }
          {
            this.state.searching ? <Text>Searching... </Text> : null
          }
        </ScrollView>
      </View>
    );
  }

}
function mapStateToProps(state) {
  return {
    searchedPersons: state.searchedPersons
  };
}
export default connect(mapStateToProps)(Home);
