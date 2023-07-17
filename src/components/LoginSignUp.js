import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/actionObjects";
import "../css/LoginSignup.css";

function LoginSignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetails);

  const handleUserLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="login-signup-container">
      <button className="headerButton" onClick={() => navigate(`/search`)}>
        Search Recipes
      </button>

      {user && user.userName ? (
        <Fragment>
          <button className="headerButton" onClick={() => navigate("/favorites")} >
            Favorites
          </button>

          <button className="headerButton" onClick={handleUserLogout}>
            Logout
          </button>

        </Fragment>
      ) : (
        <Fragment>
          <button className="headerButton" onClick={() => navigate(`/login`)}>
            Login
          </button>
          <button className="headerButton" onClick={() => navigate(`/signup`)}>
            Sign-Up
          </button>
        </Fragment>
      )}
    </div>
  );
}

export default LoginSignUp;
