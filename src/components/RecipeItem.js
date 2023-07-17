import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToFavorites,
  deleteRecipeFromFavorites,
} from "../actions/actionObjects";
import "../css/RecipeItem.css";

function RecipeItem() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const user = useSelector((state) => state.userDetails);
  const userFav = useSelector((state) => state.userFavorites);
  let main = allRecipes.find((recipe) => recipe.id === parseInt(recipeId, 10));
  const [servingSize, setServingSize] = useState(main.servingsize);

  if (!main) {
    main = userFav.find((recipe) => recipe.id === parseInt(recipeId, 10));
  }

  const handleLike = () => {
    dispatch(addToFavorites(main, user._id));
  };

  const handleUnlike = () => {
    dispatch(deleteRecipeFromFavorites(main.id, user._id));
    window.history.back();
  };

  const isLiked = () => userFav.find((recipe) => recipe.id === parseInt(recipeId, 10));


  return (
    <div className="recipe-item-container">
      {main ? (
        <Fragment>
          <div className="recipe-main-wrapper">

            <div className="recipe-title-image">
              <h2 className="recipe-title">{main.title}</h2>
              <img className="recipe-img" src={main.image} alt={main.title} />
            </div>

            <div className="nutrients-section">
              <div className="serving-size">
                Serving Size (g):
                <input
                  className="serving-size-input"
                  type="number"
                  min="1"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                />
              </div>

              <div className="list-of-nutrients">
                <p className="nutrient-item">
                  Percent of Protein:
                  {(
                    (main.nutrition.percentProtein * servingSize) /
                    100
                  ).toFixed(2)}
                  g
                </p>
                <p className="nutrient-item">
                  Percent of Fat:
                  {((main.nutrition.percentFat * servingSize) / 100).toFixed(2)}
                  g
                </p>
                <p className="nutrient-item">
                  Percent of Carbs:
                  {((main.nutrition.percentCarbs * servingSize) / 100).toFixed(
                    2
                  )}
                  g
                </p>
              </div>

            </div>

          </div>

          <div className="recipe-instructions">
            <h3 className="intructions-title"> Instructions : </h3>

            <div className="instructions-body">
              {main.instructions &&
                main.instructions.map((step, index) => {
                  return (
                    <p className="recipe-step" key={index}>
                      {index + 1} - {step}
                    </p>
                  );
                })}
            </div>
          </div>

          {isLiked() ? (
            <button className="unlike-button" onClick={handleUnlike}>
              Unlike
            </button>
          ) : (
            <button className="like-button" onClick={handleLike}>
              Like
            </button>
          )}
        </Fragment>



      ) : (
        <div className="recipe-not-found-err-msg">Recipe Not Found!</div>
      )}
    </div>
  );
}

export default RecipeItem;
