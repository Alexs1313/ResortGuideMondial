import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoFilterCrestProps = {
  label: string;
  active?: boolean;
  icon?: string;
  onPress: () => void;
};

export function ResortMondialGuideCasinoFilterCrest({
  label,
  active = false,
  icon,
  onPress,
}: ResortMondialGuideCasinoFilterCrestProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[
        styles.resortMondialGuideCasinoFilterCrestCrest,
        active && styles.resortMondialGuideCasinoFilterCrestGleam,
      ]}>
      {icon ? (
        <Text
          style={[
            styles.resortMondialGuideCasinoFilterCrestIconGlyph,
            active && styles.resortMondialGuideCasinoFilterCrestIconGilding,
          ]}>
          {icon}
        </Text>
      ) : null}
      <Text
        style={[
          styles.resortMondialGuideCasinoFilterCrestLabelVellum,
          active && styles.resortMondialGuideCasinoFilterCrestLabelFiligree,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoFilterCrestCrest: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: resortMondialGuideCasinoColors.outline,
    backgroundColor: resortMondialGuideCasinoColors.cardBg,
    gap: 6,
  },
  resortMondialGuideCasinoFilterCrestGleam: {
    borderColor: resortMondialGuideCasinoColors.accent,
    backgroundColor: resortMondialGuideCasinoColors.accent,
  },
  resortMondialGuideCasinoFilterCrestIconGlyph: {
    fontSize: 10,
    color: resortMondialGuideCasinoColors.muted,
  },
  resortMondialGuideCasinoFilterCrestIconGilding: {
    color: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoFilterCrestLabelVellum: {
    fontSize: 12,
    fontWeight: '500',
    color: resortMondialGuideCasinoColors.muted,
  },
  resortMondialGuideCasinoFilterCrestLabelFiligree: {
    color: resortMondialGuideCasinoColors.bg,
  },
});
