import {ImageSourcePropType} from 'react-native';

import {
  venueImageByRoom,
  ResortMondialGuideCasinoVenueImages,
  type VenueImageKey,
} from '../../ResortMondialGuideCasinoReliquary';

export const VENUE_IMAGES = ResortMondialGuideCasinoVenueImages;

export const roomImage = (room: string): ImageSourcePropType => {
  const key = venueImageByRoom[room] as VenueImageKey | undefined;
  return key ? ResortMondialGuideCasinoVenueImages[key] : ResortMondialGuideCasinoVenueImages.banquetRoom;
};
