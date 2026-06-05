import {ImageSourcePropType} from 'react-native';

import {
  venueImageByRoom,
  ResortGuideMondialVenueImages,
  type VenueImageKey,
} from '../../ResortGuideMondialReliquary';

export const VENUE_IMAGES = ResortGuideMondialVenueImages;

export const roomImage = (room: string): ImageSourcePropType => {
  const key = venueImageByRoom[room] as VenueImageKey | undefined;
  return key ? ResortGuideMondialVenueImages[key] : ResortGuideMondialVenueImages.banquetRoom;
};
