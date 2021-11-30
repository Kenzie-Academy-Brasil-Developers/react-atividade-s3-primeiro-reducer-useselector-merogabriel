const initialState = ["Banana", "Maçã", "Kiwi"];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      const { fruit } = action;
      return [...state, fruit];

    default:
      return state;
  }
};


export default fruitsReducer;