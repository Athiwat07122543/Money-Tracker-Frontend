import axios from "axios";

export const getList = async (date) => {
  try {
    const res = await axios.get(`https://money-tracker-backend-zca1.vercel.app/api/list?date=${date}`);
    return res;
  } catch (err) {
    console.log(err);
    return res.response;
  }
};

export const getSummary = async (date) => {
  try {
    const res = await axios.get(`https://money-tracker-backend-zca1.vercel.app/api/summary?date=${date}`);
    return res;
  } catch (err) {
    console.log(err);
    return res.response;
  }
};
