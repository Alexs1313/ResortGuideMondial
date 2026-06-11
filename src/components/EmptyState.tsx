import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {colors, fonts} from '../constants/theme';
import {useAdaptive} from '../hooks/useAdaptive';

type EmptyStateProps = {
  icon: ImageSourcePropType;
  title: string;
  message: string;
  iconCircleSize?: number;
  iconStyle?: ImageStyle;
};

export function EmptyState({
  icon,
  title,
  message,
  iconCircleSize,
  iconStyle,
}: EmptyStateProps): React.JSX.Element {
  const adaptive = useAdaptive();
  const circleSize = iconCircleSize ?? adaptive.emptyIconSize;

  return (
    <View
      style={[
        styles.EmptyHollowWrapHollow,
        {paddingVertical: adaptive.emptyPaddingVertical},
      ]}>
      <View
        style={[
          styles.EmptyHollowIconEnclave,
          {
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
          },
        ]}>
        <Image
          source={icon}
          style={[styles.EmptyHollowIconSigil, iconStyle]}
        />
      </View>
      <Text style={styles.EmptyHollowTitleFiligree}>{title}</Text>
      <Text style={styles.EmptyHollowTextWeave}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  EmptyHollowWrapHollow: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  EmptyHollowIconEnclave: {
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  EmptyHollowIconSigil: {
    width: 24,
    height: 24,
    tintColor: colors.muted,
  },
  EmptyHollowTitleFiligree: {
    fontFamily: fonts.bold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  EmptyHollowTextWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: colors.muted,
    textAlign: 'center',
  },
});
