import React from "react";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import contactService from "../../services/contactService";
import { contactContent } from "../form/content";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string().required().email({ tlds: false }).label("Email"),
  message: Joi.string().min(2).max(400).required(),
});

function Contact() {
  const history = useNavigate();

  //REACT-HOOK-FORM
  const { register, handleSubmit, formState } = useForm({
    resolver: joiResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = async (data) => {
    await contactService.sendContactFrom(data);
    history.push("/");
  };

  return (
    <div className="container form">
      <PageHeader title="Contact us" />
      <div className="row">
        <div className="col-12">
          <p>Send a message and we will repsonse as soon as possible</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {contactContent.inputs.map((input, key) => {
              return (
                <div key={key}>
                  <label className="label">{input.label}</label>
                  <input
                    {...register(input.name)}
                    name={input.name}
                    className="input"
                    type={input.type}
                  />
                  <p className="error-message">{errors[input.name]?.message}</p>
                </div>
              );
            })}
            <button className="btn" type="submit">
              Build
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

export default Contact;

/* 

import Form from "../common/form";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import { toast } from "react-toastify";
import contactService from "../../services/contactService";

class Contact extends Form {
  state = {
    form: {
      name: "",
      email: "",
      message: "",
    },
  };

  schema = {
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().required().email({ tlds: false }).label("Email"),
    message: Joi.string().min(2).max(400).required(),
  };

  async doSubmit() {
    this.resetForm();
    const { form: data } = this.state;

    try {
      await contactService.sendContactFrom(data);
      toast.success("🎉🎆 Thanks For Registering ✔ 🎊🎇", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.props.history.replace("/");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    return (
      <div className="container min-vh-100 mt-5">
        <PageHeader title="Contact us" />
        <div className="row">
          <div className="col-12">
            <p>Contact us and we will answer you as soon as bossible</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <form onSubmit={this.handelSubmit} autoComplete="off" noValidate>
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email")}
              {this.renderInput("message", "Message")}
              <div>{this.renderButton("Send")}</div>

              <button
                className="btn btn-warning mt-3"
                onClick={() => this.resetForm()}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;





*/
