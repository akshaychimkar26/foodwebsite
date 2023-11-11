import React, { useEffect } from "react";
import NewNav from "../../Components/NavBar/NewNav";
import searchIcon from "../../Assets/Nav-buttons-icons/search-icon(food-clone).png";
import { useState } from "react";
import { fetchRecipeList } from "../../Utilities/utilities";
import "./savedRecipe.css";
import addIcon from "../../Assets/Nav-buttons-icons/close-icon.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SavedRecipe = () => {
  const [showSearchBar, setShowSearchbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);
  const state = useSelector((state) => state.value.isLoggedIn);

  const [showSavedRecipe, setShowSavedRecipe] = useState(true);
  const [showBoards, setShowBoards] = useState(false);

  const handleShowSavedRecipe = () => {
    setShowSavedRecipe(true);
    setShowBoards(false);
  };

  const handleShowBoards = () => {
    setShowSavedRecipe(false);
    setShowBoards(true);
  };

  const handleSearchBar = () => {
    setShowSearchbar(!showSearchBar);
  };

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchRecipeList(searchQuery).then((res) => {
      setData(res.hits);
      console.log(res.hits);
    });
  };

  const fetchSavedRecipes = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Beare ${token}`;

      const resp = await axios.get("https://foodwebsite-i47b.onrender.com/getsaveredcipe");
      console.log(resp.data);
      setData(resp.data.saved.saved_recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSavedRecipes();
    console.log(state, "=============state");
  }, [state]);

  return (
    <>
      <NewNav />
      <header className="save-header">
        {!showSearchBar && (
          <div className="save-title-wrapper">
            <div className="save-txt">
              <p>SAVES</p>
            </div>
            <div className="edit-wrapper">
              <img src={searchIcon} alt="icon" onClick={handleSearchBar} /> |{" "}
              <p>EDIT</p>
            </div>
          </div>
        )}

        {showSearchBar && (
          <div className="save-search-filter-wrapper">
            <div className="save-search-bar-wrapper">
              <div className="search-icon">
                <button className="btn" onClick={handleSearch}>
                  <img src={searchIcon} alt="search" />
                </button>
              </div>

              <input
                type="text"
                name="search"
                className="input-bar"
                onChange={handleOnChange}
                placeholder="Search for Recipes in Saves"
              />

              <p className="save-cancel-txt" onClick={handleSearchBar}>
                cancel{" "}
              </p>
            </div>
          </div>
        )}
      </header>

      <div className="recipes-board-wrapper">
        <div className="saved-recipes-wrapper" onClick={handleShowSavedRecipe}>
          RECIPES
        </div>
        <div className="board-wrapper" onClick={handleShowBoards}>
          {" "}
          MY BOARDS
        </div>
      </div>
      {showSavedRecipe && (
        <div className="saved-recipe-container">
          <div className="saved-recipe">
            <div className="sorting">
              <div>SORT BY :</div>
              <div className="sort-by">
                <p className="newest-txt">Newest</p> |<p className="a-z">A-Z</p>
              </div>
            </div>

            <div className="discover-btn-container">
              <div className="discover-btn-wrapper">
                <div>
                  <Link to="/recipe?q=trending now">
                    <img src={addIcon} alt="icon" />
                    <p>DISOCVER RECIPES</p>
                  </Link>
                </div>

                <div>
                  <p>....or....</p>
                  <p>Add Your Own Recipe</p>
                </div>
              </div>
            </div>

            {data
              ? data.map((item, index) => {
                  return (
                    <div key={index} className="saved-recipe-card">
                      <Link to={`/details?q=${item.label}`}>
                        <div className="img">
                          <img src={item.image} alt={item.label} />
                        </div>

                        <div className="recipe-label">
                          <div className="title">
                            <p className="label">{item.label}</p>
                            <p className="rating">By {item.source}</p>
                          </div>

                          {/* <div className="rating">
                            <p>rating</p>
                          </div> */}
                        </div>
                      </Link>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      )}

      {state ? "" : "Please Login"}

      {showBoards && (
        <div className="saved-recipe-container">
          <div className="saved-recipe">
            <div className="sorting">
              <div>SORT BY :</div>
              <div className="sort-by">
                <p className="newest-txt">Newest</p> |<p className="a-z">A-Z</p>
              </div>
            </div>

            <div className="discover-btn-container">
              <div className="discover-btn-wrapper">
                <div>
                  <img src={addIcon} alt="icon" />
                  <p>NEW BOARD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SavedRecipe;