import axios from "axios";

export const getList = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/list");
    return res;
  } catch (err) {
    console.log(err);
    return res.response;
  }
};

export const getSummary = async (date) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/summary?date=${date}`);
    return res;
  } catch (err) {
    console.log(err);
    return res.response;
  }
};
