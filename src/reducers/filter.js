
const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default filterReducer;
