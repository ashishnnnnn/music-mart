import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import { validate_input } from "../../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../Features/authentication/authSlice";

export const Signup = () => {
  const [userFormInput, setUserFromInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleaddtoast } = useToast();
  const handleInputChange = (e) => {
    setUserFromInput({
      ...userFormInput,
      [e.target.name]: e.target.value,
    });
  };

  const signupHandle = async (e) => {
    e.preventDefault();
    try {
      let validate_result = validate_input(
        userFormInput.email,
        userFormInput.password,
        userFormInput.confirmPassword
      );
      if (validate_result === "OK") {
        const response = await dispatch(
          signup({
            firstName: userFormInput.firstName,
            lastName: userFormInput.lastName,
            email: userFormInput.email,
            password: userFormInput.password,
          })
        );
        if (response.payload.message === "rejected") {
          throw "error";
        } else {
          handleaddtoast({
            message: `Welcome ${response.payload.response.createdUser.firstName}`,
            type: "alert-success",
          });
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
      handleaddtoast({
        message: "Something Error... Try Again",
        type: "alert-dang",
      });
    }
  };
  return (
    <div className="flex-center-column login-body">
      <form
        onSubmit={signupHandle}
        className="login-form flex-column gap-0-5 pad-1 fnt-1-2"
      >
        <div className="fnt-1-5 flex-center-row fnt-w-600 mar-b-1">SignUp</div>
        <div className="email-container">
          <div className="fnt-1-2">First Name</div>
          <input
            name="firstName"
            className="input pad-0-8 fnt-1-2"
            type="text"
            placeholder="Enter your First Name"
            value={userFormInput.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="email-container">
          <div className="fnt-1-2">Last Name</div>
          <input
            name="lastName"
            className="input pad-0-8 fnt-1-2"
            type="text"
            placeholder="Enter your Last Name"
            value={userFormInput.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="email-container">
          <div className="fnt-1-2">Email address</div>
          <input
            name="email"
            className="input pad-0-8 fnt-1-2"
            type="email"
            placeholder="Enter your email"
            value={userFormInput.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="password-conatiner">
          <div className="fnt-1-2">Password</div>
          <input
            name="password"
            className="input pad-0-8 fnt-1-2"
            type="password"
            placeholder="Enter Your Password"
            value={userFormInput.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="password-conatiner">
          <div className="fnt-1-2">Confirm Password</div>
          <input
            name="confirmPassword"
            className="input pad-0-8 fnt-1-2"
            type="password"
            placeholder="Enter Your Password"
            value={userFormInput.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          onClick={signupHandle}
          className="btn btn-primary flex-center-row text-align pad-0-8 fnt-1-2  cursor-pointer"
        >
          SignUp
        </button>
        <div
          onClick={() => {
            navigate("/login");
          }}
          className="flex-center-row fnt-w-500 cursor-pointer"
        >
          Already Have An Account
        </div>
      </form>
    </div>
  );
};
