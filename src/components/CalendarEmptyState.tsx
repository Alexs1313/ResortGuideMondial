import React from 'react';
import {StyleSheet} from 'react-native';

import {tabIcons} from '../data/assets';
import {EmptyState} from './EmptyState';

export function CalendarEmptyState(): React.JSX.Element {
  return (
    <EmptyState
      icon={tabIcons.calendar}
      title="No Events Today"
      message="No activities planned for this date. Select another day to explore upcoming events."
      iconCircleSize={56}
      iconStyle={styles.ChronicleEmptyIconSigil}
    />
  );
}

const styles = StyleSheet.create({
  ChronicleEmptyIconSigil: {
    width: 22,
    height: 22,
    tintColor: '#7A8BA8',
  },
});
