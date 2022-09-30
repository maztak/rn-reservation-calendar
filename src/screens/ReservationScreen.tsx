import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Text, View } from 'react-native';
import { common } from '../styles/common.style';
import { gql, useQuery } from '@apollo/client';
import { Picker } from '@react-native-picker/picker';

const CHAPTERS_QUERY = gql`
  query ShopQuery {
    shops {
      name # 店舗名
      shopOpenings { # 週の営業曜日 存在しない曜日は定休曜日となる
        dayId # 曜日ID 1:日曜日, 2:月曜日 ... 7:土曜日
        beginTime # 営業開始時刻(hh:mm:ss+hh)
        endTime # 営業終了時刻(hh:mm:ss+hh)
      }
    }
  }
`

function ReservationScreen() {
  const { data, loading } = useQuery(CHAPTERS_QUERY);
  const [selectedShop, setSelectedShop] = useState();
  console.log('data: ', data);

  return (
    <View style={common.container}>
      <Text style={common.heading5}>店舗選択</Text>
      <Picker
        mode='dropdown'
        selectedValue={selectedShop}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedShop(itemValue)
        }>
        {data?.shops?.map((shop, index) => {
          return <Picker.Item key={index} label={shop.name} value={index} />;
        })}
      </Picker>
      <Text style={common.heading5}>日付選択</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  picker: {
    marginBottom: 40,
    height: 32,
    borderWidth: 0,
    paddingLeft: 17,
  }
});

export default ReservationScreen;