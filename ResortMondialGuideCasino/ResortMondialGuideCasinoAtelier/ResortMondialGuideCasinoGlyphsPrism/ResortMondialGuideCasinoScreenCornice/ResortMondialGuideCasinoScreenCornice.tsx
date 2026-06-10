import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoScreenCorniceProps = {
  eyebrow: string;
  title: string;
  trailing?: React.ReactNode;
  style?: ViewStyle;
};

export function ResortMondialGuideCasinoScreenCornice({
  eyebrow,
  title,
  trailing,
  style,
}: ResortMondialGuideCasinoScreenCorniceProps): React.JSX.Element {
  return (
    <View style={[styles.resortMondialGuideCasinoScreenCorniceCornice, style]}>
      <View>
        <Text style={styles.resortMondialGuideCasinoScreenCorniceEmblem}>{eyebrow}</Text>
        <Text style={styles.resortMondialGuideCasinoScreenCorniceFiligree}>{title}</Text>
      </View>
      {trailing}
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoScreenCorniceCornice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 8,
  },
  resortMondialGuideCasinoScreenCorniceEmblem: {
    fontFamily: 'Cinzel-Regular',
    fontSize: 9,
    letterSpacing: 2.7,
    color: resortMondialGuideCasinoColors.accent,
    textTransform: 'uppercase',
  },
  resortMondialGuideCasinoScreenCorniceFiligree: {
    marginTop: 2,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 33,
    color: resortMondialGuideCasinoColors.text,
  },
});
