import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../redux/shopping/actions/productActions";
import { addToCart } from '../../redux/shopping/actions/cartActions';

function ProductDetails() {
  const product = useSelector((state) => state.shop.product);
  const { _id, imagePath, title, description, price } = product
  const { id } = useParams();
  const dispatch = useDispatch();



  const addItemToCart = (id) => {
    dispatch(addToCart(id));
  }

  useEffect(() => {
    dispatch(selectedProduct(id))
  }, [id, dispatch])

  return (
    <div className="container xxl min-vh-100 mt-5 p-5">
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="pro-img-details">
            <img className="img-thumbnail" style={{ width: "100%" }} src={imagePath} alt={title} />
          </div>
        </div>


        <div className="col-md-6 mt-3">
          <h4 className="pro-d-title">{title}</h4>
          <p>
            {description}
          </p>
          <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">{price}</span></div>
          <p>
            <button className="btn btn-round btn-danger" type="button" onClick={() => addItemToCart(_id)}>
              <i className="fa fa-shopping-cart"></i>
              Add to Cart
            </button>
          </p>
        </div>

        <div className="row">
          <div className="col-6 mt-4">
            <Link className="nav-link link-success" to="/">
              <h3> Back to shopping page..</h3>
            </Link>
          </div>
        </div>


      </div>

    </div>
  )
}

export default ProductDetails;