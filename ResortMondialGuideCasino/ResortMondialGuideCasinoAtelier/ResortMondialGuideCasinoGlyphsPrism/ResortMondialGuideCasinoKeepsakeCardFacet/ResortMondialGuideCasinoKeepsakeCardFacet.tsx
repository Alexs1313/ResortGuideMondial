import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {GuideItem} from '../../../ResortMondialGuideCasinoCompendium/ResortMondialGuideCasinoVenueFolio/ResortMondialGuideCasinoGuideData';
import {
  resortMondialGuideCasinoColors,
  resortMondialGuideCasinoGradient,
} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';
import {ResortMondialGuideCasinoBookmarkLatch} from '../ResortMondialGuideCasinoBookmarkLatch/ResortMondialGuideCasinoBookmarkLatch';

type ResortMondialGuideCasinoKeepsakeCardFacetProps = {
  item: GuideItem;
  onPress: () => void;
  onToggleSave: () => void;
};

export function ResortMondialGuideCasinoKeepsakeCardFacet({
  item,
  onPress,
  onToggleSave,
}: ResortMondialGuideCasinoKeepsakeCardFacetProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.resortMondialGuideCasinoKeepsakeCardFacetChassis,
        pressed && styles.resortMondialGuideCasinoKeepsakeCardFacetPressedDim,
      ]}>
      <View style={styles.resortMondialGuideCasinoKeepsakeCardImageMantle}>
        <Image
          source={item.image}
          style={styles.resortMondialGuideCasinoKeepsakeCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={resortMondialGuideCasinoGradient.cardFade}
          style={styles.resortMondialGuideCasinoKeepsakeCardGradientVeil}
        />
        <ResortMondialGuideCasinoBookmarkLatch
          saved
          onPress={onToggleSave}
          style={styles.resortMondialGuideCasinoKeepsakeCardSaveBtnPortico}
          accessibilityLabel="Remove from saved"
        />
        <Text style={styles.resortMondialGuideCasinoKeepsakeCardTitleFiligree}>{item.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoKeepsakeCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: resortMondialGuideCasinoColors.outline,
    backgroundColor: resortMondialGuideCasinoColors.cardBg,
    overflow: 'hidden',
  },
  resortMondialGuideCasinoKeepsakeCardFacetPressedDim: {
    opacity: 0.92,
  },
  resortMondialGuideCasinoKeepsakeCardImageMantle: {
    height: 184,
    backgroundColor: '#0A1020',
    justifyContent: 'flex-end',
  },
  resortMondialGuideCasinoKeepsakeCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortMondialGuideCasinoKeepsakeCardGradientVeil: {
    ...StyleSheet.absoluteFillObject,
  },
  resortMondialGuideCasinoKeepsakeCardSaveBtnPortico: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  resortMondialGuideCasinoKeepsakeCardTitleFiligree: {
    marginLeft: 14,
    marginBottom: 14,
    marginRight: 14,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 28,
    color: resortMondialGuideCasinoColors.text,
  },
});
