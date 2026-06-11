import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../constants/theme';

type StepIndicatorProps = {
  count: number;
  activeIndex: number;
};

export function StepIndicator({
  count,
  activeIndex,
}: StepIndicatorProps): React.JSX.Element {
  return (
    <View style={styles.StepLatticeLattice}>
      {Array.from({length: count}).map((_, index) =>
        index === activeIndex ? (
          <View
            key={index}
            style={styles.StepLatticeActiveGleam}
          />
        ) : (
          <View
            key={index}
            style={styles.StepLatticeSpindle}
          />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  StepLatticeLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 56,
  },
  StepLatticeActiveGleam: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    backgroundColor: colors.accent,
  },
  StepLatticeSpindle: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: colors.outline,
  },
});
