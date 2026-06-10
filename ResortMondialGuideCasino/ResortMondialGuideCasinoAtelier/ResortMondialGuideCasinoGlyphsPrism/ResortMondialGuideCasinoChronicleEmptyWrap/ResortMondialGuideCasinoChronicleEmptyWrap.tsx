import React from 'react';
import {StyleSheet} from 'react-native';

import {resortMondialGuideCasinoTabIcons} from '../../../ResortMondialGuideCasinoReliquary';
import {ResortMondialGuideCasinoEmptyHollow} from '../ResortMondialGuideCasinoEmptyHollow/ResortMondialGuideCasinoEmptyHollow';

export function ResortMondialGuideCasinoChronicleEmptyWrap(): React.JSX.Element {
  return (
    <ResortMondialGuideCasinoEmptyHollow
      icon={resortMondialGuideCasinoTabIcons.calendar}
      title="No Events Today"
      message="No activities planned for this date. Select another day to explore upcoming events."
      iconCircleSize={56}
      iconStyle={styles.resortMondialGuideCasinoChronicleEmptyIconSigil}
    />
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoChronicleEmptyIconSigil: {
    width: 22,
    height: 22,
    tintColor: '#7A8BA8',
  },
});
