import React, { useState, useEffect } from "react";
import productService from "../../services/productService";
import MyProduct from "./myProduct";
import Border from "../common/border";
import PageHeader from "../common/pageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data } = await productService.getMyProducts();
    if (data.length) {
      setProducts(data)
    }
  }

  const handelProductDelete = async (id) => {
    await productService.deleteProductById(id);
    toast("Product deleted");
    setProducts({
      products: products.filter((product) => product._id !== id)
    })
    fetchProducts()
  };

  return (
    <div className="container min-vh-100 mt-4">
      <Border />
      <PageHeader title="My products" />
      <div className="row">
        <div className="col-8">
          <p>Here are listed all of your custom products</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Link to="/create-product">
            {" "}
            <i className="bi bi-plus"></i>Create a new product
          </Link>
        </div>
      </div>
      <div className="row">
        {products.length ? (
          products.map((product) => (
            <MyProduct
              key={product._id}
              product={product}
              onDelete={() => handelProductDelete(product._id)}
            />
          ))
        ) : (
          <h5>No Products yet</h5>
        )}
      </div>
    </div>
  );
}

export default MyProducts;

/* 




import React, { Component } from "react";
import productService from "../../services/productService";
import MyProduct from "./myProduct";
import Border from "../common/border";
import PageHeader from "../common/pageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class MyProducts extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    const { data } = await productService.getMyProducts();
    if (data.length) {
      this.setState({
        products: data,
      });
    }
  }

  handelProductDelete = async (id) => {
    await productService.deleteProductById(id);
    toast("Product deleted");

    const { products } = this.state;
    this.setState({
      products: products.filter((product) => product._id !== id),
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="container min-vh-100 mt-4">
        <Border />
        <PageHeader title="My products" />
        <div className="row">
          <div className="col-8">
            <p>Here are listed all of your custom products</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Link to="/create-product">
              {" "}
              <i className="bi bi-plus"></i>Create a new product
            </Link>
          </div>
        </div>
        <div className="row">
          {products.length ? (
            products.map((product) => (
              <MyProduct
                key={product._id}
                product={product}
                onDelete={() => this.handelProductDelete(product._id)}
              />
            ))
          ) : (
            <h5>No Products yet</h5>
          )}
        </div>
      </div>
    );
  }
}

export default MyProducts;






*/
