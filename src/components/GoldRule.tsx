import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../constants/theme';

const GoldRule = () => (
  <View style={styles.GoldRuleTracery}>
    <View style={styles.GoldRuleLineCordon} />
    <View style={styles.GoldRuleDiamondSigil} />
    <View style={styles.GoldRuleLineCordon} />
  </View>
);

export default GoldRule;

const styles = StyleSheet.create({
  GoldRuleTracery: {
    height: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  GoldRuleLineCordon: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A2A08',
  },
  GoldRuleDiamondSigil: {
    width: 6,
    height: 6,
    marginHorizontal: 8,
    backgroundColor: colors.accent,
    transform: [{rotate: '45deg'}],
  },
});
