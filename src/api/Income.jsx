import axios from "axios";

export const addIncome = async (data) => {
  try {
    const res = await axios.post("http://localhost:5173/api/income", data);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
