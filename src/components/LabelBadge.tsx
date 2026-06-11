import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {colors} from '../constants/theme';

type LabelBadgeProps = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
};

export function LabelBadge({
  label,
  backgroundColor = 'rgba(6,12,24,0.55)',
  textColor = colors.text,
  style,
}: LabelBadgeProps): React.JSX.Element {
  return (
    <View style={[styles.LabelCordonCrest, {backgroundColor}, style]}>
      <Text style={[styles.LabelCordonTextVellum, {color: textColor}]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  LabelCordonCrest: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  LabelCordonTextVellum: {
    fontSize: 9,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
