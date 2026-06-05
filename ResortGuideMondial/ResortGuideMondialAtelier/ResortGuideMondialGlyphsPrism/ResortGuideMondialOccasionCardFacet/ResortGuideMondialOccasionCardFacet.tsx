import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {EventItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialOccasionsFolio/ResortGuideMondialEventsData';
import {getEventHighlights} from '../../../ResortGuideMondialCompendium/ResortGuideMondialOccasionsFolio/ResortGuideMondialEventsData';
import {ResortGuideMondialLabelCordon} from '../ResortGuideMondialLabelCordon/ResortGuideMondialLabelCordon';

type ResortGuideMondialOccasionCardFacetProps = {
  item: EventItem;
  onPress: () => void;
};

export function ResortGuideMondialOccasionCardFacet({
  item,
  onPress,
}: ResortGuideMondialOccasionCardFacetProps): React.JSX.Element {
  const highlights = getEventHighlights(item);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.resortGuideMondialOccasionCardFacetChassis,
        pressed && styles.resortGuideMondialOccasionCardFacetPressedDim,
      ]}>
      <View style={styles.resortGuideMondialOccasionCardImageMantle}>
        <Image
          source={item.image}
          style={styles.resortGuideMondialOccasionCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(6,12,24,0.35)', 'rgba(6,12,24,0)']}
          style={styles.resortGuideMondialOccasionCardGradientVeil}
        />
        <ResortGuideMondialLabelCordon
          label={item.tabType.toUpperCase()}
          backgroundColor="rgba(6,12,24,0.85)"
          textColor="#C9A020"
          style={styles.resortGuideMondialOccasionBadgeLeftCordon}
        />
        <ResortGuideMondialLabelCordon
          label={item.capacity}
          backgroundColor="rgba(6,12,24,0.85)"
          textColor="#C9A020"
          style={styles.resortGuideMondialOccasionBadgeRightCordon}
        />
      </View>
      <View style={styles.resortGuideMondialOccasionCardBodyVellum}>
        <View style={styles.resortGuideMondialOccasionCardTitleRowLintel}>
          <Text style={styles.resortGuideMondialOccasionCardTitleFiligree}>{item.title}</Text>
          <Text style={styles.resortGuideMondialOccasionDecorLabelTracery}>{item.decorType}</Text>
        </View>
        <Text style={styles.resortGuideMondialOccasionCardDescriptionWeave} numberOfLines={3}>
          {item.concept}
        </Text>
        <View style={styles.resortGuideMondialOccasionTagsRowLattice}>
          {highlights.map(tag => (
            <ResortGuideMondialLabelCordon
              key={tag}
              label={tag}
              backgroundColor="#1A2840"
              textColor="#7A8BA8"
              style={styles.resortGuideMondialOccasionTagCrest}
            />
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialOccasionCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    overflow: 'hidden',
  },
  resortGuideMondialOccasionCardFacetPressedDim: {
    opacity: 0.92,
  },
  resortGuideMondialOccasionCardImageMantle: {
    height: 160,
    backgroundColor: '#0A1020',
  },
  resortGuideMondialOccasionCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortGuideMondialOccasionCardGradientVeil: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 56,
  },
  resortGuideMondialOccasionBadgeLeftCordon: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  resortGuideMondialOccasionBadgeRightCordon: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  resortGuideMondialOccasionCardBodyVellum: {
    padding: 16,
    gap: 10,
  },
  resortGuideMondialOccasionCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  resortGuideMondialOccasionCardTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 15,
    lineHeight: 22,
    color: '#F0EAD6',
  },
  resortGuideMondialOccasionDecorLabelTracery: {
    fontSize: 10,
    color: '#7A8BA8',
    marginTop: 2,
  },
  resortGuideMondialOccasionCardDescriptionWeave: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  resortGuideMondialOccasionTagsRowLattice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  resortGuideMondialOccasionTagCrest: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: '#1A2840',
  },
});
