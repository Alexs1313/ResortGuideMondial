export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  availability: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'signature-spa',
    title: 'Signature Spa',
    description:
      'Indulge in curated treatments using premium product lines, calming rituals, and personalized wellness techniques.',
    availability: '60–120 min',
  },
  {
    id: 'in-room-dining',
    title: 'In-Room Dining',
    description:
      'Order breakfast, dinner, desserts, or late-night dishes directly to your room with elegant hotel-style service.',
    availability: 'Available 24/7',
  },
  {
    id: 'table-reservation',
    title: 'Table Reservation',
    description:
      'Reserve a table in the main restaurant, lounge, or private dining space for a planned evening inside the resort.',
    availability: 'Same day booking',
  },
  {
    id: 'housekeeping-request',
    title: 'Housekeeping Request',
    description:
      'Request room cleaning, fresh towels, linen change, bathroom amenities, or evening turn-down service.',
    availability: 'Available 24/7',
  },
  {
    id: 'private-transfer',
    title: 'Private Transfer',
    description:
      'Arrange a comfortable car transfer to or from the resort, airport, train station, or nearby city location.',
    availability: '30–90 min notice',
  },
  {
    id: 'luggage-assistance',
    title: 'Luggage Assistance',
    description:
      'Request help with luggage delivery, storage, room-to-lobby transfer, or check-out preparation.',
    availability: 'Available 24/7',
  },
  {
    id: 'celebration-setup',
    title: 'Celebration Setup',
    description:
      'Organize a room or restaurant setup for birthdays, anniversaries, romantic evenings, or private surprises.',
    availability: '4–24 hours notice',
  },
  {
    id: 'wake-up-call',
    title: 'Wake-Up Call',
    description:
      'Schedule a personal wake-up call for early departures, meetings, breakfast plans, or morning activities.',
    availability: 'Available 24/7',
  },
  {
    id: 'laundry-service',
    title: 'Laundry Service',
    description:
      'Request washing, drying, pressing, or garment care for shirts, dresses, suits, and travel clothing.',
    availability: 'Same day or next day',
  },
  {
    id: 'minibar-refill',
    title: 'Minibar Refill',
    description:
      'Refill selected drinks, snacks, water, and light refreshments in your room minibar.',
    availability: '20–60 min',
  },
  {
    id: 'pillow-menu',
    title: 'Pillow Menu',
    description:
      'Choose a pillow type for better comfort, including soft, firm, hypoallergenic, or neck-support options.',
    availability: '15–45 min',
  },
  {
    id: 'restaurant-event-planning',
    title: 'Restaurant Event Planning',
    description:
      'Request assistance with private dinners, corporate meals, family gatherings, and restaurant decoration ideas.',
    availability: 'By request',
  },
  {
    id: 'vip-lounge-access',
    title: 'VIP Lounge Access',
    description:
      'Request access details for a quieter lounge space with premium seating, drinks, and a more private atmosphere.',
    availability: 'Subject to availability',
  },
  {
    id: 'room-maintenance',
    title: 'Room Maintenance',
    description:
      'Report air conditioning, lighting, bathroom, safe, TV, or room equipment issues for staff support.',
    availability: 'Available 24/7',
  },
  {
    id: 'concierge-assistance',
    title: 'Concierge Assistance',
    description:
      'Ask for help with resort information, reservations, directions, event times, transport, or special guest requests.',
    availability: 'Available 24/7',
  },
  {
    id: 'flower-arrangement',
    title: 'Flower Arrangement',
    description:
      'Order fresh flowers for the room, restaurant table, celebration setup, or private evening arrangement.',
    availability: '3–24 hours notice',
  },
  {
    id: 'romantic-room-setup',
    title: 'Romantic Room Setup',
    description:
      'Arrange a refined room atmosphere with candles, flowers, dessert, soft lighting, and elegant decorative details.',
    availability: '6–24 hours notice',
  },
  {
    id: 'private-dining-room',
    title: 'Private Dining Room',
    description:
      'Book a secluded dining room for a quiet dinner, VIP meeting, celebration, or small private gathering.',
    availability: 'By reservation',
  },
  {
    id: 'breakfast-delivery',
    title: 'Breakfast Delivery',
    description:
      'Schedule breakfast delivery to your room with coffee, pastries, fruit, warm dishes, and selected beverages.',
    availability: '7:00 AM – 11:00 AM',
  },
  {
    id: 'evening-turn-down',
    title: 'Evening Turn-Down',
    description:
      'Prepare your room for the night with fresh towels, adjusted lighting, curtains, and bedside comfort details.',
    availability: '6:00 PM – 10:00 PM',
  },
  {
    id: 'wellness-appointment',
    title: 'Wellness Appointment',
    description:
      'Book a massage, relaxation treatment, sauna session, or calm wellness experience during your stay.',
    availability: '45–120 min',
  },
  {
    id: 'meeting-room-setup',
    title: 'Meeting Room Setup',
    description:
      'Request seating arrangement, water, coffee service, screen setup, and basic preparation for a business meeting.',
    availability: '2–12 hours notice',
  },
  {
    id: 'special-dessert-order',
    title: 'Special Dessert Order',
    description:
      'Order a personalized dessert plate for a birthday, anniversary, romantic dinner, or private celebration.',
    availability: '2–8 hours notice',
  },
  {
    id: 'late-check-out',
    title: 'Late Check-Out Request',
    description:
      'Request additional time before departure, depending on room availability and current resort occupancy.',
    availability: 'Subject to availability',
  },
  {
    id: 'early-check-in',
    title: 'Early Check-In Request',
    description:
      'Ask for earlier room access before the standard check-in time when available.',
    availability: 'Subject to availability',
  },
  {
    id: 'event-ticket-assistance',
    title: 'Event Ticket Assistance',
    description:
      'Get help viewing available resort activities, evening shows, restaurant events, and entertainment options.',
    availability: 'Same day support',
  },
  {
    id: 'room-decoration-preview',
    title: 'Room Decoration Preview',
    description:
      'Choose a decoration concept for a private moment, then preview how the room setup could be arranged.',
    availability: 'By request',
  },
  {
    id: 'chefs-tasting',
    title: "Chef's Tasting Request",
    description:
      'Request information about tasting menus, wine pairing options, and available chef-curated dining experiences.',
    availability: 'By reservation',
  },
  {
    id: 'transport-around-resort',
    title: 'Transport Around Resort',
    description:
      'Request internal assistance for moving between rooms, restaurant spaces, lounge spaces, and event zones.',
    availability: '15–40 min',
  },
  {
    id: 'guest-comfort-kit',
    title: 'Guest Comfort Kit',
    description:
      'Request extra blankets, slippers, hygiene items, sewing kit, chargers, adapters, or other comfort essentials.',
    availability: 'Available 24/7',
  },
];
