import React from 'react';
import {StyleSheet, View} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoStepLatticeProps = {
  count: number;
  activeIndex: number;
};

export function ResortMondialGuideCasinoStepLattice({
  count,
  activeIndex,
}: ResortMondialGuideCasinoStepLatticeProps): React.JSX.Element {
  return (
    <View style={styles.resortMondialGuideCasinoStepLatticeLattice}>
      {Array.from({length: count}).map((_, index) =>
        index === activeIndex ? (
          <View
            key={index}
            style={styles.resortMondialGuideCasinoStepLatticeActiveGleam}
          />
        ) : (
          <View
            key={index}
            style={styles.resortMondialGuideCasinoStepLatticeSpindle}
          />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoStepLatticeLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 56,
  },
  resortMondialGuideCasinoStepLatticeActiveGleam: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    backgroundColor: resortMondialGuideCasinoColors.accent,
  },
  resortMondialGuideCasinoStepLatticeSpindle: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: resortMondialGuideCasinoColors.outline,
  },
});
