import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import WeatherScreen from '../screens/WeatherScreen';
import StationScreen from '../screens/StationScreen';
import WarningScreen from '../screens/WarningScreen';
import ContactScreen from '../screens/ContactScreen';

import DetailMessageScreen from '../screens/DetailMessageScreen';

/**
const DetailStack = createStackNavigator({
  Detail: DetailMessageScreen,
});

DetailStack.navigationOptions = {
  tabBarLabel: 'Thông tin chi tiết',
};
*/

const WeatherStack = createStackNavigator({
  Weather: WeatherScreen,
});

WeatherStack.navigationOptions = {
  tabBarLabel: 'Thời tiết',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-partly-sunny`
          : 'md-partly-sunny'
      }
    />
  ),
};

const StationStack = createStackNavigator({
  Station: StationScreen,
});

StationStack.navigationOptions = {
  tabBarLabel: 'Trạm đo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cellular' : 'md-wifi'}
    />
  ),
};

const WarningStack = createStackNavigator({
  Warning: WarningScreen,
  DetailWarning: DetailMessageScreen,
});

WarningStack.navigationOptions = {
  tabBarLabel: 'Thiên tai',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-warning' : 'md-warning'}
    />
  ),
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});

ContactStack.navigationOptions = {
  tabBarLabel: 'Liên hệ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};


export default createBottomTabNavigator({
  StationStack,
  WeatherStack,
  WarningStack,
  ContactStack,
});
