import React, { useEffect, useState } from "react";
import FootSearch from "../../Components/Footer Search/FootSearch";
import Footer from "../../Components/Footer/Footer";
import mainImg from "../../Assets/Homepages/Title Image/homepage-main-image.webp";
import explore1 from "../../Assets/Homepages/Explore more images/explore-1.webp";
import explore2 from "../../Assets/Homepages/Explore more images/explore-2.webp";
import explore3 from "../../Assets/Homepages/Explore more images/explore-3.webp";
import explore4 from "../../Assets/Homepages/Explore more images/explore-4.webp";
import explore5 from "../../Assets/Homepages/Explore more images/explore-5.webp";
import explore6 from "../../Assets/Homepages/Explore more images/explore-6.webp";
import craving1 from "../../Assets/Homepages/Craving images/craving-1.webp";
import craving2 from "../../Assets/Homepages/Craving images/craving-2.webp";
import craving3 from "../../Assets/Homepages/Craving images/craving-3.webp";
import trending1 from "../../Assets/Homepages/Trending now images/trending-1.webp";
import trending2 from "../../Assets/Homepages/Trending now images/trending-2.webp";
import trending3 from "../../Assets/Homepages/Trending now images/trending-3.webp";
import trending4 from "../../Assets/Homepages/Trending now images/trending-4.webp";
import dontmiss1 from "../../Assets/Homepages/Dont miss images/dontmiss-1.webp";
import dontmiss2 from "../../Assets/Homepages/Dont miss images/dontmiss-2.webp";
import dontmiss3 from "../../Assets/Homepages/Dont miss images/dontmiss-3.webp";
import moreideas1 from "../../Assets/Homepages/More Ideas images/moreideas-1.webp";
import moreideas2 from "../../Assets/Homepages/More Ideas images/moreideas-2.webp";
import moreideas3 from "../../Assets/Homepages/More Ideas images/moreideas-3.webp";
import moreideas4 from "../../Assets/Homepages/More Ideas images/moreideas-4.webp";
import peeches from "../../Assets/Homepages/Peeches/peeches.webp";
import userIcon from "../../Assets/Nav-buttons-icons/user-icon.jpg";

import { Link } from "react-router-dom";
import "./homepage.css";
import Login from "../../Components/Authentication/Login";
import Register from "../../Components/Authentication/Register";
import NewNav from "../../Components/NavBar/NewNav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../Feautes/Slice";
import { fetchRecipeList } from "../../Utilities/utilities";
import ad from "../../Assets/adverise.webp";

const Homepage = () => {
  const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [comments, setComments] = useState([
    {
      comment:
        "A recipe has no soul. You, as the cook, must bring soul to the recipe.",
      user: "Thomas Keller",
      time: "1 HOURS",
    },
    {
      comment: "Recipes tell you nothing. Learning techniques is the key.",
      user: "Tom Colicchio",
      time: "4 HOURS",
    },
    {
      comment:
        "This is my invariable advice to people: Learn how to cook- try new recipes, learn from your mistakes, be fearless, and above all have fun!",
      user: "Julia Child",
      time: "20 MINUTES",
    },
  ]);
  const [fanFav, setFanFav] = useState(null);

  const showAuth = () => {
    setShowLogin(true);
  };

  const toggleReg = () => {
    setShowRegister(true);
  };
  const toggleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const closeAuth = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const checkLoggedIn = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const resp = await axios(
      "https://food-com-backend.onrender.com/checkloggedin"
    );

    console.log(resp);
    dispatch(setIsLoggedIn(resp.data.isLoggedIn));
  };

  function getRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomFraction = Math.random();

    // Scale the randomFraction to the desired range (0 to 11)
    const randomNumber = Math.floor(randomFraction * 12);

    return randomNumber;
  }
  const randomNum = getRandomNumber();

  const fetchComments = async () => {
    try {
      const resp = await axios.get(
        "https://foodwebsite-i47b.onrender.com/getcomments"
      );
      console.log(resp.data);
      setComments(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  // for (let i = 0; data.length > 4; i++) {}

  const fetchFanFav = async () => {
    try {
      const resp = await fetchRecipeList("fan favourites");
      console.log(resp.hits);
      setFanFav(resp.hits);
    } catch (err) {
      console.log(err);
    }

    // console.log(resp.data);
  };

  useEffect(() => {
    checkLoggedIn();
    // fetchComments();
    fetchFanFav();
  }, []);

  return (
    <>
      {/* <Navbar func={showAuth} showLogin={false} /> */}
      <NewNav />
      <main>
        <div className="main-post-container">
          <div className="main-post-wrapper">
            <div className="main-img-wrapper">
              <img src={mainImg} alt="Grilled Chicken"></img>
              <div className="main-post-title-wrapper">
                <h1>10 Grilled Chicken Recipes</h1>
                <Link to="/recipe?q=grilled chicken">SEE THEM ALL</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="below-main-ad-container">
          <img src={ad} alt="adverise" />
        </div>

        <div className="comments-container">
          <div className="comments-section-title">
            <h2>FRESH FROM OUR COMMUNITY</h2>
            <Link>View All</Link>
          </div>
          <div className="comments-wrapper">
            {comments
              ? comments.map((item, index) => {
                  return (
                    <div className="comments-card" key={index}>
                      <div className="user-name">
                        <img src={userIcon} alt="icon" />
                        <div>
                          {" "}
                          <span className="user">{item.user}</span>
                          <span className="commented-txt"> commented</span>
                        </div>
                      </div>
                      <div className="comments-txt">{item.comment}</div>
                      <div className="comment-time">
                        <p>{item.time} AGO</p>
                      </div>
                    </div>
                  );
                })
              : "No Comments"}
          </div>
        </div>

        <div className="craving-container">
          <div className="craving-title">
            <h2>WHAT WE ARE CRAVING</h2>
          </div>
          <div className="craving-imgs-wrapper">
            <div className="craving-imgs">
              <Link to="/recipe?q=freezer friendly">
                <img src={craving1} alt="freezer friendly meals" />
                <div className="craving-title-wrapper">
                  <p className="collection">COLLECTION</p>
                  <p className="craving-title">10 FREEZER FRIENDLY MEALS</p>
                </div>
              </Link>
            </div>
            <div className="craving-imgs">
              <Link to="/recipe?q=kids lunch">
                <img src={craving2} alt="Lunch for Kids" />
                <div className="craving-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="craving-title">10 LUNCH IDEAS FOR KIDS</p>
                </div>
              </Link>
            </div>

            <div className="craving-imgs">
              <Link to="/recipe?q=corn">
                <img src={craving3} alt="Corn Recipes" />
                <div className="craving-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="craving-title">10 BEST CORN RECIPES</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="explore-more-container">
          <h2>EXPLORE MORE</h2>
          <div className="explore-more-img-wrapper">
            <div>
              <Link to="/recipe?q=grilling and bbq">
                <img src={explore1} alt="BBQ & GRILLING DISH" />
                <p className="explore-more-dishes">GRILLING & BBQ</p>
              </Link>
            </div>
            <div>
              <Link to="/recipe?q=international eats">
                <img src={explore2} alt="INTERNATIONAL EATS" />
                <p className="explore-more-dishes">INTERNATIONAL EATS</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=breakfast and brunch">
                <img src={explore3} alt="BREAKFAST & BRUNCH" />
                <p className="explore-more-dishes">BREAKFAST & BRUNCH</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=community picks">
                <img src={explore4} alt="COMMUNITY PICKS" />
                <p className="explore-more-dishes">COMMUNITY PICKS</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=quick and easy">
                <img src={explore5} alt="QUICK & EASY" />
                <p className="explore-more-dishes">QUICK & EASY</p>
              </Link>
            </div>{" "}
            <div>
              <Link to="/recipe?q=copycat">
                <img src={explore6} alt="COPYCAT RECIPES" />
                <p className="explore-more-dishes">COPYCAT RECIPES</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="below-explore-ad-container ad">
          <img src={ad} alt="adverise" />
        </div>

        <div className="trending-now-container">
          <div className="trending-title">
            <h2>TRENDING NOW</h2>
            <Link>View All</Link>
          </div>

          <div className="trending-imgs-wrapper">
            <div className="trending-imgs">
              <Link to="/details?q=pineapple zucchine bread">
                <img src={trending1} alt="PINEAPPLE ZUCCHINI BREAD" />
                <p>PINEAPPLE ZUCCHINI BREAD</p>
              </Link>
            </div>

            <div className="trending-imgs">
              <Link to="/details?q=spicy broccli chedder soup">
                <img src={trending2} alt="SPICY BROCCLI-CHEDDER SOUP" />
                <p>SPICY BROCCLI-CHEDDER SOUP</p>
              </Link>
            </div>

            <div className="trending-imgs">
              <Link to="/details?q=chicken enchiladas">
                <img src={trending3} alt="QUICK & EASY CHICKEN ENCHILADAS" />
                <p>QUICK & EASY CHICKEN ENCHILADAS</p>
              </Link>
            </div>

            <div className="trending-imgs">
              <Link to="/details?q=lemonade scones">
                <img src={trending4} alt="GLUTEN FREE LEMONADE SCONES" />
                <p>GLUTEN FREE LEMONADE SCONESS</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="dont-miss-container">
          <div className="dont-miss-title">
            <h2>DON'T MISS</h2>
          </div>
          <div className="dont-miss-imgs-wrapper">
            <div className="dont-miss-imgs">
              <Link to="/recipe?q=summer salads">
                <img src={dontmiss1} alt="freezer friendly meals" />
                <div className="dont-miss-title-wrapper">
                  <p className="collection">COLLECTION</p>
                  <p className="dont-miss-title">10 SUMMER SALADS</p>
                </div>
              </Link>
            </div>
            <div className="dont-miss-imgs">
              <Link to="/recipe?q=cucumber">
                <img src={dontmiss2} alt="Lunch for Kids" />
                <div className="dont-miss-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="dont-miss-title">10 COOL CUCUMBER RECIPES</p>
                </div>
              </Link>
            </div>

            <div className="dont-miss-imgs">
              <Link to="/recipe?q=one pot">
                <img src={dontmiss3} alt="Corn Recipes" />
                <div className="dont-miss-title-wrapper">
                  <p className="">COLLECTION</p>
                  <p className="dont-miss-title">10 EASY ONE POT MEALS</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="more-ideas-now-container">
          <div className="more-ideas-title">
            <h2>MORE IDEAS</h2>
            <Link>View All</Link>
          </div>

          <div className="more-ideas-imgs-wrapper">
            <div className="more-ideas-imgs">
              <Link to="/details?q=chicken tikka masala">
                <img src={moreideas1} alt="CHICKEN TIKKA MASALA" />
                <p>CHICKEN TIKKA MASALA</p>
              </Link>
            </div>

            <div className="more-ideas-imgs">
              <Link to="/details?q=vegan bacon">
                <img src={moreideas2} alt="VEGAN BACON" />
                <p>VEGAN BACON</p>
              </Link>
            </div>

            <div className="more-ideas-imgs">
              <Link to="/details?q=big mac sauce">
                <img src={moreideas3} alt="COPYCAT MC DONALD'S BIG MAC SAUCE" />
                <p>COPYCAT MC DONALD'S BIG MAC SAUCE</p>
              </Link>
            </div>

            <div className="more-ideas-imgs">
              <Link to="/details?q=shrimp in butter bear sauce">
                <img src={moreideas4} alt="DIRT SHRIMP IN BUTTER BEER SAUCE" />
                <p>DIRTY SHRIMP IN BUTTER BEER SAUCE</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="below-more-ideas-ad-container ad">
          <img src={ad} alt="adverise" />
        </div>

        <div className="peel-peaches-container">
          <div className="peech-img-wrapper">
            <Link to="details?q=peeches">
              <img src={peeches} alt="HOW TO PEEL PEACHES" />
            </Link>
          </div>
          <div className="peech-desc-wrapper">
            {" "}
            <Link to="/details?q=peeches">
              <p>COLLECTION</p>
              <h3>HOW TO PEEL PEACHES,3 WAYS</h3>
              <p className="peeling-desc">
                There’s more than one way to peel a peach! Here are three ways
                to get the job done.
              </p>
            </Link>
          </div>
        </div>

        <div className="fav-container">
          <div className="fav-wrapper">
            <div className="fav-title-wrapper">
              <h3>FAN FAVOURITES</h3>
              <p>
                <Link>View All</Link>
              </p>
            </div>

            <div className="fav-cards-wrapper">
              {fanFav
                ? fanFav.map((item, index) => {
                    return (
                      <div className="fav-card">
                        <Link to={`/details?q=${item.recipe.label}`}>
                          <div className="fav-img">
                            <img src={item.recipe.image} alt={item.label} />
                          </div>
                          <div className="fav-dish">
                            <p>{item.recipe.label}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                : "Loading"}
            </div>
          </div>
        </div>
      </main>
      {showLogin && <Login func={closeAuth} toggle={toggleReg} />}
      {showRegister && <Register func={closeAuth} toggle={toggleLogin} />}
      <FootSearch />
      <Footer />
    </>
  );
};

export default Homepage;