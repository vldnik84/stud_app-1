/* eslint-disable indent */
export default {
  sort_options: [
    { id: 0, name: 'newest' },
    { id: 1, name: 'oldest' },
    { id: 2, name: 'cheaper' },
    { id: 3, name: 'expensive' }
  ],

  empty_product: {
    title: 'No items',
    image: 'http://via.placeholder.com/150x150',
    price: 'priceless',
    description: 'This category does not contain any items.',
    empty: true
  },

  input_fields: [
    { id: 0, name: 'name', type: 'text', icon: 'person', label: 'Your name', helper: 'enter your name', value: '' },
    { id: 1, name: 'email', type: 'email', icon: 'email', label: 'E-mail address', helper: 'enter your e-mail address',  value: '' },
    { id: 2, name: 'phone', type: 'tel', icon: 'phone', label: 'Phone number', helper: 'enter your phone number',  value: '' },
    { id: 3, name: 'message', length: '230', icon: 'message', label: 'Your message', helper: 'Type a message to a seller',  value: '' }
  ]
}
