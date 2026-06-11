import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';

import {colors, fonts} from '../constants/theme';

type GoldButtonVariant =
  | 'introAtelier'
  | 'compactAtelier'
  | 'sheetPortico'
  | 'dialogPortico';

type GoldButtonProps = {
  label: string;
  onPress: () => void;
  variant?: GoldButtonVariant;
  showChevron?: boolean;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

export function GoldButton({
  label,
  onPress,
  variant = 'compactAtelier',
  showChevron = false,
  fullWidth = false,
  accessibilityLabel,
  style,
}: GoldButtonProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      style={({pressed}) => [
        styles.GoldCtaPorticoChassis,
        VARIANT_FACET_STYLES[variant],
        fullWidth && styles.GoldCtaPorticoFullSpan,
        pressed && styles.GoldCtaPorticoPressedDim,
        style,
      ]}>
      <Text
        style={[
          styles.GoldCtaPorticoTextVellum,
          VARIANT_TEXT_STYLES[variant],
        ]}>
        {label}
      </Text>
      {showChevron ? (
        <Text style={styles.GoldCtaPorticoChevronSigil}>›</Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  GoldCtaPorticoChassis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
  GoldCtaPorticoIntroAtelierFacet: {
    height: 44,
    minWidth: 120,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  GoldCtaPorticoCompactAtelierFacet: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  GoldCtaPorticoSheetPorticoFacet: {
    height: 54.5,
    borderRadius: 18,
  },
  GoldCtaPorticoDialogPorticoFacet: {
    height: 50.5,
    borderRadius: 16,
  },
  GoldCtaPorticoFullSpan: {
    width: '100%',
  },
  GoldCtaPorticoPressedDim: {
    opacity: 0.9,
  },
  GoldCtaPorticoTextVellum: {
    fontWeight: '600',
    color: '#060C18',
  },
  GoldCtaPorticoIntroAtelierGilding: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.7,
    color: colors.bg,
    textTransform: 'uppercase',
  },
  GoldCtaPorticoCompactAtelierGilding: {
    fontSize: 12,
    letterSpacing: 0.3,
  },
  GoldCtaPorticoSheetPorticoGilding: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
  GoldCtaPorticoDialogPorticoGilding: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
  GoldCtaPorticoChevronSigil: {
    marginLeft: 6,
    marginTop: -2,
    fontSize: 18,
    lineHeight: 20,
    color: colors.bg,
    fontWeight: '700',
  },
});

const VARIANT_FACET_STYLES = {
  introAtelier: styles.GoldCtaPorticoIntroAtelierFacet,
  compactAtelier: styles.GoldCtaPorticoCompactAtelierFacet,
  sheetPortico: styles.GoldCtaPorticoSheetPorticoFacet,
  dialogPortico: styles.GoldCtaPorticoDialogPorticoFacet,
};

const VARIANT_TEXT_STYLES = {
  introAtelier: styles.GoldCtaPorticoIntroAtelierGilding,
  compactAtelier: styles.GoldCtaPorticoCompactAtelierGilding,
  sheetPortico: styles.GoldCtaPorticoSheetPorticoGilding,
  dialogPortico: styles.GoldCtaPorticoDialogPorticoGilding,
};
