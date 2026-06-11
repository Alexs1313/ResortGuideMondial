import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type DetailSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function DetailSection({
  title,
  children,
}: DetailSectionProps): React.JSX.Element {
  return (
    <View style={styles.DetailSectionCornicePlinth}>
      <Text style={styles.DetailSectionCorniceTitleFiligree}>{title}</Text>
      <View style={styles.DetailSectionCorniceCardFacet}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  DetailSectionCornicePlinth: {
    gap: 8,
  },
  DetailSectionCorniceTitleFiligree: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: '#C9A020',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  DetailSectionCorniceCardFacet: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    gap: 10,
  },
});
