export type CalendarEvent = {
  id: string;
  date: string;
  title: string;
  time: string;
  tag: string;
  location: string;
  description: string;
};

const ACCENT_TAGS = new Set([
  'Gala',
  'Dining',
  'Dinner',
  'Tasting',
  'Private',
  'Brunch',
  'Breakfast',
  'Family',
  'Afternoon',
  'Business',
  'Decor',
]);

export const getTagStyle = (tag: string) => {
  if (ACCENT_TAGS.has(tag)) {
    return {backgroundColor: '#1A1A30', color: '#C9A020'};
  }
  return {backgroundColor: '#1A2840', color: '#7A8BA8'};
};

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: 'golden-welcome-dinner-2026-05-25',
    date: '2026-05-25',
    title: 'Golden Welcome Dinner',
    time: '7:00 PM',
    tag: 'Dining',
    location: 'Le Grand Salon',
    description:
      'A refined opening dinner with seasonal European dishes, soft table lighting, and polished service.',
  },
  {
    id: 'piano-dessert-evening-2026-05-25',
    date: '2026-05-25',
    title: 'Piano & Dessert Evening',
    time: '9:00 PM',
    tag: 'Music',
    location: 'Le Grand Salon',
    description:
      'A calm late-evening experience with live piano, desserts, tea, and coffee pairings.',
  },
  {
    id: 'midnight-lounge-social-2026-05-25',
    date: '2026-05-25',
    title: 'Midnight Lounge Social',
    time: '11:30 PM',
    tag: 'Lounge',
    location: 'Midnight Lounge Room',
    description:
      'A stylish after-hours gathering with light bites, desserts, and relaxed lounge music.',
  },
  {
    id: 'chefs-private-tasting-2026-05-26',
    date: '2026-05-26',
    title: "Chef's Private Tasting",
    time: '6:30 PM',
    tag: 'Tasting',
    location: 'The Private Chef Room',
    description:
      'A small-group tasting experience with chef-curated dishes and wine pairing suggestions.',
  },
  {
    id: 'casino-atrium-cocktail-night-2026-05-26',
    date: '2026-05-26',
    title: 'Casino Atrium Cocktail Night',
    time: '8:45 PM',
    tag: 'Lounge',
    location: 'The Casino Atrium Lounge',
    description:
      'A lively evening with signature cocktails, elegant seating, and a casino-side atmosphere.',
  },
  {
    id: 'late-jazz-table-session-2026-05-26',
    date: '2026-05-26',
    title: 'Late Jazz Table Session',
    time: '10:15 PM',
    tag: 'Music',
    location: 'The Sapphire Lounge',
    description:
      'A soft jazz evening with lounge seating, small plates, and selected drinks.',
  },
  {
    id: 'garden-lunch-gathering-2026-05-28',
    date: '2026-05-28',
    title: 'Garden Lunch Gathering',
    time: '1:00 PM',
    tag: 'Dining',
    location: 'The Garden Dining Room',
    description:
      'A relaxed daytime lunch with floral table styling and a calm indoor garden atmosphere.',
  },
  {
    id: 'maison-terrace-sunset-dinner-2026-05-28',
    date: '2026-05-28',
    title: 'Maison Terrace Sunset Dinner',
    time: '7:30 PM',
    tag: 'Dinner',
    location: 'Maison Terrace',
    description:
      'An open-air dinner experience with sunset lighting, light courses, and fresh desserts.',
  },
  {
    id: 'vip-private-dinner-preview-2026-05-28',
    date: '2026-05-28',
    title: 'VIP Private Dinner Preview',
    time: '9:00 PM',
    tag: 'Private',
    location: 'The Grand Banquet Room',
    description:
      'A private dinner setup preview for VIP celebrations, corporate dinners, and family gatherings.',
  },
  {
    id: 'signature-wine-pairing-dinner-2026-05-29',
    date: '2026-05-29',
    title: 'Signature Wine Pairing Dinner',
    time: '7:00 PM',
    tag: 'Gala',
    location: 'Le Grand Salon',
    description:
      'A formal multi-course dinner with selected wine pairings and premium evening service.',
  },
  {
    id: 'crystal-bar-champagne-hour-2026-05-29',
    date: '2026-05-29',
    title: 'Crystal Bar Champagne Hour',
    time: '9:30 PM',
    tag: 'Music',
    location: 'The Sapphire Lounge',
    description:
      'A lounge event with Champagne pairings, soft music, and relaxed table service.',
  },
  {
    id: 'casino-side-evening-bites-2026-05-29',
    date: '2026-05-29',
    title: 'Casino-Side Evening Bites',
    time: '10:45 PM',
    tag: 'Social',
    location: 'The Casino Atrium Lounge',
    description:
      'A casual late-evening event with small plates, desserts, drinks, and lively casino-adjacent atmosphere.',
  },
  {
    id: 'grand-celebration-brunch-2026-05-30',
    date: '2026-05-30',
    title: 'Grand Celebration Brunch',
    time: '11:30 AM',
    tag: 'Brunch',
    location: 'The Velvet Dining Hall',
    description:
      'A polished brunch with warm dishes, pastries, fruit, coffee, and relaxed seating.',
  },
  {
    id: 'romantic-table-setup-showcase-2026-05-30',
    date: '2026-05-30',
    title: 'Romantic Table Setup Showcase',
    time: '5:30 PM',
    tag: 'Decor',
    location: 'The Private Chef Room',
    description:
      'A showcase of romantic restaurant table arrangements with candles, flowers, and dessert presentation.',
  },
  {
    id: 'diamond-jubilee-gala-2026-05-30',
    date: '2026-05-30',
    title: 'Diamond Jubilee Gala',
    time: '7:00 PM',
    tag: 'Gala',
    location: 'The Grand Banquet Room',
    description:
      'A large evening celebration with formal table arrangements, live music, and refined dinner service.',
  },
  {
    id: 'late-night-jazz-champagne-2026-05-30',
    date: '2026-05-30',
    title: 'Late Night Jazz & Champagne',
    time: '9:30 PM',
    tag: 'Music',
    location: 'The Sapphire Lounge',
    description:
      'A stylish after-party with a resident jazz quartet and curated Champagne pairings.',
  },
  {
    id: 'midnight-dessert-lounge-2026-05-30',
    date: '2026-05-30',
    title: 'Midnight Dessert Lounge',
    time: '12:00 AM',
    tag: 'Dessert',
    location: 'Midnight Lounge Room',
    description:
      'A late-night dessert event with pastries, chocolate plates, coffee, and relaxed music.',
  },
  {
    id: 'aurora-morning-breakfast-2026-05-31',
    date: '2026-05-31',
    title: 'Aurora Morning Breakfast',
    time: '8:30 AM',
    tag: 'Breakfast',
    location: 'Aurora Breakfast Room',
    description:
      'A calm breakfast with fresh pastries, coffee, tea, fruit, and warm morning dishes.',
  },
  {
    id: 'family-garden-lunch-2026-05-31',
    date: '2026-05-31',
    title: 'Family Garden Lunch',
    time: '12:30 PM',
    tag: 'Family',
    location: 'The Garden Dining Room',
    description:
      'A relaxed lunch with family-friendly seating, soft décor, and comfortable indoor garden mood.',
  },
  {
    id: 'terrace-tea-pastries-2026-05-31',
    date: '2026-05-31',
    title: 'Terrace Tea & Pastries',
    time: '4:00 PM',
    tag: 'Afternoon',
    location: 'Maison Terrace',
    description:
      'An afternoon terrace event with tea, coffee, light desserts, and a peaceful outdoor setting.',
  },
  {
    id: 'corporate-dinner-setup-preview-2026-06-02',
    date: '2026-06-02',
    title: 'Corporate Dinner Setup Preview',
    time: '6:00 PM',
    tag: 'Business',
    location: 'The Grand Banquet Room',
    description:
      'A restaurant event concept showing how the banquet room can be arranged for formal business dinners.',
  },
  {
    id: 'private-chef-evening-2026-06-02',
    date: '2026-06-02',
    title: 'Private Chef Evening',
    time: '8:00 PM',
    tag: 'Tasting',
    location: 'The Private Chef Room',
    description:
      'A quiet chef-led dinner with a curated menu, controlled lighting, and dedicated service.',
  },
  {
    id: 'velvet-dinner-night-2026-06-03',
    date: '2026-06-03',
    title: 'Velvet Dinner Night',
    time: '7:15 PM',
    tag: 'Dining',
    location: 'The Velvet Dining Hall',
    description:
      'A classic evening dinner with seasonal chef specials and a refined but comfortable atmosphere.',
  },
  {
    id: 'casino-atrium-lounge-night-2026-06-03',
    date: '2026-06-03',
    title: 'Casino Atrium Lounge Night',
    time: '10:00 PM',
    tag: 'Lounge',
    location: 'The Casino Atrium Lounge',
    description:
      'A lively resort lounge event with cocktails, desserts, and a social atmosphere close to the casino area.',
  },
];

const EVENT_DATES = new Set(CALENDAR_EVENTS.map(e => e.date));

export const hasEventsOnDate = (date: string) => EVENT_DATES.has(date);

export const getEventsForDate = (date: string): CalendarEvent[] =>
  CALENDAR_EVENTS.filter(event => event.date === date);

export const formatMonthLabel = (year: number, month: number) => {
  const label = new Date(year, month, 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return label;
};

export const getDaysInMonth = (year: number, month: number) => {
  const count = new Date(year, month + 1, 0).getDate();
  return Array.from({length: count}, (_, i) => {
    const day = i + 1;
    const date = new Date(year, month, day);
    const iso = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0'),
    ].join('-');
    const weekday = date
      .toLocaleString('en-US', {weekday: 'short'})
      .slice(0, 3)
      .toUpperCase();
    return {day, iso, weekday};
  });
};

export const CALENDAR_TODAY = '2026-05-27';
