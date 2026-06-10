import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoEmptyHollowProps = {
  icon: ImageSourcePropType;
  title: string;
  message: string;
  iconCircleSize?: number;
  iconStyle?: ImageStyle;
};

export function ResortMondialGuideCasinoEmptyHollow({
  icon,
  title,
  message,
  iconCircleSize = 64,
  iconStyle,
}: ResortMondialGuideCasinoEmptyHollowProps): React.JSX.Element {
  return (
    <View style={styles.resortMondialGuideCasinoEmptyHollowWrapHollow}>
      <View
        style={[
          styles.resortMondialGuideCasinoEmptyHollowIconEnclave,
          {
            width: iconCircleSize,
            height: iconCircleSize,
            borderRadius: iconCircleSize / 2,
          },
        ]}>
        <Image
          source={icon}
          style={[styles.resortMondialGuideCasinoEmptyHollowIconSigil, iconStyle]}
        />
      </View>
      <Text style={styles.resortMondialGuideCasinoEmptyHollowTitleFiligree}>{title}</Text>
      <Text style={styles.resortMondialGuideCasinoEmptyHollowTextWeave}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoEmptyHollowWrapHollow: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 80,
  },
  resortMondialGuideCasinoEmptyHollowIconEnclave: {
    borderWidth: 1,
    borderColor: resortMondialGuideCasinoColors.outline,
    backgroundColor: resortMondialGuideCasinoColors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resortMondialGuideCasinoEmptyHollowIconSigil: {
    width: 24,
    height: 24,
    tintColor: resortMondialGuideCasinoColors.muted,
  },
  resortMondialGuideCasinoEmptyHollowTitleFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: resortMondialGuideCasinoColors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  resortMondialGuideCasinoEmptyHollowTextWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: resortMondialGuideCasinoColors.muted,
    textAlign: 'center',
  },
});
