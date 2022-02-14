import React, { useState, useEffect } from "react";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import productService from "../../services/productService";
import { useParams, Link, useNavigate } from "react-router-dom";

const schema = Joi.object({
  _id: Joi.string(),
  __v: Joi.number(),
  user_id: Joi.string(),
  imagePath: Joi.string().uri().label("Image").allow(""),
  title: Joi.string().min(2).max(255).required().label("Title"),
  description: Joi.string().min(2).max(1024).required().label("Description"),
  price: Joi.number().min(2).max(400).required().label("Price"),
});

function EditMyProduct() {
  const [products, setProducts] = useState({
    imagePath: "",
    title: "",
    description: "",
    price: "",
  });

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    async function fecthCard(id) {
      const { data } = await productService.getMyProducyById(id);
      setProducts(data);
    }
    fecthCard(id);
  }, [id, setProducts]);

  const validateForm = () => {
    //Validate from by the schema
    const { error } = schema.validate(products, {
      abortEarly: false,
    });

    if (!error) {
      return null;
    }

    const errors = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }

    console.log(errors);
    return errors;
  };

  const handleChange = ({ target }) => {
    setProducts({
      ...products,
      [target.name]: target.value,
    });
  };

  //EXECUTE FORM UPDATED DATA
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { ...products };
    console.log(product);
    const errors = validateForm();
    setProducts({ errors });

    if (errors) {
      return;
    }

    await productService.updateMyProduct(product);
    navigate("/display-my-products");
  };

  const editProduct = {

    inputs: [
      {
        label: "Image",
        name: "imagePath",
        type: "text",
        value: products.imagePath,
      },
      {
        label: "Title",
        name: "title",
        type: "text",
        value: products.title,
      },
      {
        label: "Description",
        name: "description",
        type: "text",
        value: products.description,
      },
      {
        label: "Price",
        name: "price",
        type: "text",
        value: products.price,
      },
    ],
  };

  return (
    <div className="container form">
      <PageHeader title="Create Product" />
      <div className="row">
        <div className="col-12">
          <p>Edit your product here</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            {editProduct.inputs.map((input, key) => {
              return (
                <div key={key}>
                  <label className="label">{input.label}</label>
                  <input
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
  );
}

export default EditMyProduct;

/* 

import Form from "../common/form";
import PageHeader from "../common/pageHeader";
import Joi from "joi";
import productService from "../../services/productService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class EditMyProduct extends Form {
  state = {
    form: {
      imagePath: "",
      title: "",
      description: "",
      price: "",
    },
  };

  schema = {
    _id: Joi.string(),
    imagePath: Joi.string().uri().label("Image").allow(""),
    title: Joi.string().min(2).max(255).required().label("Title"),
    description: Joi.string().min(2).max(1024).required().label("Description"),
    price: Joi.number().min(2).max(400).required().label("Price"),
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const {
      data: { _id, imagePath, title, description, price },
    } = await productService.getMyProducyById(id);

    this.setState({
      form: {
        _id,
        imagePath,
        title,
        description,
        price,
      },
    });
  }

  async doSubmit() {
    const { form: product } = this.state;
    await productService.updateMyProduct(product);
    toast("Product is updated..");
    this.props.history.replace("/display-my-products");
  }

  render() {
    return (
      <div className="container min-vh-100">
        <PageHeader title="Edit your product" />
        <form
          onSubmit={this.handelSubmit}
          className="col-lg-5"
          autoComplete="off"
          noValidate
        >
          {this.renderInput("imagePath", "Image", "text", false)}
          {this.renderInput("title", "Title", "text", true)}
          {this.renderInput("description", "Description", "text", true)}
          {this.renderInput("price", "Price", "text", true)}
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

export default EditMyProduct;



*/
