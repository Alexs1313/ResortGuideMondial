import {ImageSourcePropType} from 'react-native';

import {venueImageByRoom, venueImages} from '../assets/venues';
import type {VenueImageKey} from '../assets/venues';

export const VENUE_IMAGES = venueImages;

export const roomImage = (room: string): ImageSourcePropType => {
  const key = venueImageByRoom[room] as VenueImageKey | undefined;
  return key ? venueImages[key] : venueImages.banquetRoom;
};
