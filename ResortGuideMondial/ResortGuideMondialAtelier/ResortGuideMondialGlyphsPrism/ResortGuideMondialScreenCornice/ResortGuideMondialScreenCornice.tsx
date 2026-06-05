import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialScreenCorniceProps = {
  eyebrow: string;
  title: string;
  trailing?: React.ReactNode;
  style?: ViewStyle;
};

export function ResortGuideMondialScreenCornice({
  eyebrow,
  title,
  trailing,
  style,
}: ResortGuideMondialScreenCorniceProps): React.JSX.Element {
  return (
    <View style={[styles.resortGuideMondialScreenCorniceCornice, style]}>
      <View>
        <Text style={styles.resortGuideMondialScreenCorniceEmblem}>{eyebrow}</Text>
        <Text style={styles.resortGuideMondialScreenCorniceFiligree}>{title}</Text>
      </View>
      {trailing}
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialScreenCorniceCornice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 8,
  },
  resortGuideMondialScreenCorniceEmblem: {
    fontFamily: 'Cinzel-Regular',
    fontSize: 9,
    letterSpacing: 2.7,
    color: resortGuideMondialColors.accent,
    textTransform: 'uppercase',
  },
  resortGuideMondialScreenCorniceFiligree: {
    marginTop: 2,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: resortGuideMondialColors.text,
  },
});
