import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

export function useAdaptive() {
  const {width, height} = useWindowDimensions();

  return useMemo(() => {
    const isNarrow = width < 370;
    const isSmallHeight = height < 740;
    const isTinyHeight = height < 660;
    const horizontalPadding = isNarrow ? 16 : 20;
    const tabHeight = isTinyHeight ? 58 : isSmallHeight ? 62 : 66;
    const introHeroHeight = Math.round(
      height * (isTinyHeight ? 0.52 : isSmallHeight ? 0.55 : 0.59),
    );
    const heroHeight = isTinyHeight ? 148 : isSmallHeight ? 166 : 190;
    const detailHeroHeight = isTinyHeight ? 200 : isSmallHeight ? 228 : 256;
    const cardImageHeight = isTinyHeight ? 148 : isSmallHeight ? 166 : 184;
    const eventCardImageHeight = isTinyHeight ? 128 : isSmallHeight ? 144 : 160;
    const loaderLogoSize = isTinyHeight ? 160 : isSmallHeight ? 190 : 220;
    const screenTitleSize = isTinyHeight ? 20 : isSmallHeight ? 21 : 22;
    const emptyPaddingVertical = isTinyHeight ? 48 : isSmallHeight ? 64 : 80;
    const emptyIconSize = isTinyHeight ? 52 : isSmallHeight ? 58 : 64;
    const tabIconSize = isTinyHeight ? 20 : 22;
    const tabIconWrapHeight = isTinyHeight ? 24 : 28;

    return {
      width,
      height,
      isNarrow,
      isSmallHeight,
      isTinyHeight,
      horizontalPadding,
      tabHeight,
      introHeroHeight,
      heroHeight,
      detailHeroHeight,
      cardImageHeight,
      eventCardImageHeight,
      loaderLogoSize,
      screenTitleSize,
      emptyPaddingVertical,
      emptyIconSize,
      tabIconSize,
      tabIconWrapHeight,
    };
  }, [height, width]);
}
