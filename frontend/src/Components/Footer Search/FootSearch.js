import React from "react";
import searchIcon from "../../Assets/Nav-buttons-icons/search black icon.png";
import "./footsearch.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const FootSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="foot-search-container">
        <h2 className="foot-search-title">FIND MORE RECIPES</h2>
        <form>
          <div className="foot-search-icon-input-wrapper">
            <span className="foot-search-icon-wrapper">
              <img
                src={searchIcon}
                alt="search-icon"
                className="foot-search-icon"
              />
            </span>
            <input
              type="text"
              placeholder="I'm craving..."
              name="search"
              onChange={handleOnChange}
            />
          </div>
          <Link className="foot-search-link" to={`/recipe?q=${searchQuery}`}>
            <button className="foot-search-btn">SEARCH</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default FootSearch;