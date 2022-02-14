import { Link } from "react-router-dom";

const Card = ({
  card: {
    _id,
    bizImage,
    bizName,
    bizAddress,
    bizPhone,
    bizDescription,
    user_id,
  },
}) => {
  return (
    <div className="col-md-6 col-lg-3 mt-3">
      <div className="card-deck mb-3 text-center"></div>
      <div className="card mb-4">
        <img src={bizImage} alt={bizName} className="p-2" width="100%" />
        <div className="card-body">
          <h5 className="card-title">{bizName}</h5>
          <div className="card-text mt-4">{bizDescription}</div>
          <div className="card-text border-top pt-3">
            <a rel="noreferrer" target="_blank" href={"tel:" + bizPhone}>
              <i className="bi bi-telephone-fill me-2"></i>
              {bizPhone}
            </a>
          </div>
          <div className="card-text border-top pt-3">
            <a
              rel="noreferrer"
              target="_blank"
              href={
                "https://www.google.com/maps/search/?api=1&query=" + bizAddress
              }
            >
              <i className="bi bi-geo-alt-fill me-2"></i>
              {bizAddress}
            </a>
          </div>

          <Link className="nav-link" to={`/display-user-products/${user_id}`}>
            products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
