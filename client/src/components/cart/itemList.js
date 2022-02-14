import React from "react";
import Item from "./item";
import { useDispatch, useSelector } from "react-redux";
import { reduceItem, addToCart } from "../../redux/shopping/actions/cartActions";
import { Link } from "react-router-dom";
import { setItemsToCart, removeFromCart } from '../../redux/shopping/actions/cartActions';

function ItemList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.shop.cart);
  const { products, totalPrice, totalQty } = list

  /**
   * VALIDATE USER LOGED-IN
   */
  const TOKEN_KEY = 'my_token'
  const jwt = localStorage.getItem(TOKEN_KEY);

  /**
   * VALIDATE CART CAPACITY   
   * IF (TRUE) 
   * OUTPUT RETURN               
   */
  if (totalQty === 0 || !totalQty) {

    return (
      <div className="container min-vh-100 mt-5 text-center">
        <h1>The cart is empty</h1>

        <h5 className="mb-3">
          <Link to="/" className="text-body">
            <i className="fas fa-long-arrow-alt-left me-2"></i>
            Continue shopping
          </Link>
        </h5>

        <div className="row">
          <div className="col-12">
            <img
              className="img-fluid text-center"
              style={{ width: "50%" }}
              src="./img/shopping-cart.png"
              alt="2022"
            />
          </div>
        </div>
      </div>
    )
  }

  /**
   * REDUCE ITEM QTY BY 1
   * @param {*} id 
   */
  const reduceByOne = async (id) => {
    await dispatch(reduceItem(id));
    await dispatch(setItemsToCart())
  }

  /**
   * INCREMENT QTY BY 1
   * @param {*} id 
   */
  const incrementByOne = async (id) => {
    await dispatch(addToCart(id))
    await dispatch(setItemsToCart())
  }

  /**
   * REMOVE ITEM 
   * @param {*} id 
   */
  const removeItem = async (id) => {
    await dispatch(removeFromCart(id))
    dispatch(setItemsToCart())
  }

  return (
    <>
      <section className="min-vh-100" style={{ background: "#fdfcaf" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <h5 className="mb-3">
                        <Link to="/" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </Link>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                        </div>
                      </div>
                      <div className="row">
                        {products && (
                          products.map(({ item, qty, price }) => (
                            <Item
                              key={item._id}
                              product={item}
                              qty={qty}
                              amount={price}
                              onDelete={() => removeItem(item._id)}
                              onReduce={() => reduceByOne(item._id)}
                              onIncrement={() => incrementByOne(item._id)}
                            />
                          ))
                        )}
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <p>total quantity: {totalQty}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <p>total price: {totalPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {jwt ? (
                <div className="col-12 text-center">
                  <Link to={`/checkout-form`} className="checkout">
                    <button className="btn btn-primary btn-lg">Checkout</button>
                  </Link>
                </div>
              ) : (
                <div className="col-12 text-center">
                  <Link to={`/signin`} className="checkout">
                    <button className="btn btn-primary btn-lg">Checkout</button>
                  </Link>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  )
}




export default ItemList;