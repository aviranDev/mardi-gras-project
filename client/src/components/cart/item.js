import React from "react";


function Item({ product: { _id, imagePath, title, description, price },
  qty,
  amount,
  onDelete,
  onReduce,
  onIncrement,
}) {

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={imagePath}
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: "65px" }}
              />
            </div>
            <div className="ms-3">
              <h5>{title}</h5>
              <p className="small mb-0">{description}</p>
            </div>
          </div>

          <span className="d-flex flex-row align-items-center" >
            <i className="bi bi-plus" onClick={onIncrement}></i>
          </span>

          <div className="d-flex flex-row align-items-center">
            <h5 className="fw-normal mb-0">{qty}</h5>
          </div>

          <span className="d-flex flex-row align-items-center" style={{ width: "70px" }}>
            {qty <= 1 ? (

              <i className="bi bi-dash" disabled></i>
            ) : (
              <i className="bi bi-dash" onClick={onReduce}></i>
            )}
          </span>
          <div style={{ width: "80px" }}>
            {price ? (
              <h5 className="mb-0">{amount}$</h5>
            ) : (
              <h5 className="mb-0">{price}$</h5>
            )}
          </div>

          <div href="#!" style={{ color: "#cecece" }} onClick={onDelete}>
            <i className="bi bi-trash"></i>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Item;
