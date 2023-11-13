import React from "react";
import "bootstrap";
import { StarFill } from "react-bootstrap-icons";

function Product({ details, handleAddItem}) {
  return (
    <>
      {/* <!-- Section-->         */}

      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            {details.sale}
          </div>
          {/* <!-- Product image--> */}
          <img className="card-img-top" src={details.img} alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{details.title}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div>{details.rating ? <StarFill /> : ""}</div>
                <div>{details.rating ? <StarFill /> : ""}</div>
                <div>{details.rating ? <StarFill /> : ""}</div>
                <div>{details.rating ? <StarFill /> : ""}</div>
                <div>{details.rating ? <StarFill /> : ""}</div>
              </div>
              {/* <!-- Product price--> */}

              <span
                className={
                  details.oldprice
                    ? "text-muted text-decoration-line-through"
                    : " "
                }
              >
                &#36;{details.oldprice} - 
                </span>  &#36;{details.newprice}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#" type="button" onClick={() => handleAddItem(details)}>
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
