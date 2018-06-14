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
      title: 'Samsung S7 Edge Snapdragon',
      price: 500,
      description: 'Beautifully designed inside and out, the Samsung Galaxy S7 edge exceeds your expectations. ' +
      'The slim dual-edge design ensures a great fit and feel whether in your hands or your pocket.',
      image: 'http://via.placeholder.com/150x150' },
    { id: 1,
      title: 'Audi Q7 2.0 TFSI',
      price: 100000,
      description: 'The Q7 is the first Audi SUV to use very-high-speed FlexRay optical fiber data bus technology, ' +
      'which interconnects all electrical/electronic systems, particularly the latest generation ' +
      'Multi Media Interface, Adaptive Air Suspension, and the multitude of new driver assistance systems.',
      image: 'http://via.placeholder.com/150x150' },
    { id: 2,
      title: 'Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor',
      price: 500,
      description: 'Horizontal Washing Machine (belly type) with CE Approved & SGS Audited GX series' +
      ' washing machine: GX-30-70KG sample washing machine: Ss washing machine ...',
      image: 'http://via.placeholder.com/150x150' },
    { id: 3,
      title: 'ASUS GL503VM-GZ040T',
      price: 2000,
      description: 'With up to the latest 8th Gen Intel® Core™ processors and NVIDIA® GeForce® GTX 10-Series graphics, ' +
      'ROG Strix GL503 has all the necessary tools you need for gaming mastery. So gear up, stand your ground, and ' +
      'prepare for combat!',
      image: 'http://via.placeholder.com/150x150' },
    { id: 4,
      title: 'Xiaomi Stratos',
      price: 230,
      description: 'Amazfit Stratos is a premium multisport GPS smartwatch with 5 ATM water resistance, VO2max fitness ' +
      'level analysis, heart rate sensor, and transflective always-on color touch display.',
      image: 'http://via.placeholder.com/150x150' }
  ],

  categories: [
    { id: 0,
      name: 'Cars',
      subsection: [
        { id: 0, name: 'Sport' },
        { id: 1, name: 'Coupe' },
        { id: 2, name: 'Estate' }
        ]
    },
    { id: 1,
      name: 'Bags, Cases & Boxes',
      subsection: [
        { id: 0, name: 'Tin Box' },
        { id: 1, name: 'Electronic Box' },
        { id: 2, name: 'Gift Box' }
        ]
    },
    { id: 2,
      name: 'Kitchenware',
      subsection: [
        { id: 0, name: 'Food storage & organising' },
        { id: 1, name: 'Cooking accessories' },
        { id: 2, name: 'Coffee & tea makers' },
        { id: 3, name: 'Pots & pans' }
      ]
    },
    { id: 3,
      name: 'Lights & Lighting',
      subsection: [
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
  ]
}
