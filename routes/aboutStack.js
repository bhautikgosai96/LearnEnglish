import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import About from '../screens/about';
import Standard10 from '../screens/standard10';
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About Learn English" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: '#2b374f', color: 'white'},
  },
});

export default AboutStack;
