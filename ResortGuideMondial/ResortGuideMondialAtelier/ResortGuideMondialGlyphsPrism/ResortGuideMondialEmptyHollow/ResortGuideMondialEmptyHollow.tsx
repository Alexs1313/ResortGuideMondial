import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialEmptyHollowProps = {
  icon: ImageSourcePropType;
  title: string;
  message: string;
  iconCircleSize?: number;
  iconStyle?: ImageStyle;
};

export function ResortGuideMondialEmptyHollow({
  icon,
  title,
  message,
  iconCircleSize = 64,
  iconStyle,
}: ResortGuideMondialEmptyHollowProps): React.JSX.Element {
  return (
    <View style={styles.resortGuideMondialEmptyHollowWrapHollow}>
      <View
        style={[
          styles.resortGuideMondialEmptyHollowIconEnclave,
          {
            width: iconCircleSize,
            height: iconCircleSize,
            borderRadius: iconCircleSize / 2,
          },
        ]}>
        <Image
          source={icon}
          style={[styles.resortGuideMondialEmptyHollowIconSigil, iconStyle]}
        />
      </View>
      <Text style={styles.resortGuideMondialEmptyHollowTitleFiligree}>{title}</Text>
      <Text style={styles.resortGuideMondialEmptyHollowTextWeave}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialEmptyHollowWrapHollow: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 80,
  },
  resortGuideMondialEmptyHollowIconEnclave: {
    borderWidth: 1,
    borderColor: resortGuideMondialColors.outline,
    backgroundColor: resortGuideMondialColors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resortGuideMondialEmptyHollowIconSigil: {
    width: 24,
    height: 24,
    tintColor: resortGuideMondialColors.muted,
  },
  resortGuideMondialEmptyHollowTitleFiligree: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: resortGuideMondialColors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  resortGuideMondialEmptyHollowTextWeave: {
    fontSize: 14,
    lineHeight: 23,
    color: resortGuideMondialColors.muted,
    textAlign: 'center',
  },
});
