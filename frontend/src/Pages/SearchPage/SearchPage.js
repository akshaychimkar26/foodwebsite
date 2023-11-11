import React, { useState } from "react";
import NewNav from "../../Components/NavBar/NewNav";
import searchIcon from "../../Assets/Nav-buttons-icons/search-icon(food-clone).png";
import "./searchpage.css";
import { fetchRecipeList } from "../../Utilities/utilities";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);

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

  return (
    <>
      <NewNav />
      <div className="search-filter-container">
        <div className="search-filter-wrapper">
          <div className="search-bar-wrapper">
            <div className="make-txt">
              <span> I WANT TO MAKE</span>
            </div>

            <div className="search-icon">
              <button className="btn" onClick={handleSearch}>
                <img src={searchIcon} alt="search" />
              </button>
            </div>
          </div>

          <input
            type="text"
            name="search"
            className="input-bar"
            onChange={handleOnChange}
          />

          <p className="clear-txt">clear </p>
        </div>
      </div>

      <div className="result-container">
        {data ? (
          <div className="result-number-wrapper">
            <div> RESULTS</div>
          </div>
        ) : (
          ""
        )}

        <div className="search-result-container">
          <div className="search-result-wrapper">
            {data
              ? data.map((item, index) => {
                  return (
                    <div key={index} className="searched-recipe-wrapper">
                      <Link to={`/details?q=${item.recipe.label}`}>
                        <div className="searched-recipe-img">
                          <img
                            src={item.recipe.image}
                            alt={item.recipe.label}
                          />
                        </div>

                        <div className="searched-recipe-name-rating-wrapper">
                          <div className="recipe-name">
                            <p className="recipe-label">{item.recipe.label}</p>
                            <p className="recipe-source">
                              By <span>{item.recipe.source}</span>
                            </p>
                          </div>

                          <div className="recipe-rating">
                            <div className="recipe-time">
                              {item.recipe.totalTime} min
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;