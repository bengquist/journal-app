import {createStackNavigator, createAppContainer} from 'react-navigation';
import Feed from '../feed/Feed';
import Journal from '../journal/Journal';

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
