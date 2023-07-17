const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return action.payload;
    
      case "LOGOUT_USER":
        return [];

    default:
      return state;
  }
};

export default recipesReducer;
