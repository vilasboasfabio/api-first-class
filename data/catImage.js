import axios from "axios";

const URL_API = "https://api.thecatapi.com/v1/images/search?limit=10";
const kitty = async () => {

  try {
    const response = await axios.get(URL_API);
    return response.data[0].url;

  }catch (error) {
    throw error;
  }
}

export default kitty;
