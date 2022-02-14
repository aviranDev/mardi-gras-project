import React, { Component } from "react";
import Input from "./input";
import Joi from "joi";

class Form extends Component {
  validateInput = ({ name, value }) => {
    const data = {
      [name]: value,
    };

    const schema = Joi.object({
      [name]: this.schema[name],
    });

    const { error } = schema.validate(data);
    return error ? error.details[0].message : null;
  };

  validateForm = () => {
    const {
      schema,
      state: { form },
    } = this;

    //Validate from by the schema
    const { error } = Joi.object(schema).validate(form, {
      abortEarly: false,
    });

    if (!error) {
      return null;
    }

    const errors = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }

    return errors;
  };

  handelSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors });

    if (errors) {
      return;
    }

    if (!this.doSubmit) {
      throw new Error("dosubmit function is required");
    }

    this.doSubmit();
  };

  handelChange = ({ target }) => {
    const { form, errors } = this.state;
    this.setState({
      form: {
        ...form,
        [target.name]: target.value,
      },
      errors: {
        ...errors,
        [target.name]: this.validateInput(target),
      },
    });
  };

  renderInput(name, label, type = "text", required = false, extras = {}) {
    const { form, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        onChange={this.handelChange}
        value={form[name]}
        error={errors && errors[name]}
        required={required}
        {...extras}
      />
    );
  }

  resetForm() {
    const { form } = this.state;
    const updatedForm = {};
    for (const key in form) {
      updatedForm[key] = "";
    }
    this.setState({ form: updatedForm });
  }

  renderButton(label) {
    return (
      <button disabled={this.validateForm()} className="btn btn-success mt-3">
        {label}
      </button>
    );
  }
}

export default Form;
