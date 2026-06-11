import {Platform} from 'react-native';

const iosFamilies = {
  black: 'Cinzel-Black',
  bold: 'Cinzel-Bold',
  extraBold: 'Cinzel-ExtraBold',
  medium: 'Cinzel-Medium',
  regular: 'Cinzel-Regular',
  semiBold: 'Cinzel-SemiBold',
} as const;

const androidFamilies = {
  black: 'resort_guide_font_black',
  bold: 'resort_guide_font_bold',
  extraBold: 'resort_guide_font_extrabold',
  medium: 'resort_guide_font_medium',
  regular: 'resort_guide_font_regular',
  semiBold: 'resort_guide_font_semibold',
} as const;

const pick = <K extends keyof typeof iosFamilies>(key: K) =>
  Platform.OS === 'ios' ? iosFamilies[key] : androidFamilies[key];

export const fonts = {
  black: pick('black'),
  bold: pick('bold'),
  extraBold: pick('extraBold'),
  medium: pick('medium'),
  regular: pick('regular'),
  semiBold: pick('semiBold'),
};
