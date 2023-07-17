import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { persistor, store } from "./utils/store";
import { PersistGate } from "redux-persist/integration/react";
import RecipeItem from "./components/RecipeItem";
import SearchContainer from "./components/SearchContainer";
import FavoritesPage from "./components/FavoritesPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}


function AppContent() {
  const location = useLocation();

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <div className={`website-body ${location.pathname !== "/" ? "blur-background" : ""}`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/:recipeId" element={<RecipeItem />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/search" element={<SearchContainer />} />
            </Routes>
          </div>
        </PersistGate>
      </Provider>
    </div>
  )
}



export default App;
