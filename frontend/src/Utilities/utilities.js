import axios from "axios";

// Creating a function to fetch list of particular query so that we can re-use it
const fetchRecipeList = async (query) => {
  try {
    const resp = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=22808401&app_key=d34187cbebcd959ec274ca935a7191e5&type=public`
    );
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchRecipeDetails = async (query) => {
  try {
    const resp = await axios(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=22808401&app_key=d34187cbebcd959ec274ca935a7191e5&type=public`
    );

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export { fetchRecipeList, fetchRecipeDetails };