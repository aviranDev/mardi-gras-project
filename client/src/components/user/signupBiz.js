import React from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../common/pageHeader";
import { createUser } from "../../services/userService";
import { Navigate } from "react-router-dom";
import userService from "../../services/userService";
import { signUpContent } from "../form/content";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(2).max(255).required(),
  password: yup.string().min(6).max(255).required(),
  email: yup.string().email("Invalid email format").required(),
});

function Signupbiz() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const body = { ...data, biz: true };
    try {
      await createUser(body);
      await userService.logIn(body.email, body.password);
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
        <PageHeader title="Business sign up" />
        <div className="row">
          <div className="col-12">
            <p>Register to mardi gras shop</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              {signUpContent.inputs.map((input, key) => {
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
                Signup
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

export default Signupbiz;
