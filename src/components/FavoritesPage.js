import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecipeFromFavorites } from "../actions/actionObjects";
import { useNavigate } from "react-router-dom";
import "../css/Favorites.css"

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.userFavorites);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetails);


  return (
    <div className="favorites-container">
      <div className="favorites-heading">Favorite Recipes</div>

      {favorites && favorites.length === 0 ? (
        <p className="no-favorites-message">No favorite recipes found.</p>
      ) : (
        <div className="search-results-container">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="recipe-box fav-box">
              <div
                as="h2"
                className="recipe-name"
                onClick={() => navigate(`/${recipe.id}`)}
              >
                {recipe.title}
              </div>
              <img
                className="recipe-image"
                src={recipe.image}
                alt={recipe.title}
                onClick={() => navigate(`/${recipe.id}`)}
              />
              <button
                className="delete-button"
                onClick={() => dispatch(deleteRecipeFromFavorites(recipe.id, user._id))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;