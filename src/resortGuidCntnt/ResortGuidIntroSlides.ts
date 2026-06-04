import type {ImageSourcePropType} from 'react-native';

import {resortGuidOnboardingArt} from '../resortGuidAssts';

export type ResortGuidIntroSlide = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  cta: string;
};

export const resortGuidIntroSlides: ResortGuidIntroSlide[] = [
  {
    image: resortGuidOnboardingArt.step1,
    title: 'Discover the Resort',
    description:
      'Explore dining, entertainment, rooms, and guest spaces in one elegant resort guide.',
    cta: 'Next',
  },
  {
    image: resortGuidOnboardingArt.step2,
    title: 'Dine in Magnificence',
    description:
      'From the signature Le Salon to intimate cocktail lounges — every meal becomes a memory worth preserving forever.',
    cta: 'Next',
  },
  {
    image: resortGuidOnboardingArt.step3,
    title: 'Rest in Splendor',
    description:
      'Sumptuous suites designed for those who demand the finest, from elegant Deluxe rooms to the incomparable Presidential Suite.',
    cta: 'Begin',
  },
];
