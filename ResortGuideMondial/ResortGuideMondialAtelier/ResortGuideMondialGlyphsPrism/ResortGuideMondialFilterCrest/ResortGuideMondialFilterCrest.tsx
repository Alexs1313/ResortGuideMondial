import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialFilterCrestProps = {
  label: string;
  active?: boolean;
  icon?: string;
  onPress: () => void;
};

export function ResortGuideMondialFilterCrest({
  label,
  active = false,
  icon,
  onPress,
}: ResortGuideMondialFilterCrestProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[
        styles.resortGuideMondialFilterCrestCrest,
        active && styles.resortGuideMondialFilterCrestGleam,
      ]}>
      {icon ? (
        <Text
          style={[
            styles.resortGuideMondialFilterCrestIconGlyph,
            active && styles.resortGuideMondialFilterCrestIconGilding,
          ]}>
          {icon}
        </Text>
      ) : null}
      <Text
        style={[
          styles.resortGuideMondialFilterCrestLabelVellum,
          active && styles.resortGuideMondialFilterCrestLabelFiligree,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialFilterCrestCrest: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: resortGuideMondialColors.outline,
    backgroundColor: resortGuideMondialColors.cardBg,
    gap: 6,
  },
  resortGuideMondialFilterCrestGleam: {
    borderColor: resortGuideMondialColors.accent,
    backgroundColor: resortGuideMondialColors.accent,
  },
  resortGuideMondialFilterCrestIconGlyph: {
    fontSize: 10,
    color: resortGuideMondialColors.muted,
  },
  resortGuideMondialFilterCrestIconGilding: {
    color: resortGuideMondialColors.bg,
  },
  resortGuideMondialFilterCrestLabelVellum: {
    fontSize: 12,
    fontWeight: '500',
    color: resortGuideMondialColors.muted,
  },
  resortGuideMondialFilterCrestLabelFiligree: {
    color: resortGuideMondialColors.bg,
  },
});
