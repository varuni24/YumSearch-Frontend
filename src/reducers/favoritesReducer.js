const favoritesReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_USER_TO_STATE":
        return [
          ...state, ...action.payload.userFavorites
        ];

      case "ADD_TO_FAVORITES":
        return [...state, action.payload];
  
      case "DELETE_RECIPE_FROM_FAVORITES":
        return state.filter((recipe) => recipe.id !== action.payload);
      
      case "LOGOUT_USER":
        return [];
  
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  