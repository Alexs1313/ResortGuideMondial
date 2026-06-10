import type {ImageSourcePropType} from 'react-native';

import {resortMondialGuideCasinoOnboardingArt} from '../ResortMondialGuideCasinoReliquary';

export type ResortMondialGuideCasinoIntroSlide = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  cta: string;
};

export const resortMondialGuideCasinoIntroSlides: ResortMondialGuideCasinoIntroSlide[] = [
  {
    image: resortMondialGuideCasinoOnboardingArt.step1,
    title: 'Discover the Resort',
    description:
      'Explore dining, entertainment, rooms, and guest spaces in one elegant resort guide.',
    cta: 'Next',
  },
  {
    image: resortMondialGuideCasinoOnboardingArt.step2,
    title: 'Dine in Magnificence',
    description:
      'From the signature Le Salon to intimate cocktail lounges — every meal becomes a moment worth savoring forever.',
    cta: 'Next',
  },
  {
    image: resortMondialGuideCasinoOnboardingArt.step3,
    title: 'Rest in Splendor',
    description:
      'Sumptuous suites designed for those who demand the finest, from elegant Deluxe rooms to the incomparable Presidential Suite.',
    cta: 'Begin',
  },
];
