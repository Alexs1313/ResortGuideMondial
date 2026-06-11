import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {EventItem} from '../data/events';
import {getEventHighlights} from '../data/events';
import {fonts} from '../constants/theme';
import {useAdaptive} from '../hooks/useAdaptive';
import {LabelBadge} from './LabelBadge';

type EventCardProps = {
  item: EventItem;
  onPress: () => void;
};

export function EventCard({
  item,
  onPress,
}: EventCardProps): React.JSX.Element {
  const adaptive = useAdaptive();
  const highlights = getEventHighlights(item);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.OccasionCardFacetChassis,
        pressed && styles.OccasionCardFacetPressedDim,
      ]}>
      <View
        style={[
          styles.OccasionCardImageMantle,
          {height: adaptive.eventCardImageHeight},
        ]}>
        <Image
          source={item.image}
          style={styles.OccasionCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(6,12,24,0.35)', 'rgba(6,12,24,0)']}
          style={styles.OccasionCardGradientVeil}
        />
        <LabelBadge
          label={item.tabType.toUpperCase()}
          backgroundColor="rgba(6,12,24,0.85)"
          textColor="#C9A020"
          style={styles.OccasionBadgeLeftCordon}
        />
        <LabelBadge
          label={item.capacity}
          backgroundColor="rgba(6,12,24,0.85)"
          textColor="#C9A020"
          style={styles.OccasionBadgeRightCordon}
        />
      </View>
      <View style={styles.OccasionCardBodyVellum}>
        <View style={styles.OccasionCardTitleRowLintel}>
          <Text style={styles.OccasionCardTitleFiligree}>{item.title}</Text>
          <Text style={styles.OccasionDecorLabelTracery}>{item.decorType}</Text>
        </View>
        <Text style={styles.OccasionCardDescriptionWeave} numberOfLines={3}>
          {item.concept}
        </Text>
        <View style={styles.OccasionTagsRowLattice}>
          {highlights.map(tag => (
            <LabelBadge
              key={tag}
              label={tag}
              backgroundColor="#1A2840"
              textColor="#7A8BA8"
              style={styles.OccasionTagCrest}
            />
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  OccasionCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2C48',
    backgroundColor: '#0D1527',
    overflow: 'hidden',
  },
  OccasionCardFacetPressedDim: {
    opacity: 0.92,
  },
  OccasionCardImageMantle: {
    backgroundColor: '#0A1020',
  },
  OccasionCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  OccasionCardGradientVeil: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 56,
  },
  OccasionBadgeLeftCordon: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  OccasionBadgeRightCordon: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(6,12,24,0.85)',
  },
  OccasionCardBodyVellum: {
    padding: 16,
    gap: 10,
  },
  OccasionCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  OccasionCardTitleFiligree: {
    flex: 1,
    fontFamily: fonts.bold,
    fontSize: 15,
    lineHeight: 22,
    color: '#F0EAD6',
  },
  OccasionDecorLabelTracery: {
    fontSize: 10,
    color: '#7A8BA8',
    marginTop: 2,
  },
  OccasionCardDescriptionWeave: {
    fontSize: 12,
    lineHeight: 20,
    color: '#7A8BA8',
  },
  OccasionTagsRowLattice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  OccasionTagCrest: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: '#1A2840',
  },
});
