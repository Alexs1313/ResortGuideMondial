import React from 'react';
import {StyleSheet, View} from 'react-native';

type ResortGuideMondialAmenityBellSigilProps = {
  size?: number;
};

export function ResortGuideMondialAmenityBellSigil({
  size = 22,
}: ResortGuideMondialAmenityBellSigilProps): React.JSX.Element {
  return (
    <View style={[styles.resortGuideMondialAmenityBellSigilBerth, {width: size, height: size}]}>
      <View
        style={[
          styles.resortGuideMondialAmenityBellSigilStemFacet,
          {
            width: size * 0.12,
            height: size * 0.75,
            borderRadius: size * 0.06,
          },
        ]}
      />
      <View
        style={[
          styles.resortGuideMondialAmenityBellSigilClapperFacet,
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
  resortGuideMondialAmenityBellSigilBerth: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialAmenityBellSigilStemFacet: {
    backgroundColor: '#C9A020',
    transform: [{rotate: '-18deg'}],
  },
  resortGuideMondialAmenityBellSigilClapperFacet: {
    position: 'absolute',
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: '#C9A020',
    transform: [{rotate: '32deg'}],
  },
});
