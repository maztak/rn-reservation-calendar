import React from 'react';
import { Text, View } from 'react-native';
import { common } from '../styles/common.style';

function ReservationScreen() {
  return (
    <View style={common.container}>
      <Text style={common.heading5}>店舗選択</Text>
      <Text style={common.heading5}>日付選択</Text>
    </View>
  );
}

export default ReservationScreen;