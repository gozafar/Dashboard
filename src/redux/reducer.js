const initialState = {
  user: null,
  comments: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.payload,
      };

    case "COMMENTS":
      return {
        ...state,
        comment: action.payload,
      };

    default:
      return state;
  }
};
