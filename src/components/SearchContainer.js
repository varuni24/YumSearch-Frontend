import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../actions/actionObjects";
import { useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import "../css/Search.css";

var myHeaders = new Headers();
myHeaders.append("apikey", "GTlvvLI0F1UEeyZeepBjlrXbN8Lzhir6");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const user = useSelector((state) => state.userDetails)
  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);

    fetch(
      `https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${searchQuery}&addRecipeInformation=true&addRecipeNutrition=true&number=10`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const extractedRecipes = data.results.map((recipe) => {
          const instructions = recipe.analyzedInstructions.map((instruction) => {
            return instruction.steps.map((step) => `${step.step}`);
          })
          
          return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            servingsize: 100,
            nutrition: recipe.nutrition.caloricBreakdown,
            instructions: instructions[0]
          };
        });

        dispatch(setRecipes(extractedRecipes));
        setSearchQuery("")
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="search-container">
      <div className="search-title"> 
        <div> Hi {user.userName}! </div>
        <div> Start Exploring </div>
      </div>

      <div className="search-input-section">
        <input
          className="search-input"
          placeholder="Search Recipe"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <FcSearch />
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="search-results-container">
          {recipes.map((recipe) => (
            <div
              className="recipe-box"
              key={recipe.id}
              onClick={() => navigate(`/${recipe.id}`)}>

              <img
                className="recipe-image"
                src={recipe.image}
                alt={recipe.title}
                onClick={() => navigate(`/${recipe.id}`)}
              />
              
              <div className="recipe-name">{recipe.title}</div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
