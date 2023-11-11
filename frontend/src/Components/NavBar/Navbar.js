import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import searchicon from "../../Assets/Nav-buttons-icons/search-icon(food-clone).png";
import saveditems from "../../Assets/Nav-buttons-icons/qq.jpg";
import profile from "../../Assets/Nav-buttons-icons/profile-icon.png";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [showRecipeDropdown, setShowRecipeDropdown] = useState(true);
  const [showPopularDropdown, setShowPopularDropdown] = useState(true);
  const [showMeatDropdown, setShowMeatDropdown] = useState(true);
  const [showHealthyDropdown, setShowHealthyDropdown] = useState(true);
  const [showHolidaysDropdown, setShowHolidyasDropdown] = useState(true);
  const [showCuisineDropdown, setShowCuisineDropdown] = useState(true);
  const [showSeasonalDropdown, setShowSeasonalDropdown] = useState(true);


  const [isNotDesktop, setIsNotDesktop] = useState(false);

  const setShowLogin = props.func;

  const handleRecipeMouseEnter = () => {
    setShowRecipeDropdown(true);
  };

  const handleRecipeMouseLeave = () => {
    setShowRecipeDropdown(false);
  };

  const handlePopularMouseEnter = () => {
    setShowRecipeDropdown(true);
  };

  const handlePopularMouseLeave = () => {
    setShowRecipeDropdown(false);
  };

  const handleMeatMouseEnter = () => {
    setShowRecipeDropdown(true);
  };

  const handleMeatMouseLeave = () => {
    setShowRecipeDropdown(false);
  };

  const handleHolidaysMouseEnter = () => {
    setShowRecipeDropdown(true);
  };

  const handleHolidaysMouseLeave = () => {
    setShowRecipeDropdown(false);
  };

  const handleHealthyMouseEnter = () => {
    setShowRecipeDropdown(true);
  };

  const handleHealthyMouseLeave = () => {
    setShowRecipeDropdown(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1210) {
        setIsNotDesktop(true);
      } else {
        setIsNotDesktop(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="logo-nav-btns-container">
        <header className="logo-nav-btns-wrapper">
          <div className="logo-nav-wrapper">
            <Link to="/">
              <h1>Food.</h1>
            </Link>
            <nav>
              <ul className="navbar">
                <li
                  // onMouseEnter={handleRecipeMouseEnter}
                  // onMouseLeave={handleRecipeMouseLeave}
                  className="nav-item recipes"
                >
                  <span className="nav-content">RECIPES</span>
                </li>{" "}
                {showRecipeDropdown && (
                  <ul
                    // onMouseEnter={handleRecipeMouseEnter}
                    // onMouseLeave={handleRecipeMouseLeave}
                    className="nav-dropdown-recipes nav-dropdown"
                  >
                    <li>Breakfast $ Brunch Recipes</li>
                    <li>Lunch Recipes</li>
                    <li>Appetizers & Snack Recipes</li>
                    <li>Dinner Recipes</li>
                    <li>Dessert Recipes</li>
                    <li>Side Dish Recipes</li>
                    <li>Grilling & BBQ Recipes</li>
                    <li>Microwave Recipes</li>
                    <li>Quick & Easy Recipes</li>
                    <li>Slow-Cooker Recipes</li>
                    <li>Air Fryer Recipes</li>
                    <li>Instant Pot Recipes</li>
                    <li>Baking Recipes</li>
                  </ul>
                )}
                <li
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  className="nav-item popular"
                >
                  <span className="nav-content">POPULAR</span>
                </li>
                {showRecipeDropdown && (
                  <ul
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="nav-dropdown-popular nav-dropdown"
                  >
                    <li>Trending Now</li>
                    <li>Casserole Recipes</li>
                    <li>Chilli Recipes</li>
                    <li>Soup Recipes</li>
                    <li>Pasta Recipes</li>
                    <li>Bread Recipes</li>
                    <li>Cookie Recipes</li>
                    <li>Salad Recipes</li>
                    <li>Todu Recipes</li>
                    <li>Copycat Recipes</li>
                    <li>
                      <Link>See More</Link>
                    </li>
                  </ul>
                )}
                <li className="nav-item meat">
                  <span className="nav-content">MEAT & SEAFOOD</span>
                </li>
                <ul className="nav-dropdown-meat nav-dropdown">
                  <li>Chicken Recipes</li>
                  <li>Salmon Recipes</li>
                  <li>Park Chop Recipes</li>
                  <li>Ground Beef Recipes</li>
                  <li>Bread Recipes</li>
                  <li>Shrimp Recipes</li>
                </ul>
                <li className="nav-item healthy">
                  <span className="nav-content">HEALTHY & DIET</span>
                </li>
                <ul className="nav-dropdown-healthy nav-dropdown">
                  <li>Keto Recipes</li>
                  <li>Healthy Recipes</li>
                  <li>Vegetarian Recipes</li>
                  <li>Vegan Recipes</li>
                  <li>Mediterranean Diet Recipes</li>
                  <li>Weight Watchers Recipes</li>
                  <li>Low-Carb Recipes</li>
                  <li>Gluten-Free Recipes</li>
                  <li>
                    <Link>Gluten-Free Recipes</Link>
                  </li>
                </ul>
                <li className="nav-item holidays">
                  <span className="nav-content">HOLIDAYS</span>
                </li>
                <ul className="nav-dropdown-holidays nav-dropdown">
                  <li>Dinner Party Recipes</li>
                  <li>Game day Recipes</li>
                  <li>Valentine's Day Recipes</li>
                  <li>St. Patrick's Day Recipes</li>
                  <li>Easter Recipes</li>
                  <li>Cinco de Mayo Recipes</li>
                  <li>Mother's Day Recipes</li>
                  <li>Memorial Day Recipes</li>
                  <li>Juneteenth Recipes</li>
                  <li>4th of July Recipes</li>
                  <li>Halloween Recipes</li>
                  <li>Thanksgiving Recipes</li>
                  <li>Hanukkah Recipes</li>
                  <li>Christmas Recipes</li>
                  <li>New Year's Recipes</li>
                </ul>
                <li className="nav-item cuisine">
                  <span className="nav-content">CUISINE</span>
                </li>
                <ul className="nav-dropdown-cuisine nav-dropdown">
                  <li>Mexican Recipes</li>
                  <li>Italian Recipes</li>
                  <li>Indian Recipes</li>
                  <li>Thai Recipes</li>
                  <li>Korean Recipes</li>
                  <li>French Recipes</li>
                  <li>Latin American Recipes</li>
                  <li>Chinese Recipes</li>
                  <li>Japanese Recipes</li>
                  <li>Spanish Recipes</li>
                </ul>
                <li
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  className="nav-item seasonal"
                >
                  <span className="nav-content">SEASONAL</span>
                </li>
                {showRecipeDropdown && (
                  <ul
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="nav-dropdown-seasonal nav-dropdown"
                  >
                    <li>Spring Recipes</li>
                    <li>Summer Recipes</li>
                    <li>Fall Recipes</li>
                    <li>Winter Recipes</li>

                    <li>
                      <Link>See More</Link>
                    </li>
                  </ul>
                )}
              </ul>
            </nav>
          </div>

          <div className="profile-search-btn-wrapper">
            <Link to="/search">
              <img src={searchicon} alt="icon" />
            </Link>
            <Link>
              <img src={saveditems} className="saved-icon" alt="icon" />
            </Link>
            <Link>
              <img onClick={props.func} src={profile} alt="icon" />
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;