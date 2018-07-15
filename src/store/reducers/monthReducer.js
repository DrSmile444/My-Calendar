const initialState = {
  todoDays: [],
  popups: []
};

const monthReducer = (state = initialState, action) => {
  const todoDays = state.todoDays;
  switch (action.type) {
    case "ADD_DAY":
      return { ...state, todoDays: [...todoDays, action.payload] };

    case "SET_DAY":
      return {
        ...state, todoDays: todoDays.map((el, i) => {
          if (i === action.payload.dayId) {
            return { ...todoDays, ...action.payload }
          }
        })
      }
    case 'PUSH_OPENED_POPUP':
      return { ...state, popups: [...state.popups, action.payload] }
    default:
      return state;
  }
};

export default monthReducer;
