import React from 'react';
import {Image, Pressable, StyleSheet, ViewStyle} from 'react-native';

import {resortGuideMondialIcons} from '../../../ResortGuideMondialReliquary';
import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialBookmarkLatchProps = {
  saved: boolean;
  onPress: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export function ResortGuideMondialBookmarkLatch({
  saved,
  onPress,
  style,
  accessibilityLabel,
}: ResortGuideMondialBookmarkLatchProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={
        accessibilityLabel ?? (saved ? 'Remove from saved' : 'Save')
      }
      style={[
        styles.resortGuideMondialBookmarkLatchPortico,
        saved && styles.resortGuideMondialBookmarkLatchGleam,
        style,
      ]}>
      <Image
        source={
          saved ? resortGuideMondialIcons.savedActive : resortGuideMondialIcons.saved
        }
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialBookmarkLatchPortico: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: resortGuideMondialColors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialBookmarkLatchGleam: {
    backgroundColor: resortGuideMondialColors.accent,
  },
});
