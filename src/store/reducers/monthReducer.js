const initialState = {
  todoDays: []
};

const monthReducer = (state = initialState, action) => {
  const todoDays = state.todoDays;
  switch (action.type) {
    case "ADD_DAY":
      return { ...state, todoDays: [...todoDays, action.payload] };

    case "SET_DAY":

    default:
      return state;
  }
};

export default monthReducer;
