import axios from "axios";

export const addExpense = async (data) => {
  try {
    const res = await axios.post("https://money-tracker-backend-zca1.vercel.app/api/expense", data);

    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
