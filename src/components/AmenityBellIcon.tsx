import React from 'react';
import {StyleSheet, View} from 'react-native';

type AmenityBellIconProps = {
  size?: number;
};

export function AmenityBellIcon({
  size = 22,
}: AmenityBellIconProps): React.JSX.Element {
  return (
    <View style={[styles.AmenityBellSigilBerth, {width: size, height: size}]}>
      <View
        style={[
          styles.AmenityBellSigilStemFacet,
          {
            width: size * 0.12,
            height: size * 0.75,
            borderRadius: size * 0.06,
          },
        ]}
      />
      <View
        style={[
          styles.AmenityBellSigilClapperFacet,
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
  AmenityBellSigilBerth: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  AmenityBellSigilStemFacet: {
    backgroundColor: '#C9A020',
    transform: [{rotate: '-18deg'}],
  },
  AmenityBellSigilClapperFacet: {
    position: 'absolute',
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: '#C9A020',
    transform: [{rotate: '32deg'}],
  },
});
