import type {ImageSourcePropType} from 'react-native';

export const ResortMondialGuideCasinoVenueImages = {
  leSalon: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_le_salon.png'),
  velvetDiningHall: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_velvet_dining_hall.png'),
  auroraBreakfast: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_aurora_breakfast.png'),
  sapphireLounge: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_sapphire_lounge.png'),
  maisonTerrace: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_maison_terrace.png'),
  banquetRoom: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_banquet_room.png'),
  royalSuite: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_royal_suite.png'),
  deluxeKing: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_deluxe_king.png'),
  executiveTwin: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_executive_twin.png'),
  panoramaSuite: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_panorama_suite.png'),
  classicComfort: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_classic_comfort.png'),
  celebrationSuite: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_celebration_suite.png'),
  gardenDining: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_garden_dining.png'),
  privateChef: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_private_chef.png'),
  premierFamily: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_premier_family.png'),
  midnightLounge: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_midnight_lounge.png'),
  atriumLounge: require('../ResortMondialGuideCasinoImagery/resort_mondial_guide_casino_venue_atrium_lounge.png'),
} satisfies Record<string, ImageSourcePropType>;

export type VenueImageKey = keyof typeof ResortMondialGuideCasinoVenueImages;

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
