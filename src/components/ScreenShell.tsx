import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {colors, fonts} from '../constants/theme';
import {useAdaptive} from '../hooks/useAdaptive';

type ScreenShellProps = {
  eyebrow: string;
  title: string;
  trailing?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function ScreenShell({
  eyebrow,
  title,
  trailing,
  style,
}: ScreenShellProps): React.JSX.Element {
  const adaptive = useAdaptive();

  return (
    <View style={[styles.ScreenCorniceCornice, style]}>
      <View>
        <Text style={styles.ScreenCorniceEmblem}>{eyebrow}</Text>
        <Text
          style={[
            styles.ScreenCorniceFiligree,
            {fontSize: adaptive.screenTitleSize, lineHeight: adaptive.screenTitleSize + 11},
          ]}>
          {title}
        </Text>
      </View>
      {trailing}
    </View>
  );
}

const styles = StyleSheet.create({
  ScreenCorniceCornice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 8,
  },
  ScreenCorniceEmblem: {
    fontFamily: fonts.regular,
    fontSize: 9,
    letterSpacing: 2.7,
    color: colors.accent,
    textTransform: 'uppercase',
  },
  ScreenCorniceFiligree: {
    marginTop: 2,
    fontFamily: fonts.bold,
    color: colors.text,
  },
});
