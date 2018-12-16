import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements'

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'THÔNG TIN LIÊN HỆ',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card title="CHỦ ĐẦU TƯ" titleStyle={styles.cardTitle}>
          <View>
            <Text style={[styles.cardHomeText, styles.cardText]}>Tỉnh Lào Cai</Text>
            <Text style={[styles.cardText]}>Tỉnh Lào Cai, Việt Nam</Text>
            <Text style={[styles.cardText]}>(+84-xx) xxxxxxx</Text>
            <Text style={[styles.cardText]}>contact@laocai.vn</Text>
          </View>
        </Card>

        <Card title="ĐƠN VỊ CHỦ TRÌ" titleStyle={styles.cardTitle}>
          <View>
            <Text style={[styles.cardHomeText, styles.cardText]}>Công ty Agrimedia</Text>
            <Text style={[styles.cardText]}>Tầng 18, Toà nhà Sông Đà, Phạm Hùng, Hà Nội</Text>
            <Text style={[styles.cardText]}>(+84-24) 62538352</Text>
            <Text style={[styles.cardText]}>contact@agrimedia.vn</Text>
          </View>
        </Card>

        <Card title="ĐƠN VỊ THỰC HIỆN" titleStyle={styles.cardTitle}>
          <View>
            <Text style={[styles.cardHomeText, styles.cardText]}>Trung tâm CarGIS</Text>
            <Text style={[styles.cardText]}>Đại học Khoa học Tự nhiên, Nguyễn Trãi, Hà Nội</Text>
            <Text style={[styles.cardText]}>(+84-94) 3672345</Text>
            <Text style={[styles.cardText]}>contact@cargis.org</Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardTitle: {
    textAlign: 'left'
  },
  cardHomeText: {
    fontWeight: 'bold'
  },
  cardText: {
    marginBottom: 5,
  }
});
