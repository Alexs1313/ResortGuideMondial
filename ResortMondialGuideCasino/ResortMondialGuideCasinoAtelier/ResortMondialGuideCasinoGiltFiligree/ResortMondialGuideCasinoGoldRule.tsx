import React from 'react';
import {StyleSheet, View} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

const ResortMondialGuideCasinoGoldRule = () => (
  <View style={styles.resortMondialGuideCasinoGoldRuleTracery}>
    <View style={styles.resortMondialGuideCasinoGoldRuleLineCordon} />
    <View style={styles.resortMondialGuideCasinoGoldRuleDiamondSigil} />
    <View style={styles.resortMondialGuideCasinoGoldRuleLineCordon} />
  </View>
);

export default ResortMondialGuideCasinoGoldRule;

const styles = StyleSheet.create({
  resortMondialGuideCasinoGoldRuleTracery: {
    height: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resortMondialGuideCasinoGoldRuleLineCordon: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A2A08',
  },
  resortMondialGuideCasinoGoldRuleDiamondSigil: {
    width: 6,
    height: 6,
    marginHorizontal: 8,
    backgroundColor: resortMondialGuideCasinoColors.accent,
    transform: [{rotate: '45deg'}],
  },
});
