import type {ImageSourcePropType} from 'react-native';

export const venueImages = {
  leSalon: require('./images/venue_le_salon.png'),
  velvetDiningHall: require('./images/venue_velvet_dining_hall.png'),
  auroraBreakfast: require('./images/venue_aurora_breakfast.png'),
  sapphireLounge: require('./images/venue_sapphire_lounge.png'),
  maisonTerrace: require('./images/venue_maison_terrace.png'),
  banquetRoom: require('./images/venue_banquet_room.png'),
  royalSuite: require('./images/venue_royal_suite.png'),
  deluxeKing: require('./images/venue_deluxe_king.png'),
  executiveTwin: require('./images/venue_executive_twin.png'),
  panoramaSuite: require('./images/venue_panorama_suite.png'),
  classicComfort: require('./images/venue_classic_comfort.png'),
  celebrationSuite: require('./images/venue_celebration_suite.png'),
  gardenDining: require('./images/venue_garden_dining.png'),
  privateChef: require('./images/venue_private_chef.png'),
  premierFamily: require('./images/venue_premier_family.png'),
  midnightLounge: require('./images/venue_midnight_lounge.png'),
  atriumLounge: require('./images/venue_atrium_lounge.png'),
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
