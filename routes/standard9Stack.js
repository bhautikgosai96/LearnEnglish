import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Standard9 from '../screens/standard9';
import Standard9List from '../screens/standard9List';
import Standard10List from '../screens/standard10List';
import Header from '../shared/header';
import React from 'react';
import {color} from 'react-native-reanimated';

const screens = {
  Standard9: {
    screen: Standard9,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Standard 9 English" />
        ),
      };
    },
  },
  Standard9List: {
    screen: Standard9List,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('lessonName'),
        headerTintColor: 'white',
        //header: {tintColor: 'white'},
      };
    },
  },
};

const Standard9Stack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: '#2b374f', color: 'white'},
  },
});

export default Standard9Stack;
