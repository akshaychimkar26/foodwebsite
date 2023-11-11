import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import RecipesList from "../Pages/RecipeList/RecipesList";
import RecipeDetails from "../Pages/RecipeDetail/RecipeDetails";
import Profile from "../Pages/ProfilePage/Profile";
import SavedRecipe from "../Pages/SavedRecipe/SavedRecipe";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<SavedRecipe />} />


          {/*Recipe Dynamic Routes */}
          <Route path="/recipe" element={<RecipesList />} />

          {/* Recipe details dynamic routes */}
          <Route path="/details" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;