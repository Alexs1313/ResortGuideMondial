import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {colors} from '../constants/theme';

type FilterChipsProps = {
  label: string;
  active?: boolean;
  icon?: string;
  onPress: () => void;
};

export function FilterChips({
  label,
  active = false,
  icon,
  onPress,
}: FilterChipsProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[
        styles.FilterCrestCrest,
        active && styles.FilterCrestGleam,
      ]}>
      {icon ? (
        <Text
          style={[
            styles.FilterCrestIconGlyph,
            active && styles.FilterCrestIconGilding,
          ]}>
          {icon}
        </Text>
      ) : null}
      <Text
        style={[
          styles.FilterCrestLabelVellum,
          active && styles.FilterCrestLabelFiligree,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  FilterCrestCrest: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.cardBg,
    gap: 6,
  },
  FilterCrestGleam: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  FilterCrestIconGlyph: {
    fontSize: 10,
    color: colors.muted,
  },
  FilterCrestIconGilding: {
    color: colors.bg,
  },
  FilterCrestLabelVellum: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.muted,
  },
  FilterCrestLabelFiligree: {
    color: colors.bg,
  },
});
