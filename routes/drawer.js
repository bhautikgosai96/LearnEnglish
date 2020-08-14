import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import AboutStack from './aboutStack';
import Standard10Stack from './standard10Stack';
import Standard9Stack from './standard9Stack';

const a = 'Standard-9';
const RootDrawerNavigation = createDrawerNavigator({
  Standard9: {
    screen: Standard9Stack,
    navigationOptions: () => ({
      title: 'Standard-9',
    }),
  },
  Standard10: {
    screen: Standard10Stack,
    navigationOptions: () => ({
      title: 'Standard-10',
    }),
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigation);
