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

import {resortMondialGuideCasinoColors} from '../../../../ResortMondialGuideCasinoChromaTapestry/ResortMondialGuideCasinoColors';

type ResortMondialGuideCasinoRoundGlyphPorticoVariant =
  | 'solidFacet'
  | 'rimmedFacet'
  | 'veiledFacet'
  | 'giltFacet';

type ResortMondialGuideCasinoRoundGlyphPorticoProps = {
  onPress: () => void;
  icon?: ImageSourcePropType;
  glyph?: string;
  size?: 22 | 32 | 36 | 40;
  variant?: ResortMondialGuideCasinoRoundGlyphPorticoVariant;
  active?: boolean;
  hitSlop?: number;
  accessibilityLabel: string;
  iconStyle?: ImageStyle;
  style?: ViewStyle;
};

export function ResortMondialGuideCasinoRoundGlyphPortico({
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
}: ResortMondialGuideCasinoRoundGlyphPorticoProps): React.JSX.Element {
  const sizeStyle = SIZE_STYLES[size];
  const variantStyle = VARIANT_STYLES[variant];
  const activeStyle = active ? styles.resortMondialGuideCasinoRoundGlyphPorticoActiveGleam : null;

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
  resortMondialGuideCasinoRoundGlyphPorticoActiveGleam: {
    backgroundColor: resortMondialGuideCasinoColors.accent,
  },
  resortMondialGuideCasinoRoundGlyphPorticoSize22Berth: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoRoundGlyphPorticoSize32Berth: {
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoRoundGlyphPorticoSize36Berth: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoRoundGlyphPorticoSize40Berth: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resortMondialGuideCasinoRoundGlyphPorticoSolidFacet: {
    backgroundColor: resortMondialGuideCasinoColors.bg,
  },
  resortMondialGuideCasinoRoundGlyphPorticoRimmedFacet: {
    borderWidth: 1,
    borderColor: resortMondialGuideCasinoColors.outline,
    backgroundColor: resortMondialGuideCasinoColors.cardBg,
  },
  resortMondialGuideCasinoRoundGlyphPorticoVeiledFacet: {
    backgroundColor: 'transparent',
  },
  resortMondialGuideCasinoRoundGlyphPorticoGiltFacet: {
    backgroundColor: resortMondialGuideCasinoColors.accent,
  },
  resortMondialGuideCasinoRoundGlyphPorticoImage18Sigil: {
    width: 18,
    height: 18,
    tintColor: resortMondialGuideCasinoColors.accent,
  },
  resortMondialGuideCasinoRoundGlyphPorticoGlyph18Sigil: {
    fontSize: 18,
    lineHeight: 22,
    color: '#F8F5EF',
    fontWeight: '300',
  },
  resortMondialGuideCasinoRoundGlyphPorticoGlyph32Sigil: {
    fontSize: 22,
    lineHeight: 24,
    color: resortMondialGuideCasinoColors.text,
    fontWeight: '600',
  },
});

const SIZE_STYLES = {
  22: styles.resortMondialGuideCasinoRoundGlyphPorticoSize22Berth,
  32: styles.resortMondialGuideCasinoRoundGlyphPorticoSize32Berth,
  36: styles.resortMondialGuideCasinoRoundGlyphPorticoSize36Berth,
  40: styles.resortMondialGuideCasinoRoundGlyphPorticoSize40Berth,
};

const VARIANT_STYLES = {
  solidFacet: styles.resortMondialGuideCasinoRoundGlyphPorticoSolidFacet,
  rimmedFacet: styles.resortMondialGuideCasinoRoundGlyphPorticoRimmedFacet,
  veiledFacet: styles.resortMondialGuideCasinoRoundGlyphPorticoVeiledFacet,
  giltFacet: styles.resortMondialGuideCasinoRoundGlyphPorticoGiltFacet,
};

const ICON_SIZE_STYLES = {
  22: {width: 14, height: 14},
  32: {width: 16, height: 16},
  36: styles.resortMondialGuideCasinoRoundGlyphPorticoImage18Sigil,
  40: styles.resortMondialGuideCasinoRoundGlyphPorticoImage18Sigil,
};

const GLYPH_SIZE_STYLES = {
  22: styles.resortMondialGuideCasinoRoundGlyphPorticoGlyph18Sigil,
  32: styles.resortMondialGuideCasinoRoundGlyphPorticoGlyph32Sigil,
  36: styles.resortMondialGuideCasinoRoundGlyphPorticoGlyph32Sigil,
  40: styles.resortMondialGuideCasinoRoundGlyphPorticoGlyph32Sigil,
};
