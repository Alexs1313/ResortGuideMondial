import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {ServiceItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialAmenitiesFolio/ResortGuideMondialServicesData';
import {ResortGuideMondialAmenityBellSigil} from '../ResortGuideMondialAmenityBellSigil/ResortGuideMondialAmenityBellSigil';
import {ResortGuideMondialChronoMiniSigil} from '../ResortGuideMondialChronoMiniSigil/ResortGuideMondialChronoMiniSigil';
import {ResortGuideMondialGoldCtaPortico} from '../ResortGuideMondialGoldCtaPortico/ResortGuideMondialGoldCtaPortico';

type ResortGuideMondialAmenityCardFacetProps = {
  item: ServiceItem;
  onAdd: () => void;
};

export function ResortGuideMondialAmenityCardFacet({
  item,
  onAdd,
}: ResortGuideMondialAmenityCardFacetProps): React.JSX.Element {
  return (
    <View style={styles.resortGuideMondialAmenityCardFacetChassis}>
      <View style={styles.resortGuideMondialAmenityCardTitleRowLintel}>
        <ResortGuideMondialAmenityBellSigil />
        <Text style={styles.resortGuideMondialAmenityCardTitleFiligree}>{item.title}</Text>
      </View>
      <Text style={styles.resortGuideMondialAmenityCardDescriptionWeave}>{item.description}</Text>
      <View style={styles.resortGuideMondialAmenityCardFooterPlinth}>
        <View style={styles.resortGuideMondialAmenityAvailabilityRowLattice}>
          <ResortGuideMondialChronoMiniSigil />
          <Text style={styles.resortGuideMondialAmenityAvailabilityTextVellum}>
            {item.availability}
          </Text>
        </View>
        <ResortGuideMondialGoldCtaPortico
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
  resortGuideMondialAmenityCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    minHeight: 140,
  },
  resortGuideMondialAmenityCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  resortGuideMondialAmenityCardTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 15,
    lineHeight: 22.5,
    color: '#F0EAD6',
  },
  resortGuideMondialAmenityCardDescriptionWeave: {
    fontSize: 12,
    lineHeight: 19.5,
    color: '#7A8BA8',
    marginBottom: 12,
  },
  resortGuideMondialAmenityCardFooterPlinth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  resortGuideMondialAmenityAvailabilityRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  resortGuideMondialAmenityAvailabilityTextVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    flexShrink: 1,
  },
});
