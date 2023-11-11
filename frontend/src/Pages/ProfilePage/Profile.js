import React, { useEffect, useState } from "react";
import NewNav from "../../Components/NavBar/NewNav";
import "./profile.css";
import avatar from "../../Assets/avatar-icon.png";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import iceCreamIcon from "../../Assets/profile-page-icon.jpg";
import { useSelector, useDispatch } from "react-redux";
import ad from "../../Assets/adverise.webp";

const Profile = () => {
  const state = useSelector((state) => state.value.isLoggedIn);

  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const resp = await axios("https://foodwebsite-i47b.onrender.com/getuserdata");
      console.log(resp.data);
      if (resp.data.User) {
        setDate(resp.data.User.createdAt);
        setName(resp.data.User.email);
      }
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
    console.log(state, "===========state");
  }, [state]);

  return (
    <>
      <NewNav />
      <div className="profile-main-container">
        <header className="profile-header">
          <div className="header-cover">
            <div className="user-avatar-wrapper">
              {" "}
              <img src={avatar} alt="User Profile" />
            </div>
          </div>

          <div className="name-follower-container">
            <div className="follower-container">
              <div className="follower-wrapper">
                <div className="count-wrapper">
                  <div className="followers">
                    <p>Followers</p>
                    <p>0</p>
                  </div>
                  <hr />
                  <div className="following">
                    <p>Following</p>
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="name-join-wrapper">
              <div className="name-wrapper">
                <p>{name}</p>
              </div>
              <hr />
              <div className="joined-wrapper">
                <p>Joined {date}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="activity-container">
          <div className="filters-wrapper">
            <p className="filter-title">Filters</p>
            <ul>
              <li>Activity</li>
              <li>Recipes</li>
              <li>Photos</li>
              <li>Reviews</li>
              <li>Tweaks</li>
              <li>Questions</li>
              <li>Following</li>
              <li>Followers</li>
            </ul>
          </div>

          <div className="all-activity-wrapper">
            <div className="all-activity-txt">
              {" "}
              <p>All Activity</p>
            </div>

            <div className="activity-list">
              <div className="ice-cream-icon">
                <img src={iceCreamIcon} alt="icon" />
              </div>
              <div className="user-activity">
                {" "}
                <h3>UH OH!</h3>
                <p>Looks like {name} has no activity</p>
              </div>
            </div>
          </div>

          <div className="profile-ad-container ad">
            <img src={ad} alt="adverise" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;