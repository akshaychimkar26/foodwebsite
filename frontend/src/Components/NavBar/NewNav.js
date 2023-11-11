import React from "react";
import "./newnav.css";
import { Link, NavLink } from "react-router-dom";
import searchicon from "../../Assets/Nav-buttons-icons/search-icon(food-clone).png";
import saveditems from "../../Assets/DetailPage/saved-icons.png";
import profile from "../../Assets/Nav-buttons-icons/profile-icon.png";
import { useState, useEffect } from "react";
import menu from "../../Assets/Nav-buttons-icons/hamburger-icon.webp";
import closeMenu from "../../Assets/Nav-buttons-icons/close-icon.png";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import { useSelector, useDispatch } from "react-redux";
import userIcon from "../../Assets/Nav-buttons-icons/profile.png";
import axios from "axios";
import { setIsLoggedIn } from "../../Feautes/Slice";

const NewNav = () => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [itemsToSave, setItemToSave] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const [showMeat, setShowMeat] = useState(false);
  const [showHealthy, setShowHealthy] = useState(false);
  const [showCuisine, setShowCuisine] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false);
  const [showSeasonal, setShowSeasonal] = useState(false);

  const handleShowRecipe = () => {
    if (window.innerWidth < 1210) {
      setShowRecipe(!showRecipe);
      setShowCuisine(false);
      setShowPopular(false);
      setShowMeat(false);
      setShowHealthy(false);
      setShowHolidays(false);
      setShowSeasonal(false);
      console.log(showRecipe);
    }
  };

  const handleShowPopular = () => {
    if (window.innerWidth < 1210) {
      setShowRecipe(false);
      setShowCuisine(false);
      setShowPopular(!showPopular);
      setShowMeat(false);
      setShowHealthy(false);
      setShowHolidays(false);
      setShowSeasonal(false);
      console.log(showRecipe);
    }
  };

  const handleShowMeat = () => {
    if (window.innerWidth < 1210) {
      setShowRecipe(false);
      setShowCuisine(false);
      setShowPopular(false);
      setShowMeat(!showMeat);
      setShowHealthy(false);
      setShowHolidays(false);
      setShowSeasonal(false);
      console.log(showRecipe);
    }
  };

  const handleShowCuisine = () => {
    if (window.innerWidth < 1210) {
      setShowRecipe(false);
      setShowCuisine(!showCuisine);
      setShowPopular(false);
      setShowMeat(false);
      setShowHealthy(false);
      setShowHolidays(false);
      setShowSeasonal(false);
      console.log(showRecipe);
    }
  };

  const handleShowHealthy = () => {
    if (window.innerWidth < 1210) {
      setShowRecipe(false);
      setShowCuisine(false);
      setShowPopular(false);
      setShowMeat(false);
      setShowHealthy(!showHealthy);
      setShowHolidays(false);
      setShowSeasonal(false);
      console.log(showRecipe);
    }
  };

  const handleShowHolidays = () => {
    if (window.innerWidth < 1210) {
      setShowRecipe(false);
      setShowCuisine(false);
      setShowPopular(false);
      setShowMeat(false);
      setShowHealthy(false);
      setShowHolidays(!showHolidays);
      setShowSeasonal(false);
      console.log(showRecipe);
    }
  };

  const handleShowSeasonal = () => {
    if (window.innerWidth < 1210) {
      setShowRecipe(false);
      setShowCuisine(false);
      setShowPopular(false);
      setShowMeat(false);
      setShowHealthy(false);
      setShowHolidays(false);
      setShowSeasonal(!showSeasonal);
      console.log(showRecipe);
    }
  };

  const handleAvatar = () => {
    setAvatarOpen(!avatarOpen);
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const state = useSelector((state) => state.value.isLoggedIn);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleAuth = () => {
    setShowLogin(true);
  };

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  };

  const handleClose = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const handleShowRegister = () => {
    setShowRegister(!showRegister);
    setShowLogin(!showLogin);
  };

  const handleLogOut = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const resp = await axios("https://food-com-backend.onrender.com/logout");

    console.log(resp);
    localStorage.setItem("token", null);
    dispatch(setIsLoggedIn(resp.data.isLoggedIn));
  };

  const checkLoggedIn = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const resp = await axios(
        "https://foodwebsite-i47b.onrender.com/checkloggedin"
        
      );

      console.log(resp, "in checkkkkk");
      dispatch(setIsLoggedIn(resp.data.isLoggedIn));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <>
      {showLogin && (
        <Login
          closeFunc={handleClose}
          toggleLogin={handleShowLogin}
          toggleReg={handleShowRegister}
        />
      )}
      {showRegister && (
        <Register closeFunc={handleClose} toggleLogin={handleShowLogin} />
      )}
      <div
        className={`header-main-container ${isMenuOpen ? `fixed-header` : ``} `}
      >
        <div className={`header-wrapper`}>
          <header>
            <div className="menu-icons">
              <img src={menu} alt="icon" onClick={handleClick} />

              <img src={closeMenu} className="close-menu" alt="icon" />
            </div>
            <h1>
              <Link to="/">
                {" "}
                Food<span>.</span>
              </Link>
            </h1>
          </header>

          <nav>
            <ul className={isMenuOpen ? "menu-open" : ""}>
              <li className="recipe" onClick={handleShowRecipe}>
                RECIPES
                <ul className={`sub-nav recipe-sub`}>
                  <li>
                    <Link to="/recipe?q=Breakfast and Brunch Recipes">
                      Breakfast & Brunch Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Lunch Recipes">Lunch Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Appetizersand& Snack Recipes">
                      Appetizers & Snack Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Dinner Recipes">Dinner Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Dessert Recipes">Dessert Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Side Dish Recipes">
                      Side Dish Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Grilling and BBQ Recipes">
                      Grilling & BBQ Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Microwave Recipes">
                      Microwave Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Quick and Easy Recipes">
                      Quick & Easy Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Slow-Cooker Recipes">
                      Slow-Cooker Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Air Fryer Recipes">
                      Air Fryer Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Instant Pot Recipes">
                      Instant Pot Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Baking Recipes">Baking Recipes</Link>
                  </li>

                  <li className="see-more">
                    <Link>See More</Link>
                  </li>
                </ul>
                {showRecipe && (
                  <ul className={`${showRecipe ? `recipe-nav` : ""}`}>
                    <li>
                      <Link to="/recipe?q=Breakfast and Brunch Recipes">
                        Breakfast & Brunch Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Lunch Recipes">Lunch Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Appetizersand& Snack Recipes">
                        Appetizers & Snack Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Dinner Recipes">Dinner Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Dessert Recipes">
                        Dessert Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Side Dish Recipes">
                        Side Dish Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Grilling and BBQ Recipes">
                        Grilling & BBQ Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Microwave Recipes">
                        Microwave Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Quick and Easy Recipes">
                        Quick & Easy Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Slow-Cooker Recipes">
                        Slow-Cooker Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Air Fryer Recipes">
                        Air Fryer Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Instant Pot Recipes">
                        Instant Pot Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Baking Recipes">Baking Recipes</Link>
                    </li>

                    <li className="see-more">
                      <Link>See More</Link>
                    </li>
                  </ul>
                )}
              </li>{" "}
              <li className="popular" onClick={handleShowPopular}>
                POPULAR{" "}
                <ul className="sub-nav popular-sub">
                  <li>
                    <Link to="/recipe?q=Trending Now">Trending Now</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Casserole Recipes">
                      Casserole Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Chilli Recipes">Chilli Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Soup Recipes">Soup Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Pasta Recipes">Pasta Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Bread Recipes">Bread Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Cookie Recipes">Cookie Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Salad Recipes">Salad Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Todu Recipes">Todu Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Copycat Recipes">Copycat Recipes</Link>
                  </li>
                  <li>
                    <Link className="see-more">See More</Link>
                  </li>
                </ul>
                {showPopular && (
                  <ul className="popular-nav">
                    <li>
                      <Link to="/recipe?q=Trending Now">Trending Now</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Casserole Recipes">
                        Casserole Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Chilli Recipes">Chilli Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Soup Recipes">Soup Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Pasta Recipes">Pasta Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Bread Recipes">Bread Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Cookie Recipes">Cookie Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Salad Recipes">Salad Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Todu Recipes">Todu Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Copycat Recipes">
                        Copycat Recipes
                      </Link>
                    </li>
                    <li>
                      <Link className="see-more">See More</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="meat" onClick={handleShowMeat}>
                MEAT & SEAFOOD
                <ul className="sub-nav meat-sub">
                  <li>
                    <Link to="/recipe?q=Chicken Recipes">Chicken Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Salmon Recipes">Salmon Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Park Chop Recipes">
                      Park Chop Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Ground Beef Recipes">
                      Ground Beef Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Bread Recipes">Bread Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Shrimp Recipes">Shrimp Recipes</Link>
                  </li>
                </ul>{" "}
                {showMeat && (
                  <ul className="meat-nav">
                    <li>
                      <Link to="/recipe?q=Chicken Recipes">
                        Chicken Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Salmon Recipes">Salmon Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Park Chop Recipes">
                        Park Chop Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Ground Beef Recipes">
                        Ground Beef Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Bread Recipes">Bread Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Shrimp Recipes">Shrimp Recipes</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="healthy" onClick={handleShowHealthy}>
                HEALTHY & DIET
                <ul className="sub-nav healthy-sub">
                  <li>
                    <Link to="/recipe?q=Keto Recipes">Keto Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Healthy Recipes">Healthy Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Vegetarian Recipes">
                      Vegetarian Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Vegan Recipes">Vegan Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Mediterranean Diet Recipes">
                      Mediterranean Diet Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Weight Watchers Recipes">
                      Weight Watchers Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Low-Carb Recipes">
                      Low-Carb Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Gluten-Free Recipes">
                      Gluten-Free Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Gluten-Free Recipes">
                      Gluten-Free Recipes
                    </Link>
                  </li>
                  <li>
                    <Link className="see-more">See More</Link>
                  </li>
                </ul>
                {showHealthy && (
                  <ul className="healthy-nav">
                    <li>
                      <Link to="/recipe?q=Keto Recipes">Keto Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Healthy Recipes">
                        Healthy Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Vegetarian Recipes">
                        Vegetarian Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Vegan Recipes">Vegan Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Mediterranean Diet Recipes">
                        Mediterranean Diet Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Weight Watchers Recipes">
                        Weight Watchers Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Low-Carb Recipes">
                        Low-Carb Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Gluten-Free Recipes">
                        Gluten-Free Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Gluten-Free Recipes">
                        Gluten-Free Recipes
                      </Link>
                    </li>
                    <li>
                      <Link className="see-more">See More</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="holidays" onClick={handleShowHolidays}>
                HOLIDAYS
                <ul className="sub-nav holidays-sub">
                  <li>
                    <Link to="/recipe?q=Dinner Party Recipes">
                      Dinner Party Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Game day Recipes">
                      Game day Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Valentine's Day Recipes">
                      Valentine's Day Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=St. Patrick's Day Recipes">
                      St. Patrick's Day Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Easter Recipes">Easter Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Cinco de Mayo Recipes">
                      Cinco de Mayo Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Mother's Day Recipes">
                      Mother's Day Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Memorial Day Recipes">
                      Memorial Day Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Juneteenth Recipes">
                      Juneteenth Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=4th of July Recipes">
                      4th of July Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Halloween Recipes">
                      Halloween Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Thanksgiving Recipes">
                      Thanksgiving Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Hanukkah Recipes">
                      Hanukkah Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Christmas Recipes">
                      Christmas Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=New Year's Recipes">
                      New Year's Recipes
                    </Link>
                  </li>
                </ul>{" "}
                {showHolidays && (
                  <ul className="holidays-nav">
                    <li>
                      <Link to="/recipe?q=Dinner Party Recipes">
                        Dinner Party Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Game day Recipes">
                        Game day Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Valentine's Day Recipes">
                        Valentine's Day Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=St. Patrick's Day Recipes">
                        St. Patrick's Day Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Easter Recipes">Easter Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Cinco de Mayo Recipes">
                        Cinco de Mayo Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Mother's Day Recipes">
                        Mother's Day Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Memorial Day Recipes">
                        Memorial Day Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Juneteenth Recipes">
                        Juneteenth Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=4th of July Recipes">
                        4th of July Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Halloween Recipes">
                        Halloween Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Thanksgiving Recipes">
                        Thanksgiving Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Hanukkah Recipes">
                        Hanukkah Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Christmas Recipes">
                        Christmas Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=New Year's Recipes">
                        New Year's Recipes
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="cuisine" onClick={handleShowCuisine}>
                CUISINE
                <ul className="sub-nav cuisine-sub">
                  <li>
                    <Link to="/recipe?q=Mexican Recipes">Mexican Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Italian Recipes">Italian Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Indian Recipes">Indian Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Thai Recipes">Thai Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Korean Recipes">Korean Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=French Recipes">French Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Breakfast and Brunch Recipes">
                      Latin American Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Chinese Recipes">Chinese Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Japanese Recipes">
                      Japanese Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Spanish Recipes">Spanish Recipes</Link>
                  </li>
                </ul>{" "}
                {showCuisine && (
                  <ul className="cuisine-nav">
                    <li>
                      <Link to="/recipe?q=Mexican Recipes">
                        Mexican Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Italian Recipes">
                        Italian Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Indian Recipes">Indian Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Thai Recipes">Thai Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Korean Recipes">Korean Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=French Recipes">French Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Breakfast and Brunch Recipes">
                        Latin American Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Chinese Recipes">
                        Chinese Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Japanese Recipes">
                        Japanese Recipes
                      </Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Spanish Recipes">
                        Spanish Recipes
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="seasonal" onClick={handleShowSeasonal}>
                SEASONAL
                <ul className="sub-nav seasonal-sub">
                  <li>
                    <Link to="/recipe?q=Spring Recipes">Spring Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Summer Recipes">Summer Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Fall Recipes">Fall Recipes</Link>
                  </li>
                  <li>
                    <Link to="/recipe?q=Winter Recipes">Winter Recipes</Link>
                  </li>

                  <li>
                    <Link className="see-more">See More</Link>
                  </li>
                </ul>
                {showSeasonal && (
                  <ul className="seasonal-nav">
                    <li>
                      <Link to="/recipe?q=Spring Recipes">Spring Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Summer Recipes">Summer Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Fall Recipes">Fall Recipes</Link>
                    </li>
                    <li>
                      <Link to="/recipe?q=Winter Recipes">Winter Recipes</Link>
                    </li>

                    <li>
                      <Link className="see-more">See More</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          <div className="btns-container">
            <div className="btns-wrapper">
              <Link to="/search">
                <img src={searchicon} alt="search" />
              </Link>
            </div>

            <div className="btns-wrapper">
              <Link to="/saved">
                <img src={saveditems} alt="saveItems" className="saved-icon" />
              </Link>
            </div>

            <div className="btns-wrapper">
              {state ? (
                <>
                  <div className="avatar" onClick={handleAvatar}>
                    <img src={userIcon} alt="Icon" />
                    {avatarOpen && (
                      <ul className="avatar-list">
                        <li>
                          {" "}
                          <Link to="/profile">Profile</Link>
                        </li>
                        <li>Add a Recipe</li>
                        <li>User Settings</li>
                        <li onClick={handleLogOut}>Log Out</li>
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <Link>
                  <img src={profile} alt="profile_icon" onClick={toggleAuth} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNav;