export default {
  sortCriteriaList: [
    { id: 0, title: 'Date', params: [
        { id: 0, name: 'sort-date', val: 'new', paramName: 'Newest' },
        { id: 1, name: 'sort-date', val: 'old', paramName: 'Oldest' }
      ]
    },
    { id: 1, title: 'Name', params: [
        { id: 0, name: 'sort-name', val: 'asc', paramName: 'Ascending' },
        { id: 1, name: 'sort-name', val: 'desc', paramName: 'Descending' }
      ]
    },
    { id: 2, title: 'Price', params: [
        { id: 0, name: 'sort-price', val: 'inc', paramName: 'Lowest' },
        { id: 1, name: 'sort-price', val: 'dec', paramName: 'Highest' }
      ]
    }
  ]
}

