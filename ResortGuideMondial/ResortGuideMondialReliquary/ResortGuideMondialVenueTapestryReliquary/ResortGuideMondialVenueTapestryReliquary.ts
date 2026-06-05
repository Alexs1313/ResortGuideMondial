import type {ImageSourcePropType} from 'react-native';

export const ResortGuideMondialVenueImages = {
  leSalon: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_le_salon.png'),
  velvetDiningHall: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_velvet_dining_hall.png'),
  auroraBreakfast: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_aurora_breakfast.png'),
  sapphireLounge: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_sapphire_lounge.png'),
  maisonTerrace: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_maison_terrace.png'),
  banquetRoom: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_banquet_room.png'),
  royalSuite: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_royal_suite.png'),
  deluxeKing: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_deluxe_king.png'),
  executiveTwin: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_executive_twin.png'),
  panoramaSuite: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_panorama_suite.png'),
  classicComfort: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_classic_comfort.png'),
  celebrationSuite: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_celebration_suite.png'),
  gardenDining: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_garden_dining.png'),
  privateChef: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_private_chef.png'),
  premierFamily: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_premier_family.png'),
  midnightLounge: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_midnight_lounge.png'),
  atriumLounge: require('../ResortGuideMondialImagery/resort_guide_mondial_venue_atrium_lounge.png'),
} satisfies Record<string, ImageSourcePropType>;

export type VenueImageKey = keyof typeof ResortGuideMondialVenueImages;

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
