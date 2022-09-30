import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/common.style';

function ReservationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading5}>店舗選択</Text>
      <Text style={styles.heading5}>日付選択</Text>
    </View>
  );
}

export default ReservationScreen;