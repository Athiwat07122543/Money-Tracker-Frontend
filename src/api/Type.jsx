import axios from "axios";

export const addType = async (name) => {
  try {
    const res = await axios.post("http://localhost:5173/api/type", name);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getType = async () => {
  try {
    const res = await axios.get("http://localhost:5173/api/type");
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const deleteType = async (id) => {
  try {
    const res = await axios.delete("http://localhost:5173/api/type/" + id);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
