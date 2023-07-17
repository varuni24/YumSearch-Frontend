import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsertoState } from "../actions/actionObjects";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import "../css/Signup.css";

function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const uppercaseRegex = /^(?=.*[A-Z])/;
  const specialCharRegex = /^(?=.*[!@#$%^&*])/;
  const digitRegex = /^(?=.*\d)/;
  const lowercaseRegex = /^(?=.*[a-z])/;
  const lengthRegex = /^(?=.{8,})/;

  const validateName = (username) => {
    const namelengthRegex = /^(?=.{2,})/;
    return namelengthRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return (
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password) &&
      digitRegex.test(password) &&
      lowercaseRegex.test(password) &&
      lengthRegex.test(password)
    );
  };

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    setUsername(enteredName);
    setValidName(validateName(enteredName));
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setValidEmail(validateEmail(enteredEmail));
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setValidPassword(validatePassword(enteredPassword));
  };

  const addNewUser = async () => {
    const newUser = {
      userName: username,
      userEmail: email,
      userPassword: password,
    };

    try {
      const response = await fetch("http://localhost:5003/users/all", {
        method: "GET",
      });
      const data = await response.json();
      const exists = data.find((user) => user.userName === username);

      if (exists) {
        alert("User already exists");
        return;
      }

      const addUserResponse = await fetch("http://localhost:5003/users/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const addedUser = await addUserResponse.json();
      console.log("New User - ", addedUser);
      dispatch(addUsertoState(addedUser));
      navigate(`/search`);
    } catch (error) {
      console.error("Error adding new user:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-title"> Sign-up! </div>

      <div className="signup-input-section">

        <div className="signup-input-main">
          <MdDriveFileRenameOutline className="signup-input-icon" />
          <input
            className="signup-name-input"
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
          />
        </div>
        {!validName && username && (
          <p className="invalid-signup-name-msg">
            Name must be greater than 2 characters
          </p>
        )}



        <div className="signup-input-main">
          <FaUserAlt className="signup-input-icon" />
          <input
            className="signup-email-input"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </div>
        {!validEmail && email && (
          <p className="invalid-signup-email-msg">
            Please enter a valid email
          </p>
        )}



        <div className="signup-input-main">
          <FaLock className="signup-input-icon" />
          <input
            className="signup-password-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        {!validPassword && password && (
          <p className="invalid-signup-password-msg">
            Password must: <br />
            {!uppercaseRegex.test(password) && (
              <span>
                {" "}
                contain at least 1 uppercase letter <br />
              </span>
            )}
            {!specialCharRegex.test(password) && (
              <span>
                {" "}
                contain at least 1 special character <br />
              </span>
            )}
            {!digitRegex.test(password) && (
              <span>
                {" "}
                contain at least 1 digit <br />
              </span>
            )}
            {!lowercaseRegex.test(password) && (
              <span>
                {" "}
                contain at least 1 lowercase letter <br />
              </span>
            )}
            {!lengthRegex.test(password) && (
              <span>
                {" "}
                be at least 8 characters long <br />
              </span>
            )}
          </p>
        )}


        <div className="all-signup-form-buttons">
          <button
            className="signup-show-hide-password-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <button className="signup-form-button" onClick={addNewUser}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
