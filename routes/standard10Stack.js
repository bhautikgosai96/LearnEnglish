import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Standard10 from '../screens/standard10';
import Standard10List from '../screens/standard10List';
import Standard9List from '../screens/standard9List';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Standard10: {
    screen: Standard10,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Standard 10 English" />
        ),
      };
    },
  },
  Standard10List: {
    screen: Standard10List,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('lessonName'),
        headerTintColor: 'white',
      };
    },
  },
};

const Standard10Stack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: '#2b374f', color: 'white'},
  },
});

export default Standard10Stack;
