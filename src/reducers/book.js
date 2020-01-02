/* eslint-disable arrow-parens */
const bookReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.payload,
      ];

    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
