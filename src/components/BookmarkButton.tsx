import React from 'react';
import {Image, Pressable, StyleSheet, ViewStyle} from 'react-native';

import {icons} from '../data/assets';
import {colors} from '../constants/theme';

type BookmarkButtonProps = {
  saved: boolean;
  onPress: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export function BookmarkButton({
  saved,
  onPress,
  style,
  accessibilityLabel,
}: BookmarkButtonProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={
        accessibilityLabel ?? (saved ? 'Remove from saved' : 'Save')
      }
      style={[
        styles.BookmarkLatchPortico,
        saved && styles.BookmarkLatchGleam,
        style,
      ]}>
      <Image
        source={
          saved ? icons.savedActive : icons.saved
        }
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  BookmarkLatchPortico: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BookmarkLatchGleam: {
    backgroundColor: colors.accent,
  },
});
