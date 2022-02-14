import React from "react";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { generateCardProduction } from '../../redux/shopping/actions/cardActions'
import { cardContent } from "../form/content";

/**
 * VALIDATION FORM SCHEMA
 */
const schema = Joi.object({
  bizName: Joi.string().min(2).max(255).required(),
  bizDescription: Joi.string()
    .min(2)
    .max(1024)
    .required(),
  bizAddress: Joi.string().min(2).max(400).required(),
  bizPhone: Joi.string()
    .min(9)
    .max(10)
    .required()
    .regex(/^0[2-9]\d{7,8}$/),
  bizImage: Joi.string(),
});


/**
 * CREATE CARD FUNCTIONAL COMPONENT
 */
function CreateCard() {
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
    await dispatch(generateCardProduction(data))
    // setCards(data)
    navigate("/display-my-cards");
  };


  return (
    <div className="container form">
      <PageHeader title="Create Shop" />
      <div className="row">
        <div className="col-12">
          <p>Build your product here</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {cardContent.inputs.map((input, key) => {
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


export default CreateCard;




/* import Form from "../common/form";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import cardService from "../../services/cardService";
import { toast } from "react-toastify";

class CreateCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
  };



  schema = {
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
  };

  async doSubmit() {
    const {
      form: { bizImage, ...body },
    } = this.state;

    if (bizImage) {
      body.bizImage = bizImage;
    }

    try {
      await cardService.createCard(body);
      toast("A new card is opened");
      this.props.history.push("/display-my-cards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <div className="container min-vh-100 mt-5">
        <PageHeader title="Create a business card" />
        <form
          onSubmit={this.handelSubmit}
          className="col-lg-5"
          autoComplete="off"
          noValidate
        >
          {this.renderInput("bizName", "Name", "text", true)}
          {this.renderInput("bizDescription", "Description", "text", true)}
          {this.renderInput("bizAddress", "Address", "text", true)}
          {this.renderInput("bizPhone", "Phone", "text", true)}
          {this.renderInput("bizImage", "Image", "text", false)}
          <div className="mt-2">{this.renderButton("Create card")}</div>
        </form>
      </div>
    );
  }
}

export default CreateCard; */