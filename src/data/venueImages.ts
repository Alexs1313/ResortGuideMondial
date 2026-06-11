import {ImageSourcePropType} from 'react-native';

import {
  venueImageByRoom,
  venueImages,
  type VenueImageKey,
} from './assets';

export const VENUE_IMAGES = venueImages;

export const roomImage = (room: string): ImageSourcePropType => {
  const key = venueImageByRoom[room] as VenueImageKey | undefined;
  return key ? venueImages[key] : venueImages.banquetRoom;
};
