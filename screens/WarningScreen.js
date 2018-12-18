import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';;
import { Card, Icon, ListItem, Divider, Overlay, list } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StationScreen from './StationScreen';

export default class WarningScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
    this.renderMessage = this.renderMessage.bind(this);
  }

  static navigationOptions = {
    title: 'CẢNH BÁO THIÊN TAI',
  };
  
  renderMessage() {
    console.log("I want this");
    this.props.navigation.navigate('DetailWarning')
  }
  render() {
   
    const list = [
      {
        MessageTitle: 'Nguy cơ cháy rừng',
        MessageDate: '12/12/2018',
        MessageHour: '15:25',
        MessageContent: 'Khu vực phía nam huyện XYZ...'
      },
      {
        MessageTitle: 'Nguy cơ lũ quét',
        MessageDate: '18/12/2018',
        MessageHour: '16:45',
        MessageContent: 'Nguy cơ lũ quét xuất hiện tại...'
      },
      {
        MessageTitle: 'Nguy cơ sương muối',
        MessageDate: '18/12/2018',
        MessageHour: '16:45',
        MessageContent: 'Nguy cơ sương muối xuất...'
      },
    ]
    return (
      <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              title={l.MessageTitle}
              titleStyle={{ fontWeight: 'bold', paddingBottom: 5 }}
              subtitle={l.MessageContent}
              rightTitle={l.MessageDate}
              bottomDivider={true}
              rightSubtitle={l.MessageHour}
              onPress={this.renderMessage}
              chevron = {true}
            />

          ))
        }

      </View>
    );

  }
}
