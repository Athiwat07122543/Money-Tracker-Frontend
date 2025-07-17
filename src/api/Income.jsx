import axios from "axios";

export const addIncome = async (data) => {
  try {
    const res = await axios.post("https://money-tracker-backend-zca1.vercel.app/api/income", data);
    return res;
  } catch (err) {
    console.log(err);
    return res.response;
  }
};
