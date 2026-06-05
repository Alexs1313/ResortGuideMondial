import React from 'react';
import {StyleSheet, View} from 'react-native';

import {resortGuideMondialColors} from '../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

const ResortGuideMondialGoldRule = () => (
  <View style={styles.resortGuideMondialGoldRuleTracery}>
    <View style={styles.resortGuideMondialGoldRuleLineCordon} />
    <View style={styles.resortGuideMondialGoldRuleDiamondSigil} />
    <View style={styles.resortGuideMondialGoldRuleLineCordon} />
  </View>
);

export default ResortGuideMondialGoldRule;

const styles = StyleSheet.create({
  resortGuideMondialGoldRuleTracery: {
    height: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resortGuideMondialGoldRuleLineCordon: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A2A08',
  },
  resortGuideMondialGoldRuleDiamondSigil: {
    width: 6,
    height: 6,
    marginHorizontal: 8,
    backgroundColor: resortGuideMondialColors.accent,
    transform: [{rotate: '45deg'}],
  },
});
