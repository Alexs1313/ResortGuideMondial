import {ImageSourcePropType} from 'react-native';

import {venueImageByRoom, ResortGuidVenueImages} from '../resortGuidAssts/ResortGuidVenues';
import type {VenueImageKey} from '../resortGuidAssts/ResortGuidVenues';

export const VENUE_IMAGES = ResortGuidVenueImages;

export const roomImage = (room: string): ImageSourcePropType => {
  const key = venueImageByRoom[room] as VenueImageKey | undefined;
  return key ? ResortGuidVenueImages[key] : ResortGuidVenueImages.banquetRoom;
};
