import React from 'react';
import {StyleSheet, View} from 'react-native';

type ResortGuideMondialChronoMiniSigilProps = {
  size?: number;
  color?: string;
};

export function ResortGuideMondialChronoMiniSigil({
  size = 11,
  color = '#7A8BA8',
}: ResortGuideMondialChronoMiniSigilProps): React.JSX.Element {
  return (
    <View
      style={[
        styles.resortGuideMondialChronoMiniSigilBerth,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: color,
        },
      ]}>
      <View
        style={[
          styles.resortGuideMondialChronoMiniSigilHandFacet,
          {
            height: size * 0.35,
            backgroundColor: color,
            top: size * 0.2,
            left: size / 2 - 0.5,
          },
        ]}
      />
      <View
        style={[
          styles.resortGuideMondialChronoMiniSigilMinuteFacet,
          {
            width: size * 0.28,
            backgroundColor: color,
            top: size * 0.48,
            left: size / 2 - 0.5,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialChronoMiniSigilBerth: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialChronoMiniSigilHandFacet: {
    position: 'absolute',
    width: 1,
  },
  resortGuideMondialChronoMiniSigilMinuteFacet: {
    position: 'absolute',
    height: 1,
  },
});
