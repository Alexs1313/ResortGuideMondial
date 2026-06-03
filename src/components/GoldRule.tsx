import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../theme/colors';

const GoldRule = () => (
  <View style={styles.goldRule}>
    <View style={styles.goldRuleLine} />
    <View style={styles.goldRuleDiamond} />
    <View style={styles.goldRuleLine} />
  </View>
);

export default GoldRule;

const styles = StyleSheet.create({
  goldRule: {
    height: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldRuleLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A2A08',
  },
  goldRuleDiamond: {
    width: 6,
    height: 6,
    marginHorizontal: 8,
    backgroundColor: colors.accent,
    transform: [{rotate: '45deg'}],
  },
});
