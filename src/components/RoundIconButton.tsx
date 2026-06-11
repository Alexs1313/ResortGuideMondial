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

import {colors} from '../constants/theme';

type RoundIconButtonVariant =
  | 'solidFacet'
  | 'rimmedFacet'
  | 'veiledFacet'
  | 'giltFacet';

type RoundIconButtonProps = {
  onPress: () => void;
  icon?: ImageSourcePropType;
  glyph?: string;
  size?: 22 | 32 | 36 | 40;
  variant?: RoundIconButtonVariant;
  active?: boolean;
  hitSlop?: number;
  accessibilityLabel: string;
  iconStyle?: ImageStyle;
  style?: ViewStyle;
};

export function RoundIconButton({
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
}: RoundIconButtonProps): React.JSX.Element {
  const sizeStyle = SIZE_STYLES[size];
  const variantStyle = VARIANT_STYLES[variant];
  const activeStyle = active ? styles.RoundGlyphPorticoActiveGleam : null;

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
  RoundGlyphPorticoActiveGleam: {
    backgroundColor: colors.accent,
  },
  RoundGlyphPorticoSize22Berth: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RoundGlyphPorticoSize32Berth: {
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RoundGlyphPorticoSize36Berth: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RoundGlyphPorticoSize40Berth: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RoundGlyphPorticoSolidFacet: {
    backgroundColor: colors.bg,
  },
  RoundGlyphPorticoRimmedFacet: {
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.cardBg,
  },
  RoundGlyphPorticoVeiledFacet: {
    backgroundColor: 'transparent',
  },
  RoundGlyphPorticoGiltFacet: {
    backgroundColor: colors.accent,
  },
  RoundGlyphPorticoImage18Sigil: {
    width: 18,
    height: 18,
    tintColor: colors.accent,
  },
  RoundGlyphPorticoGlyph18Sigil: {
    fontSize: 18,
    lineHeight: 22,
    color: '#F8F5EF',
    fontWeight: '300',
  },
  RoundGlyphPorticoGlyph32Sigil: {
    fontSize: 22,
    lineHeight: 24,
    color: colors.text,
    fontWeight: '600',
  },
});

const SIZE_STYLES = {
  22: styles.RoundGlyphPorticoSize22Berth,
  32: styles.RoundGlyphPorticoSize32Berth,
  36: styles.RoundGlyphPorticoSize36Berth,
  40: styles.RoundGlyphPorticoSize40Berth,
};

const VARIANT_STYLES = {
  solidFacet: styles.RoundGlyphPorticoSolidFacet,
  rimmedFacet: styles.RoundGlyphPorticoRimmedFacet,
  veiledFacet: styles.RoundGlyphPorticoVeiledFacet,
  giltFacet: styles.RoundGlyphPorticoGiltFacet,
};

const ICON_SIZE_STYLES = {
  22: {width: 14, height: 14},
  32: {width: 16, height: 16},
  36: styles.RoundGlyphPorticoImage18Sigil,
  40: styles.RoundGlyphPorticoImage18Sigil,
};

const GLYPH_SIZE_STYLES = {
  22: styles.RoundGlyphPorticoGlyph18Sigil,
  32: styles.RoundGlyphPorticoGlyph32Sigil,
  36: styles.RoundGlyphPorticoGlyph32Sigil,
  40: styles.RoundGlyphPorticoGlyph32Sigil,
};
