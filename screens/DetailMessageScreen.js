import React from 'react';
import { View, Text } from 'react-native';
import { Badge } from 'react-native-elements';

export default class DetailMessageScreen extends React.Component {
    render() {
        return (
            <View style={{ padding: 10 }}>
                <View style={{ padding: 10 }}>
                    <Text style={{fontSize: 12, fontStyle: "italic"}}>12/12/2018 15:25</Text>
                    <Badge containerStyle={{ width: '80%' }}
                        value={'Hiện nay, ngày 15/6 trên địa bàn thành phố Lào Cai, khu vực phía tây có nguy cơ sương muối rất cao, đề nghệ bà con cần chú ý và chuẩn bị cẩn thận'}
                        textStyle={{ fontSize: 16, padding: 5 }}
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{fontSize: 12, fontStyle: "italic"}}>12/12/2018 15:25</Text>
                    <Badge containerStyle={{ width: '80%' }}
                        value={'Hiện nay, ngày 15/6 trên địa bàn thành phố Lào Cai, khu vực phía tây có nguy cơ sương muối rất cao, đề nghệ bà con cần chú ý và chuẩn bị cẩn thận'}
                        textStyle={{ fontSize: 16, padding: 5 }}
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{fontSize: 12, fontStyle: "italic"}}>12/12/2018 15:25</Text>
                    <Badge containerStyle={{ width: '80%' }}
                        value={'Hiện nay, ngày 15/6 trên địa bàn thành phố Lào Cai, khu vực phía tây có nguy cơ sương muối rất cao, đề nghệ bà con cần chú ý và chuẩn bị cẩn thận'}
                        textStyle={{ fontSize: 16, padding: 5 }}
                    />
                </View>
            </View>


        );
    }
}