import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { UrlTile, Marker } from 'react-native-maps';
import { Card, Icon } from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';

var defaultRegion = {
  latitude: 22.38,
  longitude: 104.16,
  latitudeDelta: 1,
  longitudeDelta: 1
}

export default class StationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: defaultRegion,
      urlTemplate: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      markers: [{
        mid: 'TLC-1',
        title: 'Trạm khí tượng Lào Cai 1',
        coordinates: {
          latitude: 22.38,
          longitude: 104.16
        },
      }],
      tableHead: ['Trạm khí tượng Lào Cai 1'],
      tableData: [
        ['Nhiệt độ', '15.98 °C'],
        ['Độ ẩm', '72.54 %'],
        ['Lượng mưa', '0 mm'],
        ['Bức xạ', '178 W/mm'],
        ['Hướng gió', '58 Deg'],
        ['Tốc độ gió', '1.08 km/h'],
        ['Độ ẩm đất', '25.39 %'],
        ['Cập nhật: 14:00 18/18/2018']
      ],
    };
  }

  static navigationOptions = {
    title: 'TRẠM KHÍ TƯỢNG',
  };

  render() {
    const pinColor = 'red';
    return (
      <View style={styles.container}>
        <MapView style={styles.map} showsUserLocation={false} region={this.state.region}>
          <UrlTile
            urlTemplate={this.state.urlTemplate}
            maximumZ={19}
          />
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.mid}
              coordinate={marker.coordinates}
              title={marker.title}
              pinColor={pinColor}>
              <MapView.Callout>
                
                  <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
                    <Row data={this.state.tableHead}  style={styles.headTiTle} textStyle={styles.textHead} />
                    <Rows data={this.state.tableData}  style={styles.headRow} textStyle={styles.textRow} />
                  </Table>
                
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  headRow: { height: 30,  width: 200 },
  headTitle: { height: 40, width: 400},
  textHead: { margin: 6, fontWeight: 'bold' },
  textRow: {margin: 6}
});
