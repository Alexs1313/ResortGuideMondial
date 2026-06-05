import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ResortGuideMondialDetailSectionCorniceProps = {
  title: string;
  children: React.ReactNode;
};

export function ResortGuideMondialDetailSectionCornice({
  title,
  children,
}: ResortGuideMondialDetailSectionCorniceProps): React.JSX.Element {
  return (
    <View style={styles.resortGuideMondialDetailSectionCornicePlinth}>
      <Text style={styles.resortGuideMondialDetailSectionCorniceTitleFiligree}>{title}</Text>
      <View style={styles.resortGuideMondialDetailSectionCorniceCardFacet}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialDetailSectionCornicePlinth: {
    gap: 8,
  },
  resortGuideMondialDetailSectionCorniceTitleFiligree: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  resortGuideMondialDetailSectionCorniceCardFacet: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    gap: 10,
  },
});
