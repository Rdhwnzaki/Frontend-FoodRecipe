import axios from "axios";
import Router from "next/router";

export const otpPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: "CONFIRM_OTP_PENDING" });
    const result = await axios.post(
      `${process.env.URL_BASE}/users/verif`,
      data
    );
    const otp = result.data.message;
    dispatch({ type: "CONFIRM_OTP_SUCCESS", payload: otp });
    Router.push("/login");
    console.log("Confirm Otp Success");
  } catch (err) {
    console.log("User Confirm  Otp Fail");
    console.log(err);
  }
};
