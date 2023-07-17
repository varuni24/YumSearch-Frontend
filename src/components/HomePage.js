import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/Homepage.css";

function HomePage() {
  const userDets = useSelector((state) => state.userDetails);
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-title">YumSearch</div>
      
      <div className="homepage-pargraph">
          Indulge in a culinary adventure! Explore a collection of recipes, search
          for your favorites, and access their nutritional values effortlessly.
          Create an account to save recipes to your favorites. Start exploring now
          and elevate your cooking experience to new heights.        
      </div>

      {userDets && userDets.userName && (
          <button className="explore-recipes" onClick={() => navigate("/search")}>Explore Recipes!</button>
      )}

    </div>
  );
}

export default HomePage;
