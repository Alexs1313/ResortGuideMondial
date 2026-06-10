import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoLabelCordonProps = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
};

export function ResortMondialGuideCasinoLabelCordon({
  label,
  backgroundColor = 'rgba(6,12,24,0.55)',
  textColor = resortMondialGuideCasinoColors.text,
  style,
}: ResortMondialGuideCasinoLabelCordonProps): React.JSX.Element {
  return (
    <View style={[styles.resortMondialGuideCasinoLabelCordonCrest, {backgroundColor}, style]}>
      <Text style={[styles.resortMondialGuideCasinoLabelCordonTextVellum, {color: textColor}]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoLabelCordonCrest: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  resortMondialGuideCasinoLabelCordonTextVellum: {
    fontSize: 9,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
