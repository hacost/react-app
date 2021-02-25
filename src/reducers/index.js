const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        myList
      };
    default:
      return state;
  }
};

export default reducer;
