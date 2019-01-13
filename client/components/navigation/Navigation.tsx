import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Feed from '../feed/Feed';
import Journal from '../journal/Journal';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Feed: Feed,
    Journal: Journal,
  },
  {
    initialRouteName: 'Feed',
  }
);

export default createAppContainer(AppNavigator);
