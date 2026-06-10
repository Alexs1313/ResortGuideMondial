import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {EventItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoOccasionsFolio/ResortMondialGuideCasinoEventsData';
import {getEventHighlights} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoOccasionsFolio/ResortMondialGuideCasinoEventsData';
import {ResortMondialGuideCasinoLabelCordon} from '../ResortMondialGuideCasinoLabelCordon/ResortMondialGuideCasinoLabelCordon';

type ResortMondialGuideCasinoOccasionCardFacetProps = {
  item: EventItem;
  onPress: () => void;
};

export function ResortMondialGuideCasinoOccasionCardFacet({
  item,
  onPress,
}: ResortMondialGuideCasinoOccasionCardFacetProps): React.JSX.Element {
  const highlights = getEventHighlights(item);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.resortMondialGuideCasinoOccasionCardFacetChassis,
        pressed && styles.resortMondialGuideCasinoOccasionCardFacetPressedDim,
      ]}>
      <View style={styles.resortMondialGuideCasinoOccasionCardImageMantle}>
        <Image
          source={item.image}
          style={styles.resortMondialGuideCasinoOccasionCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(6,12,24,0.35)', 'rgba(6,12,24,0)']}
          style={styles.resortMondialGuideCasinoOccasionCardGradientVeil}
        />
        <ResortMondialGuideCasinoLabelCordon
          label={item.tabType.toUpperCase()}
          backgroundColor="rgba(6,12,24,0.85)"
          textColor="#C9A020"
          style={styles.resortMondialGuideCasinoOccasionBadgeLeftCordon}
        />
        <ResortMondialGuideCasinoLabelCordon
          label={item.capacity}
          backgroundColor="rgba(6,12,24,0.85)"
          textColor="#C9A020"
          style={styles.resortMondialGuideCasinoOccasionBadgeRightCordon}
        />
      </View>
      <View style={styles.resortMondialGuideCasinoOccasionCardBodyVellum}>
        <View style={styles.resortMondialGuideCasinoOccasionCardTitleRowLintel}>
          <Text style={styles.resortMondialGuideCasinoOccasionCardTitleFiligree}>{item.title}</Text>
          <Text style={styles.resortMondialGuideCasinoOccasionDecorLabelTracery}>{item.decorType}</Text>
        </View>
        <Text style={styles.resortMondialGuideCasinoOccasionCardDescriptionWeave} numberOfLines={3}>
          {item.concept}
        </Text>
        <View style={styles.resortMondialGuideCasinoOccasionTagsRowLattice}>
          {highlights.map(tag => (
            <ResortMondialGuideCasinoLabelCordon
              key={tag}
              label={tag}
              backgroundColor="#1A2840"
              textColor="#7A8BA8"
              style={styles.resortMondialGuideCasinoOccasionTagCrest}
            />
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoOccasionCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    overflow: 'hidden',
  },
  resortMondialGuideCasinoOccasionCardFacetPressedDim: {
    opacity: 0.92,
  },
  resortMondialGuideCasinoOccasionCardImageMantle: {
    height: 160,
    backgroundColor: '#0A1020',
  },
  resortMondialGuideCasinoOccasionCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortMondialGuideCasinoOccasionCardGradientVeil: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 56,
  },
  resortMondialGuideCasinoOccasionBadgeLeftCordon: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  resortMondialGuideCasinoOccasionBadgeRightCordon: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  resortMondialGuideCasinoOccasionCardBodyVellum: {
    padding: 16,
    gap: 10,
  },
  resortMondialGuideCasinoOccasionCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  resortMondialGuideCasinoOccasionCardTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 15,
    lineHeight: 22,
    color: '#F0EAD6',
  },
  resortMondialGuideCasinoOccasionDecorLabelTracery: {
    fontSize: 10,
    color: '#7A8BA8',
    marginTop: 2,
  },
  resortMondialGuideCasinoOccasionCardDescriptionWeave: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  resortMondialGuideCasinoOccasionTagsRowLattice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  resortMondialGuideCasinoOccasionTagCrest: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: '#1A2840',
  },
});
