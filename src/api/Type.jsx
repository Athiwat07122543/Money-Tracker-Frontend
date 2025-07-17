import axios from "axios";

export const addType = async (name) => {
  try {
    const res = await axios.post("https://money-tracker-backend-zca1.vercel.app/api/type", name);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getType = async () => {
  try {
    const res = await axios.get("https://money-tracker-backend-zca1.vercel.app/api/type");
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const deleteType = async (id) => {
  try {
    const res = await axios.delete("https://money-tracker-backend-zca1.vercel.app/api/type/" + id);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
