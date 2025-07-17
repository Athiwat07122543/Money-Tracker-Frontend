import axios from "axios";

export const addExpense = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/api/expense", data);
    return res;
  } catch (err) {
    console.log(err);
    return res.response;
  }
};
