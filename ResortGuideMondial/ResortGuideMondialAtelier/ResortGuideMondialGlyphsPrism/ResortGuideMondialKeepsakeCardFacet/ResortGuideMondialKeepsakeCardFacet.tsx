import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type {GuideItem} from '../../../ResortGuideMondialCompendium/ResortGuideMondialVenueFolio/ResortGuideMondialGuideData';
import {
  resortGuideMondialColors,
  resortGuideMondialGradient,
} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';
import {ResortGuideMondialBookmarkLatch} from '../ResortGuideMondialBookmarkLatch/ResortGuideMondialBookmarkLatch';

type ResortGuideMondialKeepsakeCardFacetProps = {
  item: GuideItem;
  onPress: () => void;
  onToggleSave: () => void;
};

export function ResortGuideMondialKeepsakeCardFacet({
  item,
  onPress,
  onToggleSave,
}: ResortGuideMondialKeepsakeCardFacetProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.resortGuideMondialKeepsakeCardFacetChassis,
        pressed && styles.resortGuideMondialKeepsakeCardFacetPressedDim,
      ]}>
      <View style={styles.resortGuideMondialKeepsakeCardImageMantle}>
        <Image
          source={item.image}
          style={styles.resortGuideMondialKeepsakeCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={resortGuideMondialGradient.cardFade}
          style={styles.resortGuideMondialKeepsakeCardGradientVeil}
        />
        <ResortGuideMondialBookmarkLatch
          saved
          onPress={onToggleSave}
          style={styles.resortGuideMondialKeepsakeCardSaveBtnPortico}
          accessibilityLabel="Remove from saved"
        />
        <Text style={styles.resortGuideMondialKeepsakeCardTitleFiligree}>{item.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialKeepsakeCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: resortGuideMondialColors.outline,
    backgroundColor: resortGuideMondialColors.cardBg,
    overflow: 'hidden',
  },
  resortGuideMondialKeepsakeCardFacetPressedDim: {
    opacity: 0.92,
  },
  resortGuideMondialKeepsakeCardImageMantle: {
    height: 184,
    backgroundColor: '#0A1020',
    justifyContent: 'flex-end',
  },
  resortGuideMondialKeepsakeCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  resortGuideMondialKeepsakeCardGradientVeil: {
    ...StyleSheet.absoluteFillObject,
  },
  resortGuideMondialKeepsakeCardSaveBtnPortico: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  resortGuideMondialKeepsakeCardTitleFiligree: {
    marginLeft: 14,
    marginBottom: 14,
    marginRight: 14,
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    lineHeight: 28,
    color: resortGuideMondialColors.text,
  },
});
