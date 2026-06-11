import type {ImageSourcePropType} from 'react-native';

import type {MainTabId} from '../navigation/types';

export const icons = {
  back: require('../assets/resort_guide_icon_back.png'),
  search: require('../assets/resort_guide_icon_search.png'),
  saved: require('../assets/resort_guide_icon_saved.png'),
  savedActive: require('../assets/resort_guide_icon_saved_active.png'),
  location: require('../assets/resort_guide_icon_location.png'),
  clock: require('../assets/resort_guide_icon_clock.png'),
  noSaved: require('../assets/resort_guide_img_empty_saved.png'),
  loaderBg: require('../assets/resort_guide_loader_bg.png'),
  loaderLogo: require('../assets/resort_guide_loader_logo_ios.png'),
  loaderLogoAndroid: require('../assets/resort_guide_loader_logo_android.png'),
};

export const tabIcons: Record<MainTabId, ImageSourcePropType> = {
  guide: require('../assets/resort_guide_tab_guide.png'),
  saved: require('../assets/resort_guide_tab_saved.png'),
  services: require('../assets/resort_guide_tab_services.png'),
  calendar: require('../assets/resort_guide_tab_calendar.png'),
  events: require('../assets/resort_guide_tab_events.png'),
};

export const onboardingArt = {
  step1: require('../assets/resort_guide_onboard_hero_1.png') as ImageSourcePropType,
  step2: require('../assets/resort_guide_onboard_hero_2.png') as ImageSourcePropType,
  step3: require('../assets/resort_guide_onboard_hero_3.png') as ImageSourcePropType,
};

export const venueImages = {
  leSalon: require('../assets/resort_guide_venue_le_salon.png'),
  velvetDiningHall: require('../assets/resort_guide_venue_velvet_dining_hall.png'),
  auroraBreakfast: require('../assets/resort_guide_venue_aurora_breakfast.png'),
  sapphireLounge: require('../assets/resort_guide_venue_sapphire_lounge.png'),
  maisonTerrace: require('../assets/resort_guide_venue_maison_terrace.png'),
  banquetRoom: require('../assets/resort_guide_venue_banquet_room.png'),
  royalSuite: require('../assets/resort_guide_venue_royal_suite.png'),
  deluxeKing: require('../assets/resort_guide_venue_deluxe_king.png'),
  executiveTwin: require('../assets/resort_guide_venue_executive_twin.png'),
  panoramaSuite: require('../assets/resort_guide_venue_panorama_suite.png'),
  classicComfort: require('../assets/resort_guide_venue_classic_comfort.png'),
  celebrationSuite: require('../assets/resort_guide_venue_celebration_suite.png'),
  gardenDining: require('../assets/resort_guide_venue_garden_dining.png'),
  privateChef: require('../assets/resort_guide_venue_private_chef.png'),
  premierFamily: require('../assets/resort_guide_venue_premier_family.png'),
  midnightLounge: require('../assets/resort_guide_venue_midnight_lounge.png'),
  atriumLounge: require('../assets/resort_guide_venue_atrium_lounge.png'),
} satisfies Record<string, ImageSourcePropType>;

export type VenueImageKey = keyof typeof venueImages;

export const venueImageByRoom: Record<string, VenueImageKey> = {
  'Le Salon': 'leSalon',
  'The Velvet Dining Hall': 'velvetDiningHall',
  'Aurora Breakfast Room': 'auroraBreakfast',
  'The Sapphire Lounge': 'sapphireLounge',
  'Maison Terrace': 'maisonTerrace',
  'The Banquet Room': 'banquetRoom',
  'The Garden Dining Room': 'gardenDining',
  'The Private Chef Room': 'privateChef',
  'Midnight Lounge Room': 'midnightLounge',
  'The Atrium Lounge': 'atriumLounge',
};
