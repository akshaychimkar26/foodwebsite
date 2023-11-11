import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import closeIcon from "../../Assets/cancel_8618474.png";
import fbIcon from "../../Assets/Auth/104458_facebook_social media_fb_social_icon.png";
import gmailIcon from "../../Assets/Auth/gmail.jpeg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../Feautes/Slice";
import appleIcon from "../../Assets/Auth/104447_apple_logo_icon.png";
import amazonIcon from "../../Assets/Auth/amazon-icon.jpg";

const Login = (props) => {
  const nav = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => console.log(state.value));

  const [errMsg, setErrMsg] = useState(null);

  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      // "https://food-com-backend.onrender.com/login",
      "https://foodwebsite-i47b.onrender.com/login",
      user
    );
    console.log(resp.data);
    const status = resp.data.msg;

    if (resp.data.token) {
      props.closeFunc();
      dispatch(setIsLoggedIn(true));
      localStorage.setItem("token", resp.data.token);
    }
    setErrMsg(resp.data.msg);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="main-container">
        <div className="close-btn-wrapper">
          <img onClick={props.closeFunc} alt="close button" src={closeIcon} />
        </div>

        <div className="auth-form-container login-form-container">
          <h2>LOG IN</h2>

          <form className="auth-form login-form">
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              onChange={onChange}
            />
            <div className="err-msg">{""}</div>
            <label>PASSWORD</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            <div className="err-msg">{errMsg} </div>

            <button onClick={handleClick}>LOG IN</button>
          </form>
        </div>

        <Link className="forgot-pass">FORGOT PASSWORD?</Link>

        <div className="auth-socials-container">
          <p className="continue-txt"> OR CONTINUE WITH</p>
          <div className="icons-container-login">
            <Link>
              <img src={fbIcon} alt="Icon" />
            </Link>
            <Link>
              <img src={gmailIcon} alt="Icon" />
            </Link>
            <Link>
              <img src={appleIcon} alt="icon" />
            </Link>
            <Link>
              <img src={amazonIcon} alt="icon" />
            </Link>
          </div>

          <div className="bottom-section">
            <p>Don't have acount yet?</p>
            <Link onClick={props.toggleReg}>Sign Up</Link>
          </div>
          <Link className="forgot-pass">FORGOT PASSWORD?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;