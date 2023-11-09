export const mockAirlinesResult = [
  {
    id: 0,
    passengers: 3,
    baggage: 3,

    airline: { name: 'France Airways', code: 'AF' },
    price: 500,
    from: 'Lebanon',
    to: 'Belgium',
    tripInfo: [
      {
        departureTime: new Date(),
        country: 'Lebanon',
        airport: 'BEY',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 1)),
        country: 'Dubai',
        airport: 'MIA',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 2)),
        country: 'France',
        airport: 'BIA',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 3)),
        country: 'Germany',
        airport: 'REZ',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 4)),
        country: 'Belgium',
        airport: 'BRU',
      },
    ],
    roundTripInfo: [
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 5)),
        country: 'Belgium',
        airport: 'BRU',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 6)),
        country: 'Germany',
        airport: 'REZ',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 7)),
        country: 'France',
        airport: 'BIA',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 8)),
        country: 'Dubai',
        airport: 'MIA',
      },
      {
        departureTime: new Date(),
        country: 'Lebanon',
        airport: 'BEY',
      },
    ],
  },
  {
    id: 1,
    passengers: 1,
    baggage: 1,
    airline: { name: 'Emirates', code: 'EK' },
    price: 800,
    from: 'UAE',
    to: 'Lebanon',
    tripInfo: [
      {
        departureTime: new Date(),
        country: 'Lebanon',
        airport: 'BEY',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 1)),
        country: 'Belgium',
        airport: 'DXB',
      },
    ],
    roundTripInfo: [
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 2)),
        country: 'Belgium',
        airport: 'DXB',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 3)),
        country: 'Lebanon',
        airport: 'BEY',
      },
    ],
  },
  {
    id: 2,
    passengers: 1,
    baggage: 4,

    price: 1200,

    airline: { name: 'Emirates', code: 'EK' },
    from: 'France',
    to: 'USA',
    tripInfo: [
      {
        departureTime: new Date(),
        country: 'France',
        airport: 'LYS',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 1)),
        country: 'USA',
        airport: 'MIA',
      },
    ],
    roundTripInfo: [],
  },
  {
    id: 3,
    passengers: 3,
    baggage: 3,
    price: 1500,
    airline: { name: 'Turkish Airlines', code: 'TK' },
    from: 'Turkey',
    to: 'USA',
    tripInfo: [
      {
        departureTime: new Date(),
        country: 'Turkey',
        airport: 'TUR',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 5)),
        country: 'USA',
        airport: 'MIA',
      },
    ],
    roundTripInfo: [],
  },
  {
    id: 4,
    passengers: 2,
    baggage: 4,
    price: 874,
    airline: { name: 'Qatar Airways', code: 'QR' },
    from: 'Qatar',
    to: 'England',
    tripInfo: [
      {
        departureTime: new Date(),
        country: 'Qatar',
        airport: 'TUR',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 5)),
        country: 'England',
        airport: 'MIA',
      },
    ],
    roundTripInfo: [],
  },
  {
    id: 5,
    passengers: 4,
    baggage: 2,
    price: 874,
    airline: { name: 'Emirates', code: 'EK' },
    from: 'Qatar',
    to: 'India',
    tripInfo: [
      {
        departureTime: new Date(),
        country: 'Qatar',
        airport: 'QTR',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 5)),
        country: 'England',
        airport: 'India',
      },
    ],
    roundTripInfo: [
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 5)),
        country: 'England',
        airport: 'India',
      },
      {
        departureTime: new Date(new Date().setDate(new Date().getDate() + 8)),
        country: 'Qatar',
        airport: 'QTR',
      },
    ],
  },

  // {
  //   id: 1,

  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 2,

  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },

  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },

  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },

  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },

  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 5,

  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },

  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },

  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },

  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },

  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },

  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },

  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },

  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },

  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 13,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 14,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },

  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },

  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
  // {
  //   id: 15,
  //   isRoundTrip: false,
  //   airline: { name: 'France Airways', code: 'AF' },
  //   tripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  //   roundTripInfo: [
  //     {
  //       time: '09:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 20 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '10:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 21 2022',
  //     },
  //     {
  //       time: '11:45 P.M.',
  //       country: 'Lebanon',
  //       airport: 'BEY',
  //       date: 'August 22 2022',
  //     },
  //   ],
  // },
];
