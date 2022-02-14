import React, { useState, useEffect } from "react";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import cardService from "../../services/cardService";
import { useParams, Link, useNavigate } from "react-router-dom"


const schema = Joi.object({
  _id: Joi.string(),
  bizNumber: Joi.string(),
  orderByNumber: Joi.string(),
  __v: Joi.number(),
  user_id: Joi.string(),
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
  bizImage: Joi.string().min(11).max(1024).required().uri().label("Image").allow(""),
});


function EditMyCard() {
  const [cards, setCards] = useState({
    bizName: "",
    bizDescription: "",
    bizAddress: "",
    bizPhone: "",
    bizImage: "",
  })

  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();


  const validateForm = () => {
    //Validate from by the schema
    const { error } = schema.validate(cards, {
      abortEarly: false,
    });

    if (!error) {
      return null;
    }

    const errors = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }

    console.log(errors)
    return errors;
  };

  console.log(validateForm())


  const editCard = {
    inputs: [
      {
        label: 'Name',
        name: 'bizName',
        type: 'text',
        value: cards.bizName,
      },
      {
        label: 'Description',
        name: 'bizDescription',
        type: 'text',
        value: cards.bizDescription,
      },
      {
        label: 'Address',
        name: 'bizAddress',
        type: 'text',
        value: cards.bizAddress,
      },
      {
        label: 'Phone',
        name: 'bizPhone',
        type: 'text',
        value: cards.bizPhone,
      },
      {
        label: 'Image',
        name: 'bizImage',
        type: 'text',
        value: cards.bizImage,
      },
    ],
  }


  useEffect(() => {
    async function fecthCard(id) {
      const { data } = await cardService.getMyCardById(id);
      setCards(data)
    }
    fecthCard(id);
  }, [id, setCards,])


  const handleChange = ({ target }) => {
    setCards({
      ...cards,
      [target.name]: target.value,
    })
  };


  //EXECUTE FORM UPDATED DATA
  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = { ...cards }
    console.log(card)
    const errors = validateForm();
    setCards({ errors });

    if (errors) {
      return;
    }

    await cardService.updateMyCard(card);
    navigate("/display-my-cards");
  }

  return (
    <div className="container form">
      <PageHeader title="Create Shop" />
      <div className="row">
        <div className="col-12">
          <p>Edit your product here</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            {editCard.inputs.map((input, key) => {
              return (
                <div key={key}>
                  <label className="label">{input.label}</label>
                  <input
                    // {...register(input.name)}
                    name={input.name}
                    className="input"
                    type={input.type}
                    defaultValue={input.value}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
            <button disabled={validateForm()} className="btn" type="submit">
              Save
            </button>

            <Link to=".." className="mt-3 me-4 btn btn-secondary">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditMyCard;



/*

import Form from "../common/form";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import cardService from "../../services/cardService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class EditMyCard extends Form {
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
    _id: Joi.string(),
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

  async componentDidMount() {
    const id = this.props.match.params.id;
    const {
      data: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
    } = await cardService.getMyCardById(id);

    this.setState({
      form: {
        _id,
        bizName,
        bizDescription,
        bizAddress,
        bizPhone,
        bizImage,
      },
    });
  }

  async doSubmit() {
    const { form: card } = this.state;
    console.log(card)
    await cardService.updateMyCard(card);
    toast("Card is updated..");
    this.props.history.replace("/display-my-cards");
  }

  render() {
    return (
      <div className="container min-vh-100">
        <PageHeader title="Edit your business card" />
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
          <div className="mt-2">
            <Link to=".." className="mt-3 me-4 btn btn-secondary">
              Cancel
            </Link>
            {this.renderButton("Save")}
          </div>
        </form>
      </div>
    );
  }
}

export default EditMyCard;

*/