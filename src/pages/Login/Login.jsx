import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useToast } from "../../context/ToastContext";
import { login } from "../../Features/authentication/authSlice";
import { useState } from "react";

export const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleaddtoast } = useToast();
  const dispatch = useDispatch();
  const auth_state = useSelector((state) => state.auth);

  const loginHandle = async (guest_login) => {
    let input_email = "";
    let input_password = "";
    if (guest_login) {
      input_email = "ashish@gmail.com";
      input_password = "ashishkumar";
    } else {
      input_email = email;
      input_password = password;
    }
    try {
      const response = await dispatch(
        login({ email: input_email, password: input_password })
      );
      if (response.payload.message === "rejected") {
        throw "error";
      } else {
        handleaddtoast({
          message: `Welcome ${response.payload.response.foundUser.firstName}`,
          type: "alert-success",
        });
        navigate("/");
      }
    } catch (err) {
      handleaddtoast({
        message: "Enter Valid Email and Password",
        type: "alert-dang",
      });
    }
  };
  return (
    <div className="flex-center-column login-body">
      <div className="login-form flex-column gap-1 pad-1 fnt-1-2">
        <div className="fnt-1-5 flex-center-row fnt-w-600 mar-b-1">Login</div>
        <div className="email-container">
          <div className="fnt-1-2">Email address</div>
          <input
            className="input pad-0-8 fnt-1-2"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password-conatiner">
          <div className="fnt-1-2">Password</div>
          <input
            className="input pad-0-8 fnt-1-2"
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div
          onClick={() => {
            loginHandle(true);
          }}
          className="flex-center-row cursor-pointer theme-color fnt-w-600"
        >
          Login With Admin Credentials
        </div>

        <div
          onClick={() => {
            loginHandle(false);
          }}
          className="btn btn-primary flex-center-row text-align pad-0-8 fnt-1-2 cursor-pointer"
        >
          Login
        </div>
        <div
          onClick={() => {
            navigate("/signup");
          }}
          className="flex-center-row fnt-w-500 cursor-pointer"
        >
          Create Your Account
        </div>
      </div>
    </div>
  );
};
