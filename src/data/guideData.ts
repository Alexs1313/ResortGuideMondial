import {ImageSourcePropType} from 'react-native';

export type GuideCategory = 'Restaurant' | 'Rooms';

export type GuideItem = {
  id: string;
  name: string;
  tag: GuideCategory;
  subtitle: string;
  location: string;
  hours: string;
  description: string;
  highlights: string[];
  image: ImageSourcePropType;
};

const GUIDE_IMAGES = {
  LeGrandSalon: require('../../elements/i/LeGrandSalon.png'),
  TheVelvetDiningHall: require('../../elements/i/TheVelvetDiningHall.png'),
  AuroraBreakfastRoom: require('../../elements/i/AuroraBreakfastRoom.png'),
  TheSapphireLounge: require('../../elements/i/TheSapphireLounge.png'),
  MaisonTerrace: require('../../elements/i/MaisonTerrace.png'),
  TheGrandBanquetRoom: require('../../elements/i/TheGrandBanquetRoom.png'),
  RoyalSuite: require('../../elements/i/RoyalSuite.png'),
  DeluxeKingRoom: require('../../elements/i/DeluxeKingRoom.png'),
  ExecutiveTwinRoom: require('../../elements/i/ExecutiveTwinRoom.png'),
  PanoramaCornerSuite: require('../../elements/i/PanoramaCornerSuite.png'),
  ClassicComfortRoom: require('../../elements/i/ClassicComfortRoom.png'),
  TheCelebrationSuite: require('../../elements/i/TheCelebrationSuite.png'),
  TheGardenDiningRoom: require('../../elements/i/TheGardenDiningRoom.png'),
  ThePrivateChefRoom: require('../../elements/i/ThePrivateChefRoom.png'),
  PremierFamilyRoom: require('../../elements/i/PremierFamilyRoom.png'),
  MidnightLoungeRoom: require('../../elements/i/MidnightLoungeRoom.png'),
  TheCasinoAtriumLounge: require('../../elements/i/TheCasinoAtriumLounge.png'),
} satisfies Record<string, ImageSourcePropType>;

const img = (file: keyof typeof GUIDE_IMAGES): ImageSourcePropType =>
  GUIDE_IMAGES[file];

export const GUIDE_ITEMS: GuideItem[] = [
  {
    id: 'le-grand-salon',
    name: 'Le Grand Salon',
    tag: 'Restaurant',
    subtitle: 'Signature Fine Dining',
    location: 'Level 1, East Wing',
    hours: '7:00 PM – 11:30 PM',
    description:
      'Our flagship restaurant presents an elegant culinary journey through classic European dining with a modern resort touch. The space is designed for evening dinners, private celebrations, and refined guest experiences, with soft lighting, deep-toned interiors, and a calm premium atmosphere.',
    highlights: [
      'Signature tasting menu',
      'Private dining room',
      'Award-winning wine cellar',
      'Live piano evenings',
    ],
    image: img('LeGrandSalon'),
  },
  {
    id: 'the-velvet-dining-hall',
    name: 'The Velvet Dining Hall',
    tag: 'Restaurant',
    subtitle: 'Elegant Dinner Hall',
    location: 'Level 1, Central Hall',
    hours: '6:30 PM – 11:00 PM',
    description:
      'A spacious restaurant zone created for guests who enjoy a polished dinner setting without feeling overly formal. The hall combines rich textures, warm table lighting, and comfortable seating, making it suitable for couples, families, and small groups staying inside the resort.',
    highlights: [
      'Elegant dinner service',
      'Seasonal chef specials',
      'Spacious table layout',
      'Soft evening lighting',
      'Suitable for group dining',
    ],
    image: img('TheVelvetDiningHall'),
  },
  {
    id: 'aurora-breakfast-room',
    name: 'Aurora Breakfast Room',
    tag: 'Restaurant',
    subtitle: 'Morning Dining',
    location: 'Level 1, Garden Side',
    hours: '7:00 AM – 11:00 AM',
    description:
      'A bright morning dining area for relaxed breakfasts and light early-day meals. Large windows, calm décor, and a quieter atmosphere make this zone ideal for guests beginning their day before exploring the resort, attending meetings, or preparing for travel.',
    highlights: [
      'Continental breakfast',
      'Fresh pastries',
      'Coffee and tea station',
      'Quiet morning atmosphere',
    ],
    image: img('AuroraBreakfastRoom'),
  },
  {
    id: 'the-sapphire-lounge',
    name: 'The Sapphire Lounge',
    tag: 'Restaurant',
    subtitle: 'Evening Lounge',
    location: 'Level 1, West Wing',
    hours: '5:00 PM – 1:00 AM',
    description:
      'A stylish lounge zone designed for evening drinks, light bites, and relaxed conversations. It sits close to the main entertainment areas but keeps a more intimate mood, with deep blue details, warm metallic accents, and comfortable low seating.',
    highlights: [
      'Signature cocktails',
      'Small plate menu',
      'Lounge seating',
      'Evening music',
      'Great for casual meetings',
      'Late-night service',
    ],
    image: img('TheSapphireLounge'),
  },
  {
    id: 'maison-terrace',
    name: 'Maison Terrace',
    tag: 'Restaurant',
    subtitle: 'Outdoor Terrace',
    location: 'Level 2, Outdoor Terrace',
    hours: '12:00 PM – 10:00 PM',
    description:
      'An open-air restaurant zone for guests who prefer a lighter, scenic dining experience. The terrace is arranged for lunches, sunset dinners, and casual resort moments, with plants, warm lamps, and a more relaxed atmosphere than the main dining hall.',
    highlights: [
      'Outdoor seating',
      'Sunset dinner atmosphere',
      'Light lunch menu',
      'Fresh desserts',
      'Comfortable resort view',
    ],
    image: img('MaisonTerrace'),
  },
  {
    id: 'the-grand-banquet-room',
    name: 'The Grand Banquet Room',
    tag: 'Restaurant',
    subtitle: 'Private Events',
    location: 'Level 2, Event Wing',
    hours: 'By Reservation',
    description:
      'A flexible restaurant event space for private dinners, birthdays, corporate evenings, VIP celebrations, and themed gatherings. The room can be styled with different table layouts, lighting moods, floral details, and decoration concepts depending on the selected occasion.',
    highlights: [
      'Private event setup',
      'Custom table arrangement',
      'Decoration examples',
      'Celebration-friendly layout',
      'Suitable for VIP dinners',
      'Menu planning options',
      'Photo-ready interior',
    ],
    image: img('TheGrandBanquetRoom'),
  },
  {
    id: 'royal-suite',
    name: 'Royal Suite',
    tag: 'Rooms',
    subtitle: 'Premium Suite',
    location: 'Level 4, East Wing',
    hours: 'Available 24/7',
    description:
      'A premium suite designed for guests who want a spacious and calm private stay. The room includes a comfortable sleeping area, elegant seating zone, refined lighting, and enough space for quiet rest before or after resort activities.',
    highlights: [
      'King-size bed',
      'Private lounge corner',
      'Elegant bathroom',
      'Evening lighting mode',
      'Premium room service access',
    ],
    image: img('RoyalSuite'),
  },
  {
    id: 'deluxe-king-room',
    name: 'Deluxe King Room',
    tag: 'Rooms',
    subtitle: 'Deluxe Guest Room',
    location: 'Level 3, Central Wing',
    hours: 'Available 24/7',
    description:
      'A refined guest room for comfortable short or extended stays. Its layout focuses on simplicity, warmth, and convenience, making it suitable for solo guests, couples, or visitors who want a polished room without needing a large suite.',
    highlights: [
      'King-size bed',
      'Work desk',
      'Soft ambient lighting',
      'Room service access',
    ],
    image: img('DeluxeKingRoom'),
  },
  {
    id: 'executive-twin-room',
    name: 'Executive Twin Room',
    tag: 'Rooms',
    subtitle: 'Twin Guest Room',
    location: 'Level 3, West Wing',
    hours: 'Available 24/7',
    description:
      'A practical yet elegant room option for two guests traveling together. The space includes separate beds, comfortable storage, a calm color palette, and easy access to the resort’s dining and entertainment areas.',
    highlights: [
      'Two separate beds',
      'Comfortable storage',
      'Quiet floor location',
      'Suitable for friends or colleagues',
      'Fast access to elevators',
    ],
    image: img('ExecutiveTwinRoom'),
  },
  {
    id: 'panorama-corner-suite',
    name: 'Panorama Corner Suite',
    tag: 'Rooms',
    subtitle: 'Corner Suite',
    location: 'Level 5, Corner Wing',
    hours: 'Available 24/7',
    description:
      'A spacious corner suite with a wider layout and a more scenic room atmosphere. It is designed for guests who want extra privacy, a stronger sense of space, and a premium stay experience within the same resort building.',
    highlights: [
      'Corner view',
      'Separate seating zone',
      'Large bathroom',
      'Premium minibar',
      'Ideal for longer stays',
      'Quiet private atmosphere',
    ],
    image: img('PanoramaCornerSuite'),
  },
  {
    id: 'classic-comfort-room',
    name: 'Classic Comfort Room',
    tag: 'Rooms',
    subtitle: 'Comfort Room',
    location: 'Level 2, North Wing',
    hours: 'Available 24/7',
    description:
      'A comfortable standard room with everything needed for a calm resort stay. The design is simple, warm, and practical, making it a natural choice for guests who want easy access to restaurants, services, and event spaces.',
    highlights: [
      'Cozy sleeping area',
      'Smart room layout',
      'Easy restaurant access',
      'Daily housekeeping',
    ],
    image: img('ClassicComfortRoom'),
  },
  {
    id: 'the-celebration-suite',
    name: 'The Celebration Suite',
    tag: 'Rooms',
    subtitle: 'Celebration Suite',
    location: 'Level 4, South Wing',
    hours: 'Available 24/7',
    description:
      'A special suite created for romantic stays, birthdays, anniversaries, and private resort moments. The room can be paired with decoration ideas from the restaurant event section, making it useful for guests who want to organize a memorable evening inside the building.',
    highlights: [
      'Romantic setup option',
      'Spacious seating area',
      'Celebration décor support',
      'Dessert service option',
      'Best for anniversaries',
      'Private evening atmosphere',
    ],
    image: img('TheCelebrationSuite'),
  },
  {
    id: 'the-garden-dining-room',
    name: 'The Garden Dining Room',
    tag: 'Restaurant',
    subtitle: 'Garden Dining',
    location: 'Level 1, Inner Courtyard Side',
    hours: '12:00 PM – 10:30 PM',
    description:
      'A calmer dining zone with natural accents, floral décor, and a softer daytime-to-evening mood. It works well for lunch meetings, relaxed family meals, and smaller celebrations that need a beautiful but not overly formal atmosphere.',
    highlights: [
      'Floral table styling',
      'Lunch and dinner menu',
      'Calm indoor garden mood',
      'Family-friendly seating',
      'Great for daytime events',
    ],
    image: img('TheGardenDiningRoom'),
  },
  {
    id: 'the-private-chef-room',
    name: 'The Private Chef Room',
    tag: 'Restaurant',
    subtitle: 'Private Chef Experience',
    location: 'Level 1, Behind Main Restaurant',
    hours: 'By Reservation',
    description:
      'A secluded dining space for guests who want a more personal culinary experience. The room is designed for tasting menus, chef-led dinners, small VIP gatherings, and private restaurant events with controlled lighting and dedicated service.',
    highlights: [
      'Private chef experience',
      'Tasting menu option',
      'Dedicated service',
      'Small-group atmosphere',
      'Premium wine pairing',
      'Quiet private setting',
    ],
    image: img('ThePrivateChefRoom'),
  },
  {
    id: 'premier-family-room',
    name: 'Premier Family Room',
    tag: 'Rooms',
    subtitle: 'Family Room',
    location: 'Level 3, Garden Side',
    hours: 'Available 24/7',
    description:
      'A larger room option for guests staying with family or a small group. The room keeps a comfortable resort style while offering more practical space, seating, and storage for a shared stay.',
    highlights: [
      'Larger room layout',
      'Extra seating',
      'Family-friendly setup',
      'Spacious wardrobe',
      'Close to breakfast area',
    ],
    image: img('PremierFamilyRoom'),
  },
  {
    id: 'midnight-lounge-room',
    name: 'Midnight Lounge Room',
    tag: 'Restaurant',
    subtitle: 'Late-Night Lounge',
    location: 'Level 1, Near Entertainment Hall',
    hours: '8:00 PM – 2:00 AM',
    description:
      'A late-night restaurant and lounge zone for guests who want light food, drinks, and a stylish after-event atmosphere. It naturally connects the entertainment side of the resort with the dining experience, creating a smooth evening flow inside the same building.',
    highlights: [
      'Late-night menu',
      'Lounge music',
      'Drinks and desserts',
      'Near entertainment hall',
      'Perfect after events',
      'Soft dark interior lighting',
    ],
    image: img('MidnightLoungeRoom'),
  },
  {
    id: 'the-casino-atrium-lounge',
    name: 'The Casino Atrium Lounge',
    tag: 'Restaurant',
    subtitle: 'Casino Atrium Lounge',
    location: 'Level 1, Casino Atrium',
    hours: '6:00 PM – 2:00 AM',
    description:
      'A refined restaurant and lounge zone placed near the casino area, designed for guests who want dinner, drinks, and a lively evening atmosphere without leaving the main resort building. The space combines elegant table seating, a bar-style lounge mood, and soft background music, making it ideal before or after entertainment activities.',
    highlights: [
      'Casino-side dining atmosphere',
      'Signature cocktails',
      'Light dinner menu',
      'Late-night desserts',
      'Lounge seating',
      'Perfect before evening shows',
      'Great for groups and couples',
      'Close to entertainment areas',
    ],
    image: img('TheCasinoAtriumLounge'),
  },
];

export type GuideFilter = 'All' | GuideCategory;

export const getFilteredGuideItems = (filter: GuideFilter): GuideItem[] => {
  if (filter === 'All') {
    return GUIDE_ITEMS;
  }
  return GUIDE_ITEMS.filter(item => item.tag === filter);
};
