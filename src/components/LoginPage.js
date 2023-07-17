import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsertoState } from "../actions/actionObjects";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "../css/Login.css";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const userDets = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (userDets.userName) {
      navigate("/");
    }
  }, []);


  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
  };

  const handleLogin = async () => {
    const user = { userEmail: email, userPassword: password };

    try {
      const response = await fetch("http://localhost:5003/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const userData = await response.json();
        const user = userData.user;

        dispatch(addUsertoState(user));

        navigate(`/search`);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-title"> Login </div>

      <div className="login-input-section">

        <div className="login-input-main">
          <FaUserAlt className="login-input-icon" />
          <input
            className="login-email-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>



        <div className="login-input-main">
          <FaLock className="login-input-icon" />
          <input
            className="login-password-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>


        <div className="all-login-form-buttons">
          <button
            className="login-show-hide-password-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <button className="login-form-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
