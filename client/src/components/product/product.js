import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


function Product({ add }) {
  const products = useSelector((state) => state.shop.products);

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

              <button className="btn btn-outline-primary" onClick={() => add(_id)}>
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
    return null
  }
};

export default Product;








