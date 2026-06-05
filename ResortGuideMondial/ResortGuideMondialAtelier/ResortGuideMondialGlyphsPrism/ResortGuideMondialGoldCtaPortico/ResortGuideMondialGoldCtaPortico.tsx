import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialGoldCtaPorticoVariant =
  | 'introAtelier'
  | 'compactAtelier'
  | 'sheetPortico'
  | 'dialogPortico';

type ResortGuideMondialGoldCtaPorticoProps = {
  label: string;
  onPress: () => void;
  variant?: ResortGuideMondialGoldCtaPorticoVariant;
  showChevron?: boolean;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

export function ResortGuideMondialGoldCtaPortico({
  label,
  onPress,
  variant = 'compactAtelier',
  showChevron = false,
  fullWidth = false,
  accessibilityLabel,
  style,
}: ResortGuideMondialGoldCtaPorticoProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      style={({pressed}) => [
        styles.resortGuideMondialGoldCtaPorticoChassis,
        VARIANT_FACET_STYLES[variant],
        fullWidth && styles.resortGuideMondialGoldCtaPorticoFullSpan,
        pressed && styles.resortGuideMondialGoldCtaPorticoPressedDim,
        style,
      ]}>
      <Text
        style={[
          styles.resortGuideMondialGoldCtaPorticoTextVellum,
          VARIANT_TEXT_STYLES[variant],
        ]}>
        {label}
      </Text>
      {showChevron ? (
        <Text style={styles.resortGuideMondialGoldCtaPorticoChevronSigil}>›</Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialGoldCtaPorticoChassis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: resortGuideMondialColors.accent,
  },
  resortGuideMondialGoldCtaPorticoIntroAtelierFacet: {
    height: 44,
    minWidth: 120,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  resortGuideMondialGoldCtaPorticoCompactAtelierFacet: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  resortGuideMondialGoldCtaPorticoSheetPorticoFacet: {
    height: 54.5,
    borderRadius: 18,
  },
  resortGuideMondialGoldCtaPorticoDialogPorticoFacet: {
    height: 50.5,
    borderRadius: 16,
  },
  resortGuideMondialGoldCtaPorticoFullSpan: {
    width: '100%',
  },
  resortGuideMondialGoldCtaPorticoPressedDim: {
    opacity: 0.9,
  },
  resortGuideMondialGoldCtaPorticoTextVellum: {
    fontWeight: '600',
    color: '#060C18',
  },
  resortGuideMondialGoldCtaPorticoIntroAtelierGilding: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.7,
    color: resortGuideMondialColors.bg,
    textTransform: 'uppercase',
  },
  resortGuideMondialGoldCtaPorticoCompactAtelierGilding: {
    fontSize: 12,
    letterSpacing: 0.3,
  },
  resortGuideMondialGoldCtaPorticoSheetPorticoGilding: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
  resortGuideMondialGoldCtaPorticoDialogPorticoGilding: {
    fontSize: 15,
    fontWeight: '700',
    color: '#080A1C',
  },
  resortGuideMondialGoldCtaPorticoChevronSigil: {
    marginLeft: 6,
    marginTop: -2,
    fontSize: 18,
    lineHeight: 20,
    color: resortGuideMondialColors.bg,
    fontWeight: '700',
  },
});

const VARIANT_FACET_STYLES = {
  introAtelier: styles.resortGuideMondialGoldCtaPorticoIntroAtelierFacet,
  compactAtelier: styles.resortGuideMondialGoldCtaPorticoCompactAtelierFacet,
  sheetPortico: styles.resortGuideMondialGoldCtaPorticoSheetPorticoFacet,
  dialogPortico: styles.resortGuideMondialGoldCtaPorticoDialogPorticoFacet,
};

const VARIANT_TEXT_STYLES = {
  introAtelier: styles.resortGuideMondialGoldCtaPorticoIntroAtelierGilding,
  compactAtelier: styles.resortGuideMondialGoldCtaPorticoCompactAtelierGilding,
  sheetPortico: styles.resortGuideMondialGoldCtaPorticoSheetPorticoGilding,
  dialogPortico: styles.resortGuideMondialGoldCtaPorticoDialogPorticoGilding,
};
