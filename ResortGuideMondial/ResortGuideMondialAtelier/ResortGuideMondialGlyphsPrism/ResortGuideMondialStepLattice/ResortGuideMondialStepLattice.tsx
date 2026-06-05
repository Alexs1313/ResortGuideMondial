import React from 'react';
import {StyleSheet, View} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialStepLatticeProps = {
  count: number;
  activeIndex: number;
};

export function ResortGuideMondialStepLattice({
  count,
  activeIndex,
}: ResortGuideMondialStepLatticeProps): React.JSX.Element {
  return (
    <View style={styles.resortGuideMondialStepLatticeLattice}>
      {Array.from({length: count}).map((_, index) =>
        index === activeIndex ? (
          <View
            key={index}
            style={styles.resortGuideMondialStepLatticeActiveGleam}
          />
        ) : (
          <View
            key={index}
            style={styles.resortGuideMondialStepLatticeSpindle}
          />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialStepLatticeLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 56,
  },
  resortGuideMondialStepLatticeActiveGleam: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    backgroundColor: resortGuideMondialColors.accent,
  },
  resortGuideMondialStepLatticeSpindle: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: resortGuideMondialColors.outline,
  },
});
