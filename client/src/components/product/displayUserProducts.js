import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setBusinessUserProducts } from "../../redux/shopping/actions/productActions"
import Item from "./item";


function DisplayUserProducts({ business_id }) {
  const seller_products = useSelector((state) => state.shop.seller_products);
  console.log(seller_products)
  const dispatch = useDispatch();

  //fecth user_id 
  const { id } = useParams();


  useEffect(() => {
    dispatch(setBusinessUserProducts(id))
  }, [id, dispatch])

  return (
    <div className="container min-vh-100 mt-5">
      <div className="row">
        <Item business_id={business_id} />
      </div>
    </div>
  )
}

export default DisplayUserProducts;
