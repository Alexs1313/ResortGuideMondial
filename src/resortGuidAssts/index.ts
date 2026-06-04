import type {ImageSourcePropType} from 'react-native';

import type {ResortGuidMainTabId} from '../resortGuidTypes/ResortGuidNavigationTypes';

export {ResortGuidVenueImages, venueImageByRoom} from './ResortGuidVenues';
export type {VenueImageKey} from './ResortGuidVenues';

export const resortGuidTabIcons: Record<
  ResortGuidMainTabId,
  ImageSourcePropType
> = {
  guide: require('./images/tab_guide.png'),
  saved: require('./images/tab_saved.png'),
  services: require('./images/tab_services.png'),
  calendar: require('./images/tab_calendar.png'),
  events: require('./images/tab_events.png'),
};

export const resortGuidIcons = {
  back: require('./images/icon_back.png'),
  search: require('./images/icon_search.png'),
  saved: require('./images/icon_saved.png'),
  savedActive: require('./images/icon_saved_active.png'),
  location: require('./images/icon_location.png'),
  clock: require('./images/icon_clock.png'),
  noSaved: require('./images/img_empty_saved.png'),
  loaderBg: require('./images/loader_bg.png'),
  loaderLogo: require('./images/loader_logo_ios.png'),
  loaderLogoAndroid: require('./images/loader_logo_android.png'),
};

export const resortGuidOnboardingArt = {
  step1: require('./images/onboard_hero_1.png') as ImageSourcePropType,
  step2: require('./images/onboard_hero_2.png') as ImageSourcePropType,
  step3: require('./images/onboard_hero_3.png') as ImageSourcePropType,
};
