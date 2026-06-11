import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../constants/theme';

type HighlightChipProps = {
  text: string;
};

export function HighlightChip({
  text,
}: HighlightChipProps): React.JSX.Element {
  return (
    <View style={styles.HighlightLatchRowLintel}>
      <View style={styles.HighlightLatchCircleEnclave}>
        <Text style={styles.HighlightLatchCheckMarkSigil}>✓</Text>
      </View>
      <Text style={styles.HighlightLatchTextVellum}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HighlightLatchRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minHeight: 32,
  },
  HighlightLatchCircleEnclave: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#1A2840',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HighlightLatchCheckMarkSigil: {
    fontSize: 9,
    color: colors.muted,
    fontWeight: '700',
  },
  HighlightLatchTextVellum: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    color: colors.text,
  },
});
