const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.secretKey;

const auth = async (req, res, next) => {
  const data = req.headers;
  const token1 = data.authorization.split(" ")[1];

  const token = token1;
  const currentTime = Math.floor(Date.now() / 1000);

  console.log(token);

  if (!token1) {
    try {
      req.isLoggedIn = false;
      console.log("innnnnn");
      return next();
    } catch (err) {
      console.log(err, "-------IN null or undefined token error");
    }
  }
  // const { exp, email } = jwt.verify(,SECRET_KEY);
  try {
    const { exp, email } = jwt.verify(token, SECRET_KEY);

    if (email && exp > currentTime) {
      console.log("yoooooo");
      req.isLoggedIn = true;
      return next();
    } else {
      req.isLoggedIn = false;
      return next();
    }
  } catch (err) {
    console.log("asdasd");
    console.log(err);
    req.isLoggedIn = false;
    next();
  }
};

module.exports = auth;