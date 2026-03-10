import axios from "axios";

export const sendInterest = async (data) => {
  try {
    const response = await axios.post(
      "https://sniperthink-assignment-tgbt.onrender.com/api/interest",
      data
    );

    return response.data;

  } catch (error) {
    console.error("API Error:", error);
    return { error: true };
  }
};