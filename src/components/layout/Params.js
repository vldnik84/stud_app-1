/* eslint-disable indent */
export default {
  sortOptions: [
    { id: 0, name: 'Which ads should go first:' },
    { id: 1, name: 'newest' },
    { id: 2, name: 'oldest' },
    { id: 3, name: 'cheaper' },
    { id: 4, name: 'expensive' }
  ],

  products: [
    { id: 0,
      name: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
      price: 500,
      descr: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series' +
      ' washing machine: GX-30-70KG sample washing machine: Ss washing machine ...',
      image: 'http://via.placeholder.com/150x150' },
    { id: 1,
      name: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
      price: 500,
      descr: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series' +
      ' washing machine: GX-30-70KG sample washing machine: Ss washing machine ...',
      image: 'http://via.placeholder.com/150x150' },
    { id: 2,
      name: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
      price: 500,
      descr: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series' +
      ' washing machine: GX-30-70KG sample washing machine: Ss washing machine ...',
      image: 'http://via.placeholder.com/150x150' },
    { id: 3,
      name: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
      price: 500,
      descr: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series' +
      ' washing machine: GX-30-70KG sample washing machine: Ss washing machine ...',
      image: 'http://via.placeholder.com/150x150' },
    { id: 4,
      name: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
      price: 500,
      descr: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series' +
      ' washing machine: GX-30-70KG sample washing machine: Ss washing machine ...',
      image: 'http://via.placeholder.com/150x150' }
  ],

  categories: [
    { id: 0,
      name: 'Cars',
      categories: [
        { id: 0, name: 'Sport' },
        { id: 1, name: 'Coupe' },
        { id: 2, name: 'Estate' }
        ]
    },
    { id: 1,
      name: 'Bags, Cases & Boxes',
      categories: [
        { id: 0, name: 'Tin Box' },
        { id: 1, name: 'Electronic Box' },
        { id: 2, name: 'Gift Box' }
        ]
    },
    { id: 2,
      name: 'Kitchenware',
      categories: [
        { id: 0, name: 'Food storage & organising' },
        { id: 1, name: 'Cooking accessories' },
        { id: 2, name: 'Coffee & tea makers' },
        { id: 3, name: 'Pots & pans' }
      ]
    },
    { id: 3,
      name: 'Lights & Lighting',
      categories: [
        { id: 0, name: 'Halogen Bulb' },
        { id: 1, name: 'Led Lamp' },
        { id: 2, name: 'Outdoor Lighting' }
      ]
    }
  ],

  pagination: [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id: 2, name: '3' },
    { id: 3, name: '4' },
    { id: 4, name: '5' }
  ],

  signups: [
    { id: 0, name: 'login', type: 'email', value: '', icon: 'account_circle', label: 'E-mail address', descr: 'enter your e-mail address' },
    { id: 1, name: 'password', type: 'text', value: '', icon: 'vpn_key', label: 'Password', descr: 'enter your password' },
    { id: 2, name: 'confirm_pass', type: 'text', value: '', icon: 'vpn_key', label: 'Repeat password', descr: 'confirm your password' },
    { id: 3, name: 'first_name', type: 'text', value: '', icon: 'person', label: 'First name', descr: 'enter your first name' },
    { id: 4, name: 'last_name', type: 'text', value: '', icon: 'person', label: 'Last name', descr: 'enter your last name' },
    { id: 5, name: 'phone', type: 'text', value: '', icon: 'phone', label: 'Phone number', descr: 'enter your phone number' }
  ]
}
