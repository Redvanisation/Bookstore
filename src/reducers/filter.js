const filterReducer = (state = null, action) => {
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
