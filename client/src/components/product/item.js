import React from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/shopping/actions/cartActions';


function Item() {
  const products = useSelector((state) => state.shop.seller_products);
  const dispatch = useDispatch();

  const addItemToCart = (id) => {
    dispatch(addToCart(id));
  }

  if (products.length) {
    const allProducts = products.map((product) => {
      const { _id, imagePath, title, description, price } = product
      return (
        <div key={_id} className="col-md-6 col-lg-3 mt-3">
          <div className="card">
            <img src={imagePath} alt={title} className="p-2" width="100%" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="card-text mt-4">{description}</div>
              <div className="card-text border-top pt-3">
                <span rel="noreferrer" target="_blank">
                  <i className="bi bi-tag-fill"></i>
                  {price}$
                </span>
              </div>

              <button className="btn btn-outline-primary" onClick={() => addItemToCart(_id)}>
                add to cart
              </button>
              <Link className="nav-link" to={`/product-details/${_id}`}>
                View
              </Link>
            </div>
          </div>
        </div >
      );
    })
    return <>{allProducts}</>
  } else {
    return (
      <>
        <div className="col-12 text-center mt-2">
          <img className="img-thumbnail" src='https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png' alt="" />
        </div>

        <div className="col-12 text-center mt-2">
          <h3>No Products provided yet</h3>
          <h5 className="mb-3">
            <Link to="/" className="text-body">
              <i className="fas fa-long-arrow-alt-left me-2"></i>
              Continue shopping
            </Link>
          </h5>
        </div>
      </>
    )
  }
}

export default Item;