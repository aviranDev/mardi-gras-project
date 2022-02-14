import React from "react";


function CheckoutDetails({ item: { title, price },
  qty,
  amount,
}) {

  return (
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between">
        <span>{title}</span>
        <strong>{qty}</strong>
        <div style={{ width: "80px" }}>
          {price ? (
            <span className="mb-0">{amount}$</span>
          ) : (
            <span className="mb-0">{price}$</span>
          )}
        </div>
      </li>
    </ul>
  )
}

export default CheckoutDetails;
