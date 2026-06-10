import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {GuideItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoVenueFolio/ResortMondialGuideCasinoGuideData';
import {
  resortMondialGuideCasinoColors,
  resortMondialGuideCasinoGradient,
} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';
import {ResortMondialGuideCasinoBookmarkLatch} from '../ResortMondialGuideCasinoBookmarkLatch/ResortMondialGuideCasinoBookmarkLatch';

type ResortMondialGuideCasinoVenueCardFacetProps = {
  item: GuideItem;
  saved: boolean;
  onPress: () => void;
  onToggleSave: () => void;
};

export function ResortMondialGuideCasinoVenueCardFacet({
  item,
  saved,
  onPress,
  onToggleSave,
}: ResortMondialGuideCasinoVenueCardFacetProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.resortMondialGuideCasinoVenueCardFacetChassis,
        pressed && styles.resortMondialGuideCasinoVenueCardFacetPressedDim,
      ]}>
      <View style={styles.resortMondialGuideCasinoVenueCardImageMantle}>
        <Image
          source={item.image}
          style={styles.resortMondialGuideCasinoVenueCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={resortMondialGuideCasinoGradient.cardFade}
          style={styles.resortMondialGuideCasinoVenueCardGradientVeil}
        />
        <ResortMondialGuideCasinoBookmarkLatch
          saved={saved}
          onPress={onToggleSave}
          style={styles.resortMondialGuideCasinoVenueCardSaveBtnPortico}
        />
        <View style={styles.resortMondialGuideCasinoVenueCardTextOverlayEnclave}>
          <Text style={styles.resortMondialGuideCasinoVenueCardSubtitleWeave}>{item.subtitle}</Text>
          <View style={styles.resortMondialGuideCasinoVenueCardTitleRowLintel}>
            <Text style={styles.resortMondialGuideCasinoVenueCardTitleFiligree}>{item.name}</Text>
            <Text style={styles.resortMondialGuideCasinoVenueCardChevronSigil}>›</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoVenueCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: resortMondialGuideCasinoColors.outline,
    backgroundColor: resortMondialGuideCasinoColors.cardBg,
    overflow: 'hidden',
  },
  resortMondialGuideCasinoVenueCardFacetPressedDim: {
    opacity: 0.92,
  },
  resortMondialGuideCasinoVenueCardImageMantle: {
    height: 184,
    backgroundColor: '#0A1020',
  },
  resortMondialGuideCasinoVenueCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortMondialGuideCasinoVenueCardGradientVeil: {
    ...StyleSheet.absoluteFillObject,
  },
  resortMondialGuideCasinoVenueCardSaveBtnPortico: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  resortMondialGuideCasinoVenueCardTextOverlayEnclave: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 14,
  },
  resortMondialGuideCasinoVenueCardSubtitleWeave: {
    fontSize: 9,
    letterSpacing: 0.9,
    color: resortMondialGuideCasinoColors.accent,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  resortMondialGuideCasinoVenueCardTitleRowLintel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resortMondialGuideCasinoVenueCardTitleFiligree: {
    flex: 1,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 28,
    color: resortMondialGuideCasinoColors.text,
  },
  resortMondialGuideCasinoVenueCardChevronSigil: {
    fontSize: 22,
    color: resortMondialGuideCasinoColors.text,
    marginLeft: 8,
  },
});
