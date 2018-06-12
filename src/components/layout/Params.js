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
      name: 'Samsung S7 Edge Snapdragon',
      price: 500,
      descr: 'Beautifully designed inside and out, the Samsung Galaxy S7 edge exceeds your expectations. ' +
      'The slim dual-edge design ensures a great fit and feel whether in your hands or your pocket.',
      image: 'http://via.placeholder.com/150x150' },
    { id: 1,
      name: 'Audi Q7 2.0 TFSI',
      price: 100000,
      descr: 'The Q7 is the first Audi SUV to use very-high-speed FlexRay optical fiber data bus technology, ' +
      'which interconnects all electrical/electronic systems, particularly the latest generation ' +
      'Multi Media Interface, Adaptive Air Suspension, and the multitude of new driver assistance systems.',
      image: 'http://via.placeholder.com/150x150' },
    { id: 2,
      name: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
      price: 500,
      descr: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series' +
      ' washing machine: GX-30-70KG sample washing machine: Ss washing machine ...',
      image: 'http://via.placeholder.com/150x150' },
    { id: 3,
      name: 'ASUS GL503VM-GZ040T',
      price: 2000,
      descr: 'With up to the latest 8th Gen Intel® Core™ processors and NVIDIA® GeForce® GTX 10-Series graphics, ' +
      'ROG Strix GL503 has all the necessary tools you need for gaming mastery. So gear up, stand your ground, and ' +
      'prepare for combat!',
      image: 'http://via.placeholder.com/150x150' },
    { id: 4,
      name: 'Xiaomi Stratos',
      price: 230,
      descr: 'Amazfit Stratos is a premium multisport GPS smartwatch with 5 ATM water resistance, VO2max fitness ' +
      'level analysis, heart rate sensor, and transflective always-on color touch display.',
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
    { id: 0, value: '', name: 'login', type: 'email', icon: 'account_circle', label: 'E-mail address', descr: 'enter your e-mail address' },
    { id: 1, value: '', name: 'password', type: 'password', icon: 'vpn_key', label: 'Password', descr: 'enter your password' },
    { id: 2, value: '', name: 'confirm_password', type: 'password', icon: 'vpn_key', label: 'Repeat password', descr: 'confirm your password' },
    { id: 3, value: '', name: 'first_name', type: 'text', icon: 'person', label: 'First name', descr: 'enter your first name' },
    { id: 4, value: '', name: 'last_name', type: 'text', icon: 'person', label: 'Last name', descr: 'enter your last name' },
    { id: 5, value: '', name: 'phone', type: 'text', icon: 'phone', label: 'Phone number', descr: 'enter your phone number' }
  ]
}
