import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialHighlightLatchProps = {
  text: string;
};

export function ResortGuideMondialHighlightLatch({
  text,
}: ResortGuideMondialHighlightLatchProps): React.JSX.Element {
  return (
    <View style={styles.resortGuideMondialHighlightLatchRowLintel}>
      <View style={styles.resortGuideMondialHighlightLatchCircleEnclave}>
        <Text style={styles.resortGuideMondialHighlightLatchCheckMarkSigil}>✓</Text>
      </View>
      <Text style={styles.resortGuideMondialHighlightLatchTextVellum}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialHighlightLatchRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minHeight: 32,
  },
  resortGuideMondialHighlightLatchCircleEnclave: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialHighlightLatchCheckMarkSigil: {
    fontSize: 9,
    color: resortGuideMondialColors.muted,
    fontWeight: '700',
  },
  resortGuideMondialHighlightLatchTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: resortGuideMondialColors.text,
  },
});
