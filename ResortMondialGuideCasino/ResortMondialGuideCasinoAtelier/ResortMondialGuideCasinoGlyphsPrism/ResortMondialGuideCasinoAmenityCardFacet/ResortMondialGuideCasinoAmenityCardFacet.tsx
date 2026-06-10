import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {ServiceItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoAmenitiesFolio/ResortMondialGuideCasinoServicesData';
import {ResortMondialGuideCasinoAmenityBellSigil} from '../ResortMondialGuideCasinoAmenityBellSigil/ResortMondialGuideCasinoAmenityBellSigil';
import {ResortMondialGuideCasinoChronoMiniSigil} from '../ResortMondialGuideCasinoChronoMiniSigil/ResortMondialGuideCasinoChronoMiniSigil';
import {ResortMondialGuideCasinoGoldCtaPortico} from '../ResortMondialGuideCasinoGoldCtaPortico/ResortMondialGuideCasinoGoldCtaPortico';

type ResortMondialGuideCasinoAmenityCardFacetProps = {
  item: ServiceItem;
  onAdd: () => void;
};

export function ResortMondialGuideCasinoAmenityCardFacet({
  item,
  onAdd,
}: ResortMondialGuideCasinoAmenityCardFacetProps): React.JSX.Element {
  return (
    <View style={styles.resortMondialGuideCasinoAmenityCardFacetChassis}>
      <View style={styles.resortMondialGuideCasinoAmenityCardTitleRowLintel}>
        <ResortMondialGuideCasinoAmenityBellSigil />
        <Text style={styles.resortMondialGuideCasinoAmenityCardTitleFiligree}>{item.title}</Text>
      </View>
      <Text style={styles.resortMondialGuideCasinoAmenityCardDescriptionWeave}>{item.description}</Text>
      <View style={styles.resortMondialGuideCasinoAmenityCardFooterPlinth}>
        <View style={styles.resortMondialGuideCasinoAmenityAvailabilityRowLattice}>
          <ResortMondialGuideCasinoChronoMiniSigil />
          <Text style={styles.resortMondialGuideCasinoAmenityAvailabilityTextVellum}>
            {item.availability}
          </Text>
        </View>
        <ResortMondialGuideCasinoGoldCtaPortico
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
  resortMondialGuideCasinoAmenityCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    minHeight: 140,
  },
  resortMondialGuideCasinoAmenityCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  resortMondialGuideCasinoAmenityCardTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 15,
    lineHeight: 22.5,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoAmenityCardDescriptionWeave: {
    fontSize: 12,
    lineHeight: 19.5,
    color: '#7A8BA8',
    marginBottom: 12,
  },
  resortMondialGuideCasinoAmenityCardFooterPlinth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  resortMondialGuideCasinoAmenityAvailabilityRowLattice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  resortMondialGuideCasinoAmenityAvailabilityTextVellum: {
    fontSize: 12,
    lineHeight: 16,
    color: '#7A8BA8',
    flexShrink: 1,
  },
});
