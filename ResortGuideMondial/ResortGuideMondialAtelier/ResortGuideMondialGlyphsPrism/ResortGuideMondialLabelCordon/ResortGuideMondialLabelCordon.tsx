import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialLabelCordonProps = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
};

export function ResortGuideMondialLabelCordon({
  label,
  backgroundColor = 'rgba(6,12,24,0.55)',
  textColor = resortGuideMondialColors.text,
  style,
}: ResortGuideMondialLabelCordonProps): React.JSX.Element {
  return (
    <View style={[styles.resortGuideMondialLabelCordonCrest, {backgroundColor}, style]}>
      <Text style={[styles.resortGuideMondialLabelCordonTextVellum, {color: textColor}]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialLabelCordonCrest: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  resortGuideMondialLabelCordonTextVellum: {
    fontSize: 9,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
