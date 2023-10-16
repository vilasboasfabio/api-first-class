import axios from "axios";

const URL_API = "https://api.adviceslip.com/advice";
const fetchApiDate = async () => {

  try {
    const response = await axios.get(URL_API);
    return response.data.slip.advice;

  }catch (error) {
    throw error;
  }
}

export default fetchApiDate;