import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ResortMondialGuideCasinoDetailSectionCorniceProps = {
  title: string;
  children: React.ReactNode;
};

export function ResortMondialGuideCasinoDetailSectionCornice({
  title,
  children,
}: ResortMondialGuideCasinoDetailSectionCorniceProps): React.JSX.Element {
  return (
    <View style={styles.resortMondialGuideCasinoDetailSectionCornicePlinth}>
      <Text style={styles.resortMondialGuideCasinoDetailSectionCorniceTitleFiligree}>{title}</Text>
      <View style={styles.resortMondialGuideCasinoDetailSectionCorniceCardFacet}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoDetailSectionCornicePlinth: {
    gap: 8,
  },
  resortMondialGuideCasinoDetailSectionCorniceTitleFiligree: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  resortMondialGuideCasinoDetailSectionCorniceCardFacet: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    gap: 10,
  },
});
