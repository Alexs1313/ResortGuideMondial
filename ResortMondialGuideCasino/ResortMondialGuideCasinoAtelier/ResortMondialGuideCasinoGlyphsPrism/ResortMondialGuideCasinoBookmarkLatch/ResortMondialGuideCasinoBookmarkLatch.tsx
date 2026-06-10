import React from 'react';
import {Image, Pressable, StyleSheet, ViewStyle} from 'react-native';

import {resortMondialGuideCasinoIcons} from '../../../ResortMondialGuideCasinoReliquary';
import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoBookmarkLatchProps = {
  saved: boolean;
  onPress: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export function ResortMondialGuideCasinoBookmarkLatch({
  saved,
  onPress,
  style,
  accessibilityLabel,
}: ResortMondialGuideCasinoBookmarkLatchProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={
        accessibilityLabel ?? (saved ? 'Remove from saved' : 'Save')
      }
      style={[
        styles.resortMondialGuideCasinoBookmarkLatchPortico,
        saved && styles.resortMondialGuideCasinoBookmarkLatchGleam,
        style,
      ]}>
      <Image
        source={
          saved ? resortMondialGuideCasinoIcons.savedActive : resortMondialGuideCasinoIcons.saved
        }
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoBookmarkLatchPortico: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: resortMondialGuideCasinoColors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoBookmarkLatchGleam: {
    backgroundColor: resortMondialGuideCasinoColors.accent,
  },
});
