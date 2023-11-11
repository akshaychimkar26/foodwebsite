// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchRecipeList } from "../../Utilities/utilities";
import "./recipeList.css";
import pintIcon from "../../Assets/Footer Icons/pinterest.png";
import fbIcon from "../../Assets/Footer Icons/facebook.png";
import mailIcon from "../../Assets/Footer Icons/email.png";
import NewNav from "../../Components/NavBar/NewNav";
import Footer from "../../Components/Footer/Footer";
import ad from '../../Assets/adverise.webp'

const RecipesList = () => {
  const [data, setData] = useState(null);

  //   using useLocation to get url and query params
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  //  getting query params from url
  const query = queryParams.get("q");

  //   Fetching data on Component Mounting and storing it in state
  useEffect(() => {
    fetchRecipeList(query).then((res) => {
      setData(res.hits);
      console.log(res.hits);
    });
  }, [query]);

  return (
    <>
      <NewNav />
      {data ? (
        <>
          {" "}
          <div className="recipe-list-title-container">
            <div className="part-of-txt">
              <span>
                PART OF<Link> {data[0].recipe.dishType}</Link>
              </span>
            </div>

            <div className="list-title">
              <h2>{`10 ${query} Ideas`}</h2>
            </div>

            <div className="list-description"></div>

            <div className="icons-container">
              <Link className="pint-link">
                <img src={pintIcon} className="pint-icon" alt="Pintrest" />
              </Link>

              <Link className="fb-link">
                <img src={fbIcon} alt="Facebook" />
              </Link>

              <Link className="mail-link">
                <img src={mailIcon} alt="Mail" />
              </Link>
            </div>
          </div>
          <div className="list-main-container">
            <div className="list-ad-wrapper">
              <div className="list-container">
                {data ? (
                  <>
                    {data.map((item, index) => {
                      return (
                        <div key={index}>
                          <div key={index} className="recipe-wrapper">
                            <Link to={`/details?q=${item.recipe.label}`}>
                              <div className="recipe-img">
                                {" "}
                                <img
                                  src={item.recipe.image}
                                  alt={item.recipe.label}
                                />
                              </div>

                              <div className="recipe-desc">
                                <p>RECIPE</p>
                                <h3>{item.recipe.label}</h3>
                                {/* <div className="">
                                  {item.recipe.healthLabels}
                                </div> */}
                                <p>-{item.recipe.source}</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  "Loading"
                )}
              </div>
              <div className="ad-container ad">
                <img src={ad} alt='adverise'/>
              </div>
            </div>
          </div>
          <Footer/>
        </>
      ) : (
        "Loading"
      )}

      {/* <button
        onClick={() => {
          console.log(data);
        }}
      >
        clcik
      </button> */}
    </>
  );
};

export default RecipesList;