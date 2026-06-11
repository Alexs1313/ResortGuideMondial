import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {ServiceItem} from '../data/services';
import {AmenityBellIcon} from './AmenityBellIcon';
import {TimeIcon} from './TimeIcon';
import {fonts} from '../constants/theme';
import {GoldButton} from './GoldButton';

type AmenityCardProps = {
  item: ServiceItem;
  onAdd: () => void;
};

export function AmenityCard({
  item,
  onAdd,
}: AmenityCardProps): React.JSX.Element {
  return (
    <View style={styles.AmenityCardFacetChassis}>
      <View style={styles.AmenityCardTitleRowLintel}>
        <AmenityBellIcon />
        <Text style={styles.AmenityCardTitleFiligree}>{item.title}</Text>
      </View>
      <Text style={styles.AmenityCardDescriptionWeave}>{item.description}</Text>
      <View style={styles.AmenityCardFooterPlinth}>
        <View style={styles.AmenityAvailabilityRowLattice}>
          <TimeIcon />
          <Text style={styles.AmenityAvailabilityTextVellum}>
            {item.availability}
          </Text>
        </View>
        <GoldButton
          label="Add Service"
          onPress={onAdd}
          variant="compactAtelier"
          accessibilityLabel={`Add ${item.title}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AmenityCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    minHeight: 140,
  },
  AmenityCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  AmenityCardTitleFiligree: {
    flex: 1,
    fontFamily: fonts.bold,
    fontSize: 15,
    lineHeight: 22.5,
    color: '#F0EAD6',
  },
  AmenityCardDescriptionWeave: {
    fontSize: 12,
    lineHeight: 19.5,
    color: '#7A8BA8',
    marginBottom: 12,
  },
  AmenityCardFooterPlinth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  AmenityAvailabilityRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  AmenityAvailabilityTextVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    flexShrink: 1,
  },
});
