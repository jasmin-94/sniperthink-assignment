import axios from "axios";

export const sendInterest = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/interest",
      data
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};