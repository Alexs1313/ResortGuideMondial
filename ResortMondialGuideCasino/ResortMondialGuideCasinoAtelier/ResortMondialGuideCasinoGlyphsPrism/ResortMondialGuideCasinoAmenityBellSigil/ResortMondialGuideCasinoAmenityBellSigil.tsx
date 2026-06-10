import React from 'react';
import {StyleSheet, View} from 'react-native';

type ResortMondialGuideCasinoAmenityBellSigilProps = {
  size?: number;
};

export function ResortMondialGuideCasinoAmenityBellSigil({
  size = 22,
}: ResortMondialGuideCasinoAmenityBellSigilProps): React.JSX.Element {
  return (
    <View style={[styles.resortMondialGuideCasinoAmenityBellSigilBerth, {width: size, height: size}]}>
      <View
        style={[
          styles.resortMondialGuideCasinoAmenityBellSigilStemFacet,
          {
            width: size * 0.12,
            height: size * 0.75,
            borderRadius: size * 0.06,
          },
        ]}
      />
      <View
        style={[
          styles.resortMondialGuideCasinoAmenityBellSigilClapperFacet,
          {
            width: size * 0.55,
            height: size * 0.22,
            borderTopRightRadius: size * 0.2,
            top: size * 0.12,
            left: size * 0.28,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoAmenityBellSigilBerth: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoAmenityBellSigilStemFacet: {
    backgroundColor: '#C9A020',
    transform: [{rotate: '-18deg'}],
  },
  resortMondialGuideCasinoAmenityBellSigilClapperFacet: {
    position: 'absolute',
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: '#C9A020',
    transform: [{rotate: '32deg'}],
  },
});
