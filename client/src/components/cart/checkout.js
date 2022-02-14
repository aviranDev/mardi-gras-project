import React, { useEffect } from "react";
import PageHeader from '../common/pageHeader';
import { useSelector, useDispatch } from 'react-redux'
import { checkoutUserPayment } from '../../redux/shopping/actions/cartActions';
import { displayUserDetails } from '../../redux/user/userActions';
import CheckoutDetails from "./checkoutDetails";


const CheckoutForm = () => {
  const list = useSelector((state) => state.shop.cart);
  const { products, totalQty, totalPrice } = list
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(displayUserDetails())
  }, [dispatch])

  const user = useSelector((state) => state.user.user_data)
  const { name, email, _id } = user
  const sendOrder = async (body) => {
    try {
      await dispatch(checkoutUserPayment(body))
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }

  }
  const body = { _id, ...list }
  return (
    <div className="container min-vh-100 pt-5 mt-5">
      <div className="row">
        <div className="col-md-4 order-md-2 mt-4 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Total quantity: </span>
            <span className="badge text-secondary badge-pill">
              {totalQty}
            </span>
          </h4>

          <div>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>{totalPrice}$</strong>
              </li>
            </ul>

            {products && (
              products.map(({ item, qty, price }) => (
                <ul key={item._id} className="list-group mb-3">
                  <CheckoutDetails key={item._id} item={item} qty={qty} amount={price} />
                </ul>
              ))
            )}
          </div>

          <div className="col-6 ms-4 mt-4">
            <img className="logo-signup" src="img/logo.png" alt="logo" />
          </div>
        </div>
        <div className="col-md-8 order-md-1">
          <PageHeader title={`Hello ${name}`} />
          <form>
            <div>
              <span>Email: <strong>{email}</strong></span>
            </div>

            <div>
              <h5>Make an order</h5>
              <span>Here 🛎</span>
            </div>
            <br />
            <button className="btn btn-primary btn-lg" onClick={() => sendOrder(body)} >Checkout</button>
          </form>
        </div>
      </div>
    </div >
  )
}



export default CheckoutForm;

