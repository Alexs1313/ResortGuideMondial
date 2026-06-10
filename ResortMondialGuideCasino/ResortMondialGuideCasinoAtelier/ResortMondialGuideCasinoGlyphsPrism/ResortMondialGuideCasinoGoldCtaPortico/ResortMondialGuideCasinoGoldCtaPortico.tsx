import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoGoldCtaPorticoVariant =
  | 'introAtelier'
  | 'compactAtelier'
  | 'sheetPortico'
  | 'dialogPortico';

type ResortMondialGuideCasinoGoldCtaPorticoProps = {
  label: string;
  onPress: () => void;
  variant?: ResortMondialGuideCasinoGoldCtaPorticoVariant;
  showChevron?: boolean;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

export function ResortMondialGuideCasinoGoldCtaPortico({
  label,
  onPress,
  variant = 'compactAtelier',
  showChevron = false,
  fullWidth = false,
  accessibilityLabel,
  style,
}: ResortMondialGuideCasinoGoldCtaPorticoProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      style={({pressed}) => [
        styles.resortMondialGuideCasinoGoldCtaPorticoChassis,
        VARIANT_FACET_STYLES[variant],
        fullWidth && styles.resortMondialGuideCasinoGoldCtaPorticoFullSpan,
        pressed && styles.resortMondialGuideCasinoGoldCtaPorticoPressedDim,
        style,
      ]}>
      <Text
        style={[
          styles.resortMondialGuideCasinoGoldCtaPorticoTextVellum,
          VARIANT_TEXT_STYLES[variant],
        ]}>
        {label}
      </Text>
      {showChevron ? (
        <Text style={styles.resortMondialGuideCasinoGoldCtaPorticoChevronSigil}>›</Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortMondialGuideCasinoGoldCtaPorticoChassis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: resortMondialGuideCasinoColors.accent,
  },
  resortMondialGuideCasinoGoldCtaPorticoIntroAtelierFacet: {
    height: 44,
    minWidth: 120,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  resortMondialGuideCasinoGoldCtaPorticoCompactAtelierFacet: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  resortMondialGuideCasinoGoldCtaPorticoSheetPorticoFacet: {
    height: 54.5,
    borderRadius: 18,
  },
  resortMondialGuideCasinoGoldCtaPorticoDialogPorticoFacet: {
    height: 50.5,
    borderRadius: 16,
  },
  resortMondialGuideCasinoGoldCtaPorticoFullSpan: {
    width: '100%',
  },
  resortMondialGuideCasinoGoldCtaPorticoPressedDim: {
    opacity: 0.9,
  },
  resortMondialGuideCasinoGoldCtaPorticoTextVellum: {
    fontWeight: '600',
    color: '#060C18',
  },
  resortMondialGuideCasinoGoldCtaPorticoIntroAtelierGilding: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.7,
    color: resortMondialGuideCasinoColors.bg,
    textTransform: 'uppercase',
  },
  resortMondialGuideCasinoGoldCtaPorticoCompactAtelierGilding: {
    fontSize: 12,
    letterSpacing: 0.3,
  },
  resortMondialGuideCasinoGoldCtaPorticoSheetPorticoGilding: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
  resortMondialGuideCasinoGoldCtaPorticoDialogPorticoGilding: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
  resortMondialGuideCasinoGoldCtaPorticoChevronSigil: {
    marginLeft: 6,
    marginTop: -2,
    fontSize: 18,
    lineHeight: 20,
    color: resortMondialGuideCasinoColors.bg,
    fontWeight: '700',
  },
});

const VARIANT_FACET_STYLES = {
  introAtelier: styles.resortMondialGuideCasinoGoldCtaPorticoIntroAtelierFacet,
  compactAtelier: styles.resortMondialGuideCasinoGoldCtaPorticoCompactAtelierFacet,
  sheetPortico: styles.resortMondialGuideCasinoGoldCtaPorticoSheetPorticoFacet,
  dialogPortico: styles.resortMondialGuideCasinoGoldCtaPorticoDialogPorticoFacet,
};

const VARIANT_TEXT_STYLES = {
  introAtelier: styles.resortMondialGuideCasinoGoldCtaPorticoIntroAtelierGilding,
  compactAtelier: styles.resortMondialGuideCasinoGoldCtaPorticoCompactAtelierGilding,
  sheetPortico: styles.resortMondialGuideCasinoGoldCtaPorticoSheetPorticoGilding,
  dialogPortico: styles.resortMondialGuideCasinoGoldCtaPorticoDialogPorticoGilding,
};
