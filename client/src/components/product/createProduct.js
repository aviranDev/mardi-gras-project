import PageHeader from "../common/pageHeader";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import React from "react";
import { productConetent } from "../form/content";
import { createProductAction } from '../../redux/shopping/actions/productActions'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

/**
 * VALIDATION FORM SCHEMA
 */
const schema = Joi.object({
  imagePath: Joi.string(),
  title: Joi.string().min(2).max(255).required(),
  description: Joi.string().min(2).max(1024).required(),
  price: Joi.number().min(2).max(400).required(),
});


/**
 * CREATE PRODUCT FUNCTIONAL COMPONENT
 */
function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //REACT-HOOK-FORM
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({
    resolver: joiResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = async (data) => {
    await dispatch(createProductAction(data))
    navigate("/display-my-products");
  };

  return (
    <div className="container form">
      <PageHeader title="Create a new product" />
      <div className="row">
        <div className="col-12">
          <p>Build your product here</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {productConetent.inputs.map((input, key) => {
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

export default CreateProduct;



/* 

 const schema = Joi.object({
    bizName: Joi.string().min(2).max(255).required().label("Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone"),
    bizImage: Joi.string().min(11).max(1024).uri().label("Image").allow(""),
  });


*/