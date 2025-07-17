import axios from "axios";

export const getList = async (date) => {
  try {
    const res = await axios.get(`http://localhost:5173/api/list?date=${date}`);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getSummary = async (date) => {
  try {
    const res = await axios.get(`http://localhost:5173/api/summary?date=${date}`);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
