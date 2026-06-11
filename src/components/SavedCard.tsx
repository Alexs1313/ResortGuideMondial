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

type SavedCardProps = {
  item: GuideItem;
  onPress: () => void;
  onToggleSave: () => void;
};

export function SavedCard({
  item,
  onPress,
  onToggleSave,
}: SavedCardProps): React.JSX.Element {
  const adaptive = useAdaptive();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.KeepsakeCardFacetChassis,
        pressed && styles.KeepsakeCardFacetPressedDim,
      ]}>
      <View
        style={[
          styles.KeepsakeCardImageMantle,
          {height: adaptive.cardImageHeight},
        ]}>
        <Image
          source={item.image}
          style={styles.KeepsakeCardImagePanel}
          resizeMode="cover"
        />
        <LinearGradient
          colors={gradient.cardFade}
          style={styles.KeepsakeCardGradientVeil}
        />
        <BookmarkButton
          saved
          onPress={onToggleSave}
          style={styles.KeepsakeCardSaveBtnPortico}
          accessibilityLabel="Remove from saved"
        />
        <Text style={styles.KeepsakeCardTitleFiligree}>{item.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  KeepsakeCardFacetChassis: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.cardBg,
    overflow: 'hidden',
  },
  KeepsakeCardFacetPressedDim: {
    opacity: 0.92,
  },
  KeepsakeCardImageMantle: {
    backgroundColor: '#0A1020',
    justifyContent: 'flex-end',
  },
  KeepsakeCardImagePanel: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  KeepsakeCardGradientVeil: {
    ...StyleSheet.absoluteFillObject,
  },
  KeepsakeCardSaveBtnPortico: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  KeepsakeCardTitleFiligree: {
    marginLeft: 14,
    marginBottom: 14,
    marginRight: 14,
    fontFamily: fonts.bold,
    fontSize: 22,
    lineHeight: 28,
    color: colors.text,
  },
});
