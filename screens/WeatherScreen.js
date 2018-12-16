import React from 'react';
import { StyleSheet, View, Text, WebView } from 'react-native';

export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    title: 'DỰ BÁO THỜI TIẾT',
  };
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: 'https://weather.com/vi-VN/weather/today/l/f12714af371c78735db22dee41e443735e3d979ab05afd3f2390c41c8cb031ba' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
