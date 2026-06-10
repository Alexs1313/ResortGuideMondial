import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoHighlightLatchProps = {
  text: string;
};

export function ResortMondialGuideCasinoHighlightLatch({
  text,
}: ResortMondialGuideCasinoHighlightLatchProps): React.JSX.Element {
  return (
    <View style={styles.resortMondialGuideCasinoHighlightLatchRowLintel}>
      <View style={styles.resortMondialGuideCasinoHighlightLatchCircleEnclave}>
        <Text style={styles.resortMondialGuideCasinoHighlightLatchCheckMarkSigil}>✓</Text>
      </View>
      <Text style={styles.resortMondialGuideCasinoHighlightLatchTextVellum}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoHighlightLatchRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minHeight: 32,
  },
  resortMondialGuideCasinoHighlightLatchCircleEnclave: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoHighlightLatchCheckMarkSigil: {
    fontSize: 9,
    color: resortMondialGuideCasinoColors.muted,
    fontWeight: '700',
  },
  resortMondialGuideCasinoHighlightLatchTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: resortMondialGuideCasinoColors.text,
  },
});
