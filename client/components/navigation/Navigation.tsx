import {createStackNavigator, createAppContainer} from 'react-navigation';
import Feed from '../feed/Feed';
import Journal from '../journal/Journal';
import Login from '../app/Login'

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Feed: Feed,
    Journal: Journal,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
