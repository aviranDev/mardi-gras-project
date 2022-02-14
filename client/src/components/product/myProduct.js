import { Link } from "react-router-dom";

const MyProduct = ({
  product: { _id, imagePath, title, description, price },
  onDelete,
}) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
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
          <Link to={`/display-my-products/edit/${_id}`}>
            <i className="bi bi-pencil-fill me-2"></i> Edit
          </Link>

          <button className="btn btn-danger m-4" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
