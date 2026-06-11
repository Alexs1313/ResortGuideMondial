import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {GuideItem} from '../data/guide';
import {
  colors,
  fonts,
  gradient,
} from '../constants/theme';
import {useAdaptive} from '../hooks/useAdaptive';
import {BookmarkButton} from './BookmarkButton';

type VenueCardProps = {
  item: GuideItem;
  saved: boolean;
  onPress: () => void;
  onToggleSave: () => void;
};

export function VenueCard({
  item,
  saved,
  onPress,
  onToggleSave,
}: VenueCardProps): React.JSX.Element {
  const adaptive = useAdaptive();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.VenueCardFacetChassis,
        pressed && styles.VenueCardFacetPressedDim,
      ]}>
      <View
        style={[
          styles.VenueCardImageMantle,
          {height: adaptive.cardImageHeight},
        ]}>
        <Image
          source={item.image}
          style={styles.VenueCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={gradient.cardFade}
          style={styles.VenueCardGradientVeil}
        />
        <BookmarkButton
          saved={saved}
          onPress={onToggleSave}
          style={styles.VenueCardSaveBtnPortico}
        />
        <View style={styles.VenueCardTextOverlayEnclave}>
          <Text style={styles.VenueCardSubtitleWeave}>{item.subtitle}</Text>
          <View style={styles.VenueCardTitleRowLintel}>
            <Text style={styles.VenueCardTitleFiligree}>{item.name}</Text>
            <Text style={styles.VenueCardChevronSigil}>›</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  VenueCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.cardBg,
    overflow: 'hidden',
  },
  VenueCardFacetPressedDim: {
    opacity: 0.92,
  },
  VenueCardImageMantle: {
    backgroundColor: '#0A1020',
  },
  VenueCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  VenueCardGradientVeil: {
    ...StyleSheet.absoluteFillObject,
  },
  VenueCardSaveBtnPortico: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  VenueCardTextOverlayEnclave: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 14,
  },
  VenueCardSubtitleWeave: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: colors.accent,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  VenueCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  VenueCardTitleFiligree: {
    flex: 1,
    fontFamily: fonts.bold,
    fontSize: 22,
    lineHeight: 28,
    color: colors.text,
  },
  VenueCardChevronSigil: {
    fontSize: 22,
    color: colors.text,
    marginLeft: 8,
  },
});
