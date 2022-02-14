import React from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../common/pageHeader";
import userService from "../../services/userService";
import { Navigate } from "react-router-dom";
import { signInContent } from "../form/content";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup.string().min(6).max(255).required(),
  email: yup.string().email("Invalid email format").required(),
});

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data
    try {
      await userService.logIn(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        errors({ errors: { email: response.data } });
      }
    }
  };
  console.log(errors);

  if (userService.getCurrentUser()) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="container form">
        <PageHeader title="Login" />


        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              {signInContent.inputs.map((input, key) => {
                return (
                  <div key={key}>
                    <label className="label">{input.label}</label>
                    <input
                      {...register(input.name)}
                      name={input.name}
                      className="input"
                      type={input.type}
                    />
                    <p className="error-message">
                      {errors[input.name]?.message}
                    </p>
                  </div>
                );
              })}
              <button className="btn" type="submit">
                Login
              </button>
            </form>
          </div>

          <div className="col-6">
            <img className="logo-signup" src="img/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;



