import {ImageSourcePropType} from 'react-native';

export const VENUE_IMAGES = {
  LeGrandSalon: require('../../elements/i/LeGrandSalon.png'),
  TheVelvetDiningHall: require('../../elements/i/TheVelvetDiningHall.png'),
  AuroraBreakfastRoom: require('../../elements/i/AuroraBreakfastRoom.png'),
  TheSapphireLounge: require('../../elements/i/TheSapphireLounge.png'),
  MaisonTerrace: require('../../elements/i/MaisonTerrace.png'),
  TheGrandBanquetRoom: require('../../elements/i/TheGrandBanquetRoom.png'),
  TheGardenDiningRoom: require('../../elements/i/TheGardenDiningRoom.png'),
  ThePrivateChefRoom: require('../../elements/i/ThePrivateChefRoom.png'),
  MidnightLoungeRoom: require('../../elements/i/MidnightLoungeRoom.png'),
  TheCasinoAtriumLounge: require('../../elements/i/TheCasinoAtriumLounge.png'),
} satisfies Record<string, ImageSourcePropType>;

export const roomImage = (room: string): ImageSourcePropType => {
  const map: Record<string, keyof typeof VENUE_IMAGES> = {
    'Le Grand Salon': 'LeGrandSalon',
    'The Velvet Dining Hall': 'TheVelvetDiningHall',
    'Aurora Breakfast Room': 'AuroraBreakfastRoom',
    'The Sapphire Lounge': 'TheSapphireLounge',
    'Maison Terrace': 'MaisonTerrace',
    'The Grand Banquet Room': 'TheGrandBanquetRoom',
    'The Garden Dining Room': 'TheGardenDiningRoom',
    'The Private Chef Room': 'ThePrivateChefRoom',
    'Midnight Lounge Room': 'MidnightLoungeRoom',
    'The Casino Atrium Lounge': 'TheCasinoAtriumLounge',
  };
  const key = map[room];
  return key ? VENUE_IMAGES[key] : VENUE_IMAGES.TheGrandBanquetRoom;
};
