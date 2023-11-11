import React, { useEffect, useState } from "react";
import NewNav from "../../Components/NavBar/NewNav";
import { useLocation } from "react-router-dom";
import { fetchRecipeDetails } from "../../Utilities/utilities";
import "./recipeDetail.css";
import { Link } from "react-router-dom";
import FootSearch from "../../Components/Footer Search/FootSearch";
import Footer from "../../Components/Footer/Footer";
import userIcon from "../../Assets/DetailPage/icon.png";
import saveIcon from "../../Assets/DetailPage/saved-icons.png";
import downloadIcon from "../../Assets/DetailPage/download-icon.webp";
import printIcon from "../../Assets/DetailPage/print-icon.jpg";
import shareIcon from "../../Assets/DetailPage/share-icon.png";
import cameraIcon from "../../Assets/DetailPage/camera-icon.png";
import axios from "axios";
import savedIcon from "../../Assets/DetailPage/savedd.png";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ad from "../../Assets/adverise.webp";
import { useSelector, useDispatch } from "react-redux";

const RecipeDetails = () => {
  const [data, setData] = useState(null);

  const [comment, setComment] = useState(null);

  const [showSavedIcon, setShowSavedIcon] = useState(false);

  const [savedRecipes, setSavedRecipes] = useState(false);
  const state = useSelector((state) => state.value.isLoggedIn);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  //  getting query params from url
  const query = queryParams.get("q");

  console.log(query);

  function getRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomFraction = Math.random();

    // Scale the randomFraction to the desired range (0 to 11)
    const randomNumber = Math.floor(randomFraction * 12);

    return randomNumber;
  }
  const randomNum = getRandomNumber();

  const showToast = () => {
    toast.success("Recipe Bookmark!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Set the time (in milliseconds) for the toast to auto close
    });
  };

  const showAlreadyBookToast = () => {
    toast.info("Recipe already Bookmarked!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Set the time (in milliseconds) for the toast to auto close
    });
  };

  const showRemoveToast = () => {
    toast.error("Recipe Removed from bookmark!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Set the time (in milliseconds) for the toast to auto close
    });
  };

  const handleSaveRecipe = async (recipe) => {
    if (state) {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios
        .put("https://foodwebsite-i47b.onrender.com/saverecipe", recipe)
        .then((res) => {
          console.log(res);
          if (res.data.isSaved) {
            showToast();
            setShowSavedIcon(!showSavedIcon);
          } else {
            showAlreadyBookToast();
            setShowSavedIcon(true);
          }
        });
      try {
      } catch (err) {
        console.log(err);
      }
    } else {
      return alert("Please login first");
    }
  };

  const handleRemoveRecipe = async (label) => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await axios
      .put("https://food-com-backend.onrender.com/deleterecipe", label)
      .then((res) => {
        console.log(res.data);
        showRemoveToast();
        setShowSavedIcon(!showSavedIcon);
      });
  };

  const fetchComments = async () => {
    try {
      let resp = await axios.get(
        "https://food-com-backend.onrender.com/getcomments"
      );

      console.log(resp.data);
      setComment(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSavedRecipes = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Beare ${token}`;

      const resp = await axios.get(
        "https://food-com-backend.onrender.com/getsaveredcipe"
      );
      // console.log(resp.data);
      setSavedRecipes(resp.data.saved.saved_recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipeDetails(query).then((res) => {
      console.log(res);
      setData(res.hits);
    });
    fetchSavedRecipes();
    fetchComments();
  }, []);

  console.log(data);
  return (
    <>
      <NewNav />
      <ToastContainer />

      <div className="yellow-container">
        <div>
          <Link>PREVIOUS RECIPE</Link>
          <Link>NEXT RECIPE</Link>
        </div>
      </div>
      {data ? (
        <div className="detail-main-container">
          <div className="detail-wrapper">
            <div className="title-wrapper">
              <p>
                <Link>Recipe</Link> \ <Link>{data[0].recipe.dishType}</Link>
              </p>
              <h2>{data[0].recipe.label}</h2>
              <p></p>
            </div>

            <div className="submitted-wrapper">
              <div>
                <img src={userIcon} alt="Icon" />
                <p>
                  <span>Submitted By</span> <br />
                  <span className="source-name">{data[0].recipe.source}</span>
                </p>
              </div>

              <div className="comment">
                {comment && comment[randomNum].comment}
              </div>
            </div>

            <div className="save-download-wrapper">
              <div className="saved-print-wrapper">
                {!showSavedIcon ? (
                  <img
                    onClick={() => {
                      handleSaveRecipe(data[0].recipe);
                    }}
                    src={saveIcon}
                    alt="Icon"
                  />
                ) : (
                  <img
                    onClick={() => {
                      handleRemoveRecipe(data[0].recipe);
                      console.log(data[0].recipe);
                    }}
                    src={savedIcon}
                    alt="Icon"
                  />
                )}
                <img src={downloadIcon} alt="Icon" />
                <img src={printIcon} alt="Icon" />
                <img src={shareIcon} alt="Icon" />
              </div>

              <div className="i-made-this-wrapper">
                <img src={cameraIcon} alt="icon" />
                <p>I made This</p>
              </div>
            </div>

            <div className="imgs-wrapper">
              <div className="big-img-wrapper">
                <img
                  src={data[0].recipe.images.REGULAR.url}
                  alt={data[0].recipe.label}
                />
              </div>
            </div>

            <div className="ready-in-wrapper">
              <div className="ready-box">
                <p>Ready In:{data[0].recipe.totalTime} min</p>
                <p> Yeilds:{data[0].recipe.yield}</p>
                <p>Ingredients:{data[0].recipe.ingredients.length}</p>
                <p>Serves:{data[0].recipe.yield}</p>
              </div>
              <div className="nutrition-box">
                <p>Nutrition information</p>
              </div>
            </div>

            <div className="direction-ingredient-wrapper">
              <div className="direction-wrapper">
                <h3>DIRECTIONS</h3>
                <ol>
                  <li>
                    Wash and prep all your ingredients, such as chopping
                    vegetables, measuring out spices, and marinating meats.
                    Having everything ready makes the cooking process smoother.
                  </li>

                  <li>
                    Preheat your oven, stovetop, grill, or any cooking surface
                    you'll be using to the specified temperature. This ensures
                    even cooking.
                  </li>

                  <li>
                    Use the appropriate pots, pans, and utensils for the recipe.
                    Nonstick pans, cast iron skillets, and oven-safe dishes are
                    examples of different cookware for various purposes.
                  </li>

                  <li>
                    Cook ingredients in the order specified in the recipe. This
                    often means starting with aromatics (like onions and garlic)
                    before adding proteins, vegetables, or grains.
                  </li>

                  <li>
                    Stir or toss ingredients periodically to ensure even cooking
                    and prevent sticking or burning. Use a spatula, wooden
                    spoon, or tongs as needed.
                  </li>

                  <li>
                    When the dish is ready, carefully plate it, arranging the
                    food attractively. Garnish with fresh herbs, grated cheese,
                    or other finishing touches, as specified.
                  </li>

                  <li>
                    Serve the dish immediately, if possible, while it's hot and
                    at its best. Certain dishes may require resting time before
                    serving.
                  </li>
                  <li>
                    After cooking, wash dishes, pots, pans, and utensils
                    promptly. This ensures an easier cleanup and maintains the
                    cleanliness of your kitchen.
                  </li>
                </ol>
              </div>
              <div className="ingredient-wrapper">
                <h3>INGREDIENTS</h3>
                {data[0].recipe.ingredientLines.map((item, index) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
            {data.length > 2 && (
              <div className="also-love-container">
                <h3>YOU'LL ALSO LOVE</h3>
                <div className="also-wrapper">
                  {data &&
                    data.splice(1, 4).map((item, index) => {
                      return (
                        <div className="also-box">
                          <Link to={`/details?q=${item.recipe.label}`}>
                            <div className="also-img ">
                              {" "}
                              <img src={item.recipe.image} alt="img" />
                            </div>

                            <div className="also-title">
                              <p>{item.recipe.label}</p>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>

          <div className="ad-container">
            <div className="social-icons"></div>
            <div className="ad-wrapper ad">
              <img src={ad} alt="adverise" />
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
      <FootSearch />
      <Footer />
    </>
  );
};

export default RecipeDetails;