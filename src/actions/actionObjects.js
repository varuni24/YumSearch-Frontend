import * as types from "./actionTypes";

export const setRecipes = (recipes) => {
  return {
    type: types.SET_RECIPES,
    payload: recipes,
  };
};

export const addToFavorites = (recipe, userId) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:5003/users/${userId}/favorites/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipe: recipe }),
      });

      dispatch({
        type: types.ADD_TO_FAVORITES,
        payload: recipe,
      });

    } catch (error) {
      console.log("Failed to add recipe to favorites:", error);
    }
  };
};


export const deleteRecipeFromFavorites = (recipeId, userId) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:5003/users/${userId}/favorites/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId }),
      });
      dispatch({
        type: types.DELETE_RECIPE_FROM_FAVORITES,
        payload: recipeId,
      });

    } catch (error) {
      console.log("Failed to delete recipe from favorites:", error);
    }
  };
};

export const addUsertoState = (user) => {
  return {
    type: types.ADD_USER_TO_STATE,
    payload: user
  };
};

export const logoutUser = () => {
  return {
    type: types.LOGOUT_USER,
  };
};
