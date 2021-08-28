import React from "react";
import { Field, Form } from "formik";
import { MdLockOpen } from "react-icons/md";
import { AntInput, AntSwitch } from "@iso/ui/Antd/AntdInputWithFormik";
import Button from "@iso/ui/Antd/Button/Button";
import { MyFormWrapper } from "./SignUp.style";

const formStyle = {
  border: "1px solid gray",
  marginTop: "10px",
  height: "6vh",
  borderRadius: "3px",
};

const loginButtonStyle = {
  height: "6vh",
  borderRadius: "3px",
  backgroundColor: "#0C8A8F",
  textColor: "white",
  marginTop: "14px",
};

const MyRenderSignUpForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <MyFormWrapper>
      <form onSubmit={handleSubmit}>
        <input
          style={formStyle}
          name="username"
          placeholder="Username"
          type="text"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.username && touched.username && "error"}
        />
        {errors.username && touched.username && (
          <div className="input-feedback">{errors.username}</div>
        )}
        <input
          style={formStyle}
          name="password"
          placeholder="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password && "error"}
        />
        {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )}
        <input
          style={formStyle}
          name="confirmPassword"
          placeholder="ConFirm Password"
          type="password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword && "error"
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="input-feedback">{errors.confirmPassword}</div>
        )}
        <button style={loginButtonStyle} type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
    </MyFormWrapper>
  );
};

export default MyRenderSignUpForm;
