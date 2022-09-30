import React from 'react';
import { Text, View } from 'react-native';
import { common } from '../styles/common.style';
import { gql, useQuery } from '@apollo/client';

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

  console.log('data: ', data);

  return (
    <View style={common.container}>
      <Text style={common.heading5}>店舗選択</Text>
      <Text style={common.heading5}>日付選択</Text>
    </View>
  );
}

export default ReservationScreen;