import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

import {resortGuideMondialColors} from '../../../../ResortGuideMondialChromaTapestry/ResortGuideMondialColors';

type ResortGuideMondialRoundGlyphPorticoVariant =
  | 'solidFacet'
  | 'rimmedFacet'
  | 'veiledFacet'
  | 'giltFacet';

type ResortGuideMondialRoundGlyphPorticoProps = {
  onPress: () => void;
  icon?: ImageSourcePropType;
  glyph?: string;
  size?: 22 | 32 | 36 | 40;
  variant?: ResortGuideMondialRoundGlyphPorticoVariant;
  active?: boolean;
  hitSlop?: number;
  accessibilityLabel: string;
  iconStyle?: ImageStyle;
  style?: ViewStyle;
};

export function ResortGuideMondialRoundGlyphPortico({
  onPress,
  icon,
  glyph,
  size = 36,
  variant = 'solidFacet',
  active = false,
  hitSlop = 8,
  accessibilityLabel,
  iconStyle,
  style,
}: ResortGuideMondialRoundGlyphPorticoProps): React.JSX.Element {
  const sizeStyle = SIZE_STYLES[size];
  const variantStyle = VARIANT_STYLES[variant];
  const activeStyle = active ? styles.resortGuideMondialRoundGlyphPorticoActiveGleam : null;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={[sizeStyle, variantStyle, activeStyle, style]}>
      {icon ? (
        <Image source={icon} style={[ICON_SIZE_STYLES[size], iconStyle]} />
      ) : (
        <Text style={[GLYPH_SIZE_STYLES[size], iconStyle as object]}>{glyph}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resortGuideMondialRoundGlyphPorticoActiveGleam: {
    backgroundColor: resortGuideMondialColors.accent,
  },
  resortGuideMondialRoundGlyphPorticoSize22Berth: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialRoundGlyphPorticoSize32Berth: {
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialRoundGlyphPorticoSize36Berth: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialRoundGlyphPorticoSize40Berth: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortGuideMondialRoundGlyphPorticoSolidFacet: {
    backgroundColor: resortGuideMondialColors.bg,
  },
  resortGuideMondialRoundGlyphPorticoRimmedFacet: {
    borderWidth: 1,
    borderColor: resortGuideMondialColors.outline,
    backgroundColor: resortGuideMondialColors.cardBg,
  },
  resortGuideMondialRoundGlyphPorticoVeiledFacet: {
    backgroundColor: 'transparent',
  },
  resortGuideMondialRoundGlyphPorticoGiltFacet: {
    backgroundColor: resortGuideMondialColors.accent,
  },
  resortGuideMondialRoundGlyphPorticoImage18Sigil: {
    width: 18,
    height: 18,
    tintColor: resortGuideMondialColors.accent,
  },
  resortGuideMondialRoundGlyphPorticoGlyph18Sigil: {
    fontSize: 18,
    lineHeight: 22,
    color: '#F8F5EF',
    fontWeight: '300',
  },
  resortGuideMondialRoundGlyphPorticoGlyph32Sigil: {
    fontSize: 22,
    lineHeight: 24,
    color: resortGuideMondialColors.text,
    fontWeight: '600',
  },
});

const SIZE_STYLES = {
  22: styles.resortGuideMondialRoundGlyphPorticoSize22Berth,
  32: styles.resortGuideMondialRoundGlyphPorticoSize32Berth,
  36: styles.resortGuideMondialRoundGlyphPorticoSize36Berth,
  40: styles.resortGuideMondialRoundGlyphPorticoSize40Berth,
};

const VARIANT_STYLES = {
  solidFacet: styles.resortGuideMondialRoundGlyphPorticoSolidFacet,
  rimmedFacet: styles.resortGuideMondialRoundGlyphPorticoRimmedFacet,
  veiledFacet: styles.resortGuideMondialRoundGlyphPorticoVeiledFacet,
  giltFacet: styles.resortGuideMondialRoundGlyphPorticoGiltFacet,
};

const ICON_SIZE_STYLES = {
  22: {width: 14, height: 14},
  32: {width: 16, height: 16},
  36: styles.resortGuideMondialRoundGlyphPorticoImage18Sigil,
  40: styles.resortGuideMondialRoundGlyphPorticoImage18Sigil,
};

const GLYPH_SIZE_STYLES = {
  22: styles.resortGuideMondialRoundGlyphPorticoGlyph18Sigil,
  32: styles.resortGuideMondialRoundGlyphPorticoGlyph32Sigil,
  36: styles.resortGuideMondialRoundGlyphPorticoGlyph32Sigil,
  40: styles.resortGuideMondialRoundGlyphPorticoGlyph32Sigil,
};
