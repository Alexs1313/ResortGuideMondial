import React from 'react';
import {StyleSheet} from 'react-native';

import {resortGuideMondialTabIcons} from '../../../ResortGuideMondialReliquary';
import {ResortGuideMondialEmptyHollow} from '../ResortGuideMondialEmptyHollow/ResortGuideMondialEmptyHollow';

export function ResortGuideMondialChronicleEmptyWrap(): React.JSX.Element {
  return (
    <ResortGuideMondialEmptyHollow
      icon={resortGuideMondialTabIcons.calendar}
      title="No Events Today"
      message="No activities planned for this date. Select another day to explore upcoming events."
      iconCircleSize={56}
      iconStyle={styles.resortGuideMondialChronicleEmptyIconSigil}
    />
  );
}

const styles = StyleSheet.create({
  resortGuideMondialChronicleEmptyIconSigil: {
    width: 22,
    height: 22,
    tintColor: '#7A8BA8',
  },
});
