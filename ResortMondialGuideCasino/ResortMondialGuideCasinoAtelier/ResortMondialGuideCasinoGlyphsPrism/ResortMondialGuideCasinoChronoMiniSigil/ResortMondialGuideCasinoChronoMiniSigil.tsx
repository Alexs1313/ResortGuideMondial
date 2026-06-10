import React from 'react';
import {StyleSheet, View} from 'react-native';

type ResortMondialGuideCasinoChronoMiniSigilProps = {
  size?: number;
  color?: string;
};

export function ResortMondialGuideCasinoChronoMiniSigil({
  size = 11,
  color = '#7A8BA8',
}: ResortMondialGuideCasinoChronoMiniSigilProps): React.JSX.Element {
  return (
    <View
      style={[
        styles.resortMondialGuideCasinoChronoMiniSigilBerth,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: color,
        },
      ]}>
      <View
        style={[
          styles.resortMondialGuideCasinoChronoMiniSigilHandFacet,
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
          styles.resortMondialGuideCasinoChronoMiniSigilMinuteFacet,
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
  resortMondialGuideCasinoChronoMiniSigilBerth: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoChronoMiniSigilHandFacet: {
    position: 'absolute',
    width: 1,
  },
  resortMondialGuideCasinoChronoMiniSigilMinuteFacet: {
    position: 'absolute',
    height: 1,
  },
});
