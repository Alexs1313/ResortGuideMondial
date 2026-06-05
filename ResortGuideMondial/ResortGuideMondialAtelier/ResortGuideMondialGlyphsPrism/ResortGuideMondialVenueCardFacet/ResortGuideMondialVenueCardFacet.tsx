import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {GuideItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialVenueFolio/ResortGuideMondialGuideData';
import {
  resortGuideMondialColors,
  resortGuideMondialGradient,
} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';
import {ResortGuideMondialBookmarkLatch} from '../ResortGuideMondialBookmarkLatch/ResortGuideMondialBookmarkLatch';

type ResortGuideMondialVenueCardFacetProps = {
  item: GuideItem;
  saved: boolean;
  onPress: () => void;
  onToggleSave: () => void;
};

export function ResortGuideMondialVenueCardFacet({
  item,
  saved,
  onPress,
  onToggleSave,
}: ResortGuideMondialVenueCardFacetProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.resortGuideMondialVenueCardFacetChassis,
        pressed && styles.resortGuideMondialVenueCardFacetPressedDim,
      ]}>
      <View style={styles.resortGuideMondialVenueCardImageMantle}>
        <Image
          source={item.image}
          style={styles.resortGuideMondialVenueCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={resortGuideMondialGradient.cardFade}
          style={styles.resortGuideMondialVenueCardGradientVeil}
        />
        <ResortGuideMondialBookmarkLatch
          saved={saved}
          onPress={onToggleSave}
          style={styles.resortGuideMondialVenueCardSaveBtnPortico}
        />
        <View style={styles.resortGuideMondialVenueCardTextOverlayEnclave}>
          <Text style={styles.resortGuideMondialVenueCardSubtitleWeave}>{item.subtitle}</Text>
          <View style={styles.resortGuideMondialVenueCardTitleRowLintel}>
            <Text style={styles.resortGuideMondialVenueCardTitleFiligree}>{item.name}</Text>
            <Text style={styles.resortGuideMondialVenueCardChevronSigil}>›</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialVenueCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: resortGuideMondialColors.outline,
    backgroundColor: resortGuideMondialColors.cardBg,
    overflow: 'hidden',
  },
  resortGuideMondialVenueCardFacetPressedDim: {
    opacity: 0.92,
  },
  resortGuideMondialVenueCardImageMantle: {
    height: 184,
    backgroundColor: '#0A1020',
  },
  resortGuideMondialVenueCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortGuideMondialVenueCardGradientVeil: {
    ...StyleSheet.absoluteFillObject,
  },
  resortGuideMondialVenueCardSaveBtnPortico: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  resortGuideMondialVenueCardTextOverlayEnclave: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 14,
  },
  resortGuideMondialVenueCardSubtitleWeave: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortGuideMondialColors.accent,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  resortGuideMondialVenueCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resortGuideMondialVenueCardTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 28,
    color: resortGuideMondialColors.text,
  },
  resortGuideMondialVenueCardChevronSigil: {
    fontSize: 22,
    color: resortGuideMondialColors.text,
    marginLeft: 8,
  },
});
