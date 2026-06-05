import type {ImageSourcePropType} from 'react-native';

import {resortGuideMondialOnboardingArt} from '../ResortGuideMondialReliquary';

export type ResortGuideMondialIntroSlide = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  cta: string;
};

export const resortGuideMondialIntroSlides: ResortGuideMondialIntroSlide[] = [
  {
    image: resortGuideMondialOnboardingArt.step1,
    title: 'Discover the Resort',
    description:
      'Explore dining, entertainment, rooms, and guest spaces in one elegant resort guide.',
    cta: 'Next',
  },
  {
    image: resortGuideMondialOnboardingArt.step2,
    title: 'Dine in Magnificence',
    description:
      'From the signature Le Salon to intimate cocktail lounges — every meal becomes a moment worth savoring forever.',
    cta: 'Next',
  },
  {
    image: resortGuideMondialOnboardingArt.step3,
    title: 'Rest in Splendor',
    description:
      'Sumptuous suites designed for those who demand the finest, from elegant Deluxe rooms to the incomparable Presidential Suite.',
    cta: 'Begin',
  },
];
