import React from 'react';
import {StyleSheet, View} from 'react-native';

type TimeIconProps = {
  size?: number;
  color?: string;
};

export function TimeIcon({
  size = 11,
  color = '#7A8BA8',
}: TimeIconProps): React.JSX.Element {
  return (
    <View
      style={[
        styles.ChronoMiniSigilBerth,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: color,
        },
      ]}>
      <View
        style={[
          styles.ChronoMiniSigilHandFacet,
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
          styles.ChronoMiniSigilMinuteFacet,
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
  ChronoMiniSigilBerth: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChronoMiniSigilHandFacet: {
    position: 'absolute',
    width: 1,
  },
  ChronoMiniSigilMinuteFacet: {
    position: 'absolute',
    height: 1,
  },
});
